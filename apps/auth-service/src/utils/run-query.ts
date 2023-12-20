import { QueryResult, RecordShape, runDatabaseQuery } from "database-core";
import { getSession } from "./get-session";

export const runQuery = async <
  K extends RecordShape,
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  query: string,
  params: T
): Promise<QueryResult<K>> => runDatabaseQuery(getSession, query, params);
