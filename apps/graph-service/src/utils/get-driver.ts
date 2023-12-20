import { getDatabaseDriver } from "database-core";
import { Driver } from "neo4j-driver";

let driver: Driver;
export const getDriver = async () => {
  if (!driver) {
    driver = await getDatabaseDriver({
      connectionString: process.env.CONNECTION_STRING,
      databasePassword: process.env.DATABASE_PASSWORD,
      databaseUser: process.env.DATABASE_USER,
    });
  }

  return driver;
};
