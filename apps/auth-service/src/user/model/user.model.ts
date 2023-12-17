import { UserData } from "database-core";

export type RegisterUserDto = Omit<UserData, "address">;
export type LoginUserDto = Pick<UserData, "email" | "password">;
