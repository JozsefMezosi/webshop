export const orderTypeDefs = `#graphql

    enum OrderStatus {
        NEW
        IN_PROGRESS
        UNDER_DELIVERY
        DELIVERED
    }

    type Order @authorization(filter: [
    { where: { node: { customer: { email: "$jwt.sub" }} } }
    ])  @mutation(operations: []) {
        id: ID! @id
        created: DateTime @timestamp(operations: [CREATE])
        lastModified: DateTime @timestamp(operations: [CREATE, UPDATE])
        status: OrderStatus! @coalesce(value: NEW)
        customer: User! @relationship(type: "ordered_by", direction: IN)
        items: [Product!]! @relationship(type: "in_order", direction: OUT)
    }


    type Query {
        getAllQuery(orderStatuses: [OrderStatus!]!): [Order!]!
            @cypher(statement: """
            MATCH (o:Order) 
            WHERE o.status IN $orderStatuses
            return o as orders
            """,
            columnName: "orders") @authentication(jwt: { roles_INCLUDES: "admin" }) 
    }

    type Mutation {
        CreateOrder(productIds: [ID!]!): Order 
            @cypher(
                statement: """
                MATCH (u:User {email: $jwt.sub})
                CREATE (order:Order { id: randomUUID(), created: datetime(), lastModified: datetime(), status: \"NEW\"})
                MERGE (order)<-[:ordered_by]-(u)
                WITH order
                MATCH (p:Product)
                where p.id IN $productIds
                MERGE (p)-[:in_order]->(order)
                RETURN order
                """,
                columnName: "order"
            )
    }
`;
