import { UserData } from "database-core";
import { runQuery } from "../../utils/run-query";

export const findUserByEmail = async (email: string) =>
  (
    await runQuery<{
      user: {
        properties: UserData;
      };
    }>("MATCH (user:User {email: $email}) return user", { email })
  ).records[0]?.get("user").properties;
