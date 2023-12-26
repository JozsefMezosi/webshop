import { $user } from "../user.store";

export const setAuthToken = (token: string, exp: number) => {
  const user = $user.get();
  if (!user) {
    throw new Error("User is not logged in, please log in first!");
  }
  $user.set({
    ...user,
    tokens: { ...user.tokens, authToken: { value: token, exp } },
  });
};
