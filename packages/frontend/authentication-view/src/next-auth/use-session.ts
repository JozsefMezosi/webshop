import { useSession as NextAuthUseSession } from "next-auth/react";

export const useCurrentSession = () => {
  const session = NextAuthUseSession();

  if (session.status !== "authenticated" || !session.data) {
    return null;
  }

  if (session.data.error) {
    return null;
  }

  return session.data;
};
