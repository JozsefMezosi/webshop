import { Product } from "@frontend/graphql-models";
import { atom } from "nanostores";

export const $details = atom<Product["details"]>({});
