import { getSession } from "@frontend/authentication-server";
import { graphQLFactory } from "@frontend/graphql-factory";

export const getGraphqlClient = async () =>
  graphQLFactory(
    process.env.NEXT_PUBLIC_GRAPHQL_SERVICE || "",
    (await getSession())?.tokens.authToken.value
  );
