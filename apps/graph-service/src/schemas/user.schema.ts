export const userTypeDefs = `#graphql
    type Address @query(read: false, aggregate: false) @mutation(operations: []) {
        id: ID! @id
        country: String! 
        zipCode: String! 
        city: String! 
        street: String! 
        houseNumber: String! 
    }

    type User @authorization(filter: [
    { where: { node: { email: "$jwt.sub" } } }
    ]) @mutation(operations: [UPDATE]) {
        email: String!  @settable(onCreate: false, onUpdate: false)
        firstName: String! @settable(onCreate: false, onUpdate: false)
        lastName: String! @settable(onCreate: false, onUpdate: false)
        addresses: [Address!]! @relationship(type: "HAS_ADDRESS", direction: OUT) @settable(onCreate: false, onUpdate: true)
        roles: [String!]! @settable(onCreate: false, onUpdate: false)
    }
`;
