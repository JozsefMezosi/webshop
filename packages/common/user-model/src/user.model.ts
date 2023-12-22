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
export type RegisterUserDto = Omit<UserData, "address">;
export type LoginUserDto = Pick<UserData, "email" | "password">;

export interface LoginUserResult {
  tokens: {
    token: { value: string; exp: number };
    refreshToken: { value: string; exp: number };
  };
  userData: {
    name: {
      firstName: string;
      lastName: string;
    };
  };
}
