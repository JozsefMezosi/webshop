import { useSession } from "@frontend/authentication";
import { graphQLFactory } from "@frontend/graphql-factory";

import { useMemo } from "react";

export const useGraphqlClient = async () => {
  const session = useSession();
  const token = await session?.getToken();
  return useMemo(
    () => graphQLFactory(process.env.NEXT_PUBLIC_GRAPHQL_SERVICE || "", token),
    [token]
  );
};
