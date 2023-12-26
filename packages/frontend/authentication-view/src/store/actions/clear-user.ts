import { $user } from "../user.store";

export const clearUser = () => {
  $user.set(undefined);
};
