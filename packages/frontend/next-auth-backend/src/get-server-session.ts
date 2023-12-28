import { getServerSession as NextAuthGetServerSession } from "next-auth";
import { authOptions } from "./next-auth-options";
export const getServerSession = async () => {
  const session = await NextAuthGetServerSession(authOptions);

  if (!session) {
    return null;
  }

  if (session.error) {
    return null;
  }

  if (!session.user) {
    return null;
  }

  return session;
};
