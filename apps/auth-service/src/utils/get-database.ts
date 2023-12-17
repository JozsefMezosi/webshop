import { getDatabaseDriver } from "database-core";

export const getDatabase = async (): Promise<
  ReturnType<typeof getDatabaseDriver>
> =>
  await getDatabaseDriver({
    connectionString: process.env.CONNECTION_STRING,
    databasePassword: process.env.DATABASE_PASSWORD,
    databaseUser: process.env.DATABASE_USER,
  });
