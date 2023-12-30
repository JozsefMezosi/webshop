import Cookies from "js-cookie";
import {
  TokenResultWithRoles,
  UserLoginResult,
  UserSession,
} from "@common/user-model";
import { UserLoginResultCookieName } from "./user-session-cookie-name";
import { authService } from "../service/axios/auth.service";

class SessionStorage {
  // eslint-disable-next-line no-unused-vars
  observers: Map<string, (session: UserSession | undefined) => void> =
    new Map();

  session: UserLoginResult | undefined = this.getSession();

  setSession(session: UserLoginResult | undefined) {
    if (session) {
      Cookies.set(UserLoginResultCookieName, JSON.stringify(session), {
        sameSite: "strict",
        expires: session.tokens.refreshToken.expire,
        secure: process.env.NODE_ENV === "production",
      });
    } else {
      Cookies.remove(UserLoginResultCookieName);
    }

    this.session = session;
    this.notifyObservers();
  }

  subscribe(
    name: string,
    // eslint-disable-next-line no-unused-vars
    callback: (session: UserSession | undefined) => void
  ) {
    this.observers.set(name, callback);
  }

  unsubscribe(name: string) {
    this.observers.delete(name);
  }

  private notifyObservers() {
    const session = this.getUserSession();
    this.observers.forEach((func) => func(session));
  }

  private async refreshOrGetToken() {
    const session = this.session;

    if (!session) {
      return undefined;
    }

    const {
      tokens: { authToken, refreshToken },
    } = session;

    if (authToken.expire > Date.now()) {
      return authToken.value;
    }

    try {
      const { data } = await authService.post<TokenResultWithRoles>(
        "auth/login",
        {},
        { headers: { refreshToken: refreshToken.value } }
      );

      const newSession = {
        tokens: {
          refreshToken: session.tokens.refreshToken,
          authToken: { expire: data.expire, value: data.value },
        },
        userData: { ...session.userData, roles: data.roles },
      };

      this.setSession(newSession);
      return this.session?.tokens.authToken.value;
    } catch (error) {
      this.setSession(undefined);
      return undefined;
    }
  }

  private getSession() {
    const session = Cookies.get(UserLoginResultCookieName);

    if (!session) {
      return undefined;
    }

    return JSON.parse(session) as UserLoginResult;
  }

  getUserSession() {
    const session = this.session;
    if (!session) {
      return undefined;
    }
    const sessionData: UserSession = {
      getToken: this.refreshOrGetToken,
      userData: session.userData,
    };

    return sessionData;
  }
}

export const Session = new SessionStorage();
