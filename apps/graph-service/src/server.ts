import { ApolloServer } from "@apollo/server";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
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

const main = async () => {
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
      debug: true,
      features: {
        authorization: {
          verify: true,
          key: process.env.JWT_SECRET,
        },
      },
    });

    const server = new ApolloServer({
      schema: await neoSchema.getSchema(),

      plugins: [
        // Install a landing page plugin based on NODE_ENV
        process.env.NODE_ENV === "production"
          ? ApolloServerPluginLandingPageProductionDefault({
              footer: false,
            })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
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
};

main();
