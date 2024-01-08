import { Product } from "@frontend/graphql-models";
import { atom } from "nanostores";

export const $isCreate = atom<boolean>(false);
export const $product = atom<Product | undefined>();
export const $isLoading = atom<boolean>(false);
