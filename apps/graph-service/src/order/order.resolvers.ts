import { Neo4jGraphQL } from "@neo4j/graphql";
import { MoveOrderToNextStatus } from "./resolvers/move-order-to-next-status.resolver";

export const OrderResolvers: Neo4jGraphQL["resolvers"] = {
  Mutation: {
    MoveOrderToNextStatus,
  },
};
