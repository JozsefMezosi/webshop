import { Session } from "../cookie-store/session";
export const logout = () => Session.setSession(undefined);
