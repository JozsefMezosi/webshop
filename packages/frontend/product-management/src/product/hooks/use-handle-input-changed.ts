import { CreateProduct } from "@frontend/graphql-models";
import { $isCreate, $product } from "../store/product.store";
import { useToast } from "@frontend/toast-context";
import { useGraphqlClient } from "@frontend/graphql-client";
import { useDebounce } from "@frontend/react-hooks";
import { ChangeEvent } from "react";

export const useHandleInputChange = () => {
  const toast = useToast();
  const getGraphQlClient = useGraphqlClient();
  const handleProductChange = async <
    T extends keyof CreateProduct,
    V extends CreateProduct[T],
  >(
    field: T,
    value: V,
    parser?: (value: unknown) => V
  ) => {
    const product = $product.get();
    if (!product) {
      return;
    }
    try {
      const graphQlClient = await getGraphQlClient();
      await graphQlClient.updateProduct({
        id: product.id,
        [field]: parser ? parser(value) : value,
      });
    } catch {
      toast.error(
        `Something went wrong with saving: ${field}, please try again later!`
      );
    }
  };

  const debouncedProductUpdate = useDebounce(handleProductChange);

  const handleInputChange =
    (field: keyof CreateProduct, parser?: (value: string) => unknown) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!$isCreate.get()) {
        debouncedProductUpdate(field, e.target.value, parser);
      }
    };

  return handleInputChange;
};
