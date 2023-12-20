import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { getEnvironmentVariables } from "environment-variable-handler";
import { logger } from "logger";
import { userTypeDefs } from "./user/user.schema";
import { productTypeDefs } from "./product/product.schema";
import { ObjectScalarType } from "./model/object.scalar";
import { orderTypeDefs } from "./order/order.schema";
import { getDriver } from "./utils/get-driver";
import { OrderResolvers } from "./order/order.resolvers";

try {
  getEnvironmentVariables();

  const typeDefs = `#graphql
    scalar Object
    type JWT @jwt {
        roles: [String!]!
    }
    extend schema @authentication`;

  const driver = await getDriver();

  const resolvers: Neo4jGraphQL["resolvers"] = {
    Object: ObjectScalarType,
    ...OrderResolvers,
  };

  const neoSchema = new Neo4jGraphQL({
    typeDefs: [typeDefs, userTypeDefs, productTypeDefs, orderTypeDefs],
    driver,
    resolvers,
    features: {
      authorization: {
        verify: true,
        key: process.env.JWT_SECRET,
      },
    },
  });

  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
  });

  await neoSchema.assertIndexesAndConstraints({ options: { create: true } });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({
      token: req.headers.authorization,
    }),
    listen: { port: parseInt(process.env.PORT) },
  });

  logger.info(`Server ready at ${url}`);
} catch (error) {
  logger.error(error);
}
