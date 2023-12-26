import { TokenResult } from "user-model";

export const isJwtTokenExpiredOrUndefined = (
  token?: TokenResult
): token is undefined => !token?.exp || new Date(token?.exp) <= new Date();
