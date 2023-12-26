import { LoginUserResult } from "user-model";
import { $user } from "../user.store";

export const loginUser = (data: LoginUserResult) => $user.set(data);
