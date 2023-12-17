import { Driver, auth, driver as createDriver } from "neo4j-driver";
import { logger } from "logger";

interface GetDatabaseProps {
  connectionString: string;
  databaseUser: string;
  databasePassword: string;
}

let driver: Driver;

export const getDatabaseDriver = async ({
  connectionString,
  databasePassword,
  databaseUser,
}: GetDatabaseProps) => {
  if (!driver) {
    driver = createDriver(
      connectionString,
      auth.basic(databaseUser, databasePassword)
    );
    await driver.getServerInfo();

    logger.info("Connected to NEO4J db!");
  }

  return driver;
};
