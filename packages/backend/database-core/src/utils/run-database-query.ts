import { logger } from "logger";
import { QueryResult, RecordShape, Session } from "neo4j-driver";

export const runDatabaseQuery = async <
  K extends RecordShape,
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  getSession: () => Promise<Session>,
  query: string,
  params: T
): Promise<QueryResult<K>> => {
  const session = await getSession();
  try {
    return await session.run<K>(query, params);
  } catch (error) {
    logger.error(error);
    throw new Error(`Something went wrong, please try again later!`);
  } finally {
    session.close();
  }
};
