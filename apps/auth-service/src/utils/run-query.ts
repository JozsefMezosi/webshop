import { QueryResult, RecordShape, runDatabaseQuery } from "database-core";
import { getDatabase } from "./get-database";

const getSession = async () => (await getDatabase()).session();

export const runQuery = async <
  K extends RecordShape,
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  query: string,
  params: T
): Promise<QueryResult<K>> => runDatabaseQuery(getSession, query, params);
