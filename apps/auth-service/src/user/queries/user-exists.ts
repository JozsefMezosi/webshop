import { runQuery } from "../../utils/run-query";

export const userExists = async (email: string) =>
  Boolean(
    (
      await runQuery<{
        result: string;
      }>("MATCH (user:User {email: $email}) return user.email as result", {
        email,
      })
    ).records[0]?.get("result")
  );
