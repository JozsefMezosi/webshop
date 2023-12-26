import { UserRoles } from "user-model";
import { signJwt } from "./sign-jwt";

interface CreateAuthTokenProps {
  email: string;
  roles: UserRoles;
}
export const createAuthToken = ({ email, roles }: CreateAuthTokenProps) =>
  signJwt({
    payload: { email, roles },
    subject: email,
    expiresIn: process.env.JWT_EXP_IN_SECONDS,
  });
