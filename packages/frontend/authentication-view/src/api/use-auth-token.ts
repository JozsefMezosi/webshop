import { useStore } from "@nanostores/react";
import { $user } from "../store/user.store";
import { useEffect, useState } from "react";

export const useAuthToken = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | undefined>();
  const user = useStore($user);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const tokens = user?.tokens;
        if (!tokens) {
          setToken(undefined);
          return;
        }

        const { authToken, refreshToken } = tokens;
        if (new Date(refreshToken.exp) > new Date()) {
          setToken(authToken.value);
        }
      } catch (error) {
        console.log("todo");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user, user?.tokens]);

  return { token, isLoading };
};
