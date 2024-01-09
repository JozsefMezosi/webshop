import { Product } from "@frontend/graphql-models";
import { $details } from "../../components/details/store/details.store";
import { $imageUrls } from "../../components/images/store/images.store";
import { $product, $isCreate } from "../product.store";

export const initStore = (product: Product | undefined) => {
  const isCreate = !product;

  $product.set(product);
  if (product) {
    $isCreate.set(isCreate);
    $details.set(product.details);
    $imageUrls.set(product.imageUrls || []);
  } else {
    $details.set(undefined);
    $imageUrls.set([]);
  }
};
