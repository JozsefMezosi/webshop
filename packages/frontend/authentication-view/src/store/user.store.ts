import { persistentAtom } from "@nanostores/persistent";
import { LoginUserResult } from "user-model";
export const $user = persistentAtom<LoginUserResult | undefined>(
  "user",
  undefined,
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);
