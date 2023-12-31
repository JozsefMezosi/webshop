import { UserData } from "@common/user-model";
import { runQuery } from "../../utils/run-query";

export const findUserByEmail = async (
  email: string
): Promise<UserData | undefined> =>
  (
    await runQuery<{
      user: {
        properties: UserData;
      };
    }>("MATCH (user:User {email: $email}) return user", { email })
  ).records[0]?.get("user").properties;
