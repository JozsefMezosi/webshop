import { UserRoles } from "./user-roles.model";

export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: UserRoles;
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

export type TokenResult = { value: string; exp: number };
export interface LoginUserResult {
  tokens: {
    authToken: TokenResult;
    refreshToken: TokenResult;
  };
  userData: {
    name: {
      firstName: string;
      lastName: string;
    };
  };
}
