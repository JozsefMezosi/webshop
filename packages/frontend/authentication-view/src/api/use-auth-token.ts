import { useStore } from "@nanostores/react";
import { $user } from "../store/user.store";
import { useMemo } from "react";

export const useAuthToken = () => {
  const user = useStore($user);

  return useMemo(() => {
    const tokens = user?.tokens;
    if (!tokens) {
      return undefined;
    }

    const { authToken, refreshToken } = tokens;
    if (new Date(refreshToken.exp) > new Date()) {
      return authToken.value;
    }
  }, [user?.tokens]);
};
