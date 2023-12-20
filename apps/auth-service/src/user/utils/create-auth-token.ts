import { UserData } from "database-core";
import { signJwt } from "./sign-jwt";

interface CreateAuthTokenProps {
  email: string;
  roles: UserData["roles"];
}
export const createAuthToken = ({ email, roles }: CreateAuthTokenProps) =>
  signJwt({
    payload: { email, roles },
    subject: email,
  });
