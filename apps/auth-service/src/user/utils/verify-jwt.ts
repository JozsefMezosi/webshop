import jwt from "jsonwebtoken";

export const verifyJwt = (token: string) =>
  jwt.verify(token, process.env.JWT_SECRET);
