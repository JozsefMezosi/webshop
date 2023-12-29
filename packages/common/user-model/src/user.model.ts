import { UserRoles } from "./user-roles.model";

export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: UserRoles[];
  addresses: Array<{
    country: string;
    zipCode: string;
    city: string;
    street: string;
    houseNumber: string;
  }>;
}

export type UserLoginDto = Pick<UserData, "email" | "password">;
export type RegisterUserDto = Omit<UserData, "addresses" | "roles">;
export type LoginUserDto = Pick<UserData, "email" | "password">;

export type TokenResult = { value: string; expire: number };
export type TokenResultWithRoles = TokenResult & { roles: UserRoles[] };
export interface UserLoginResult {
  tokens: {
    authToken: TokenResult;
    refreshToken: TokenResult;
  };
  userData: {
    email: string;
    roles: UserRoles[];
    name: {
      firstName: string;
      lastName: string;
    };
  };
}

export type UserSession = Omit<UserLoginResult, "tokens"> & {
  getToken: () => Promise<string | undefined>;
};
