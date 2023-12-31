export const productTypeDefs = `#graphql
   type Product @authorization(validate: [
    { where: { jwt: { roles_INCLUDES: "admin" } }, operations: [DELETE]}
]) {
    id: ID! @id
    name: String! @unique(constraintName: "unique_product")
    description: String!
    priceInEuro: Float!
    details: Object
    imageUrls: [String!]!
   }

`;
