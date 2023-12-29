import { Product as GraphProduct } from "@frontend/graphql-factory";

export type Product = Omit<GraphProduct, "__typename">;
export type CreateProduct = Omit<Product, "id">;
