import { useSession } from "@frontend/authentication";
import { graphQLFactory } from "@frontend/graphql-factory";

import { useCallback } from "react";

export const useGraphqlClient = () => {
  const session = useSession();
  return useCallback(async () => {
    const token = await session?.getToken();
    return graphQLFactory(process.env.NEXT_PUBLIC_GRAPHQL_SERVICE || "", token);
  }, [session]);
};
