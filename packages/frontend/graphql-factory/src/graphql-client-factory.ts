import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk/graphql.sdk";

export const graphQLFactory = (uri: string, token: string | undefined) => {
  const headers: Record<string, string> = {};
  if (token) {
    headers["authorization"] = token;
  }
  const client = new GraphQLClient(uri, {
    headers,
  });

  return getSdk(client);
};
