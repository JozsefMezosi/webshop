import jwt from "jsonwebtoken";

interface SignJwtProps<T extends string | object | Buffer> {
  payload: T;
  expiresIn: jwt.SignOptions["expiresIn"];
  subject?: string;
}
export const signJwt = <T extends string | object | Buffer>({
  payload,
  expiresIn = process.env.JWT_EXP_IN_SECONDS,
  subject = undefined,
}: SignJwtProps<T>) => {
  const options: jwt.SignOptions = { expiresIn };
  if (subject) {
    options.subject = subject;
  }
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};
