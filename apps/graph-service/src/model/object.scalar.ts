import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

export const ObjectScalarType = new GraphQLScalarType({
  name: "Object",
  description: "Arbitrary object",
  parseValue: (value) => {
    if (typeof value !== "object") {
      throw new Error();
    }

    return JSON.stringify(value);
  },
  serialize: (value) => {
    return typeof value === "string" ? JSON.parse(value) : null;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case Kind.STRING:
        return JSON.parse(ast.value);
      default:
        return null;
    }
  },
});
