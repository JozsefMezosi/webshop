import { useGraphqlClient } from "@frontend/graphql-client";
import { CreateProduct, Product } from "@frontend/graphql-models";
import { useToast } from "@frontend/toast-context";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback } from "react";
import { $details } from "./components/details/store/details.store";
import { getImagesAsFormData } from "./components/images/store/services/get-images-as-form-data";
import { $isCreate, $isLoading, $product } from "./store/product.store";
import { useForm } from "react-hook-form";
import { useDebounce } from "../../../react-hooks/src";

export type HandleInputChanged = (
  field: keyof CreateProduct,
  parser?: (value: string) => unknown
) => (e: ChangeEvent<HTMLInputElement>) => void;

export const useAdminProductForm = (product: Product | undefined) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProduct>({
    defaultValues: product,
  });
  const router = useRouter();
  const toast = useToast();
  const getGraphQlClient = useGraphqlClient();

  const onSubmit = useCallback(
    async (data: CreateProduct) => {
      $isLoading.set(true);
      try {
        const graphQlClient = await getGraphQlClient();
        const images = getImagesAsFormData();

        const response = await fetch(
          `/api/product/image/upload?productName=${data.name}`,
          {
            method: "POST",
            body: images,
          }
        );

        if (!response.ok) {
          throw new Error(await response.json());
        }

        const product = await graphQlClient.createProduct({
          ...data,
          imageUrls: await response.json(),
          details: $details.get(),
        });
        const productId = product.createProducts.products[0]?.id;

        router.push(`/admin/product/${productId}`);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
      $isLoading.set(false);
    },
    [getGraphQlClient, router, toast]
  );

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
      toast.success(`Field: ${field} saved successfully!`);
    } catch (error) {
      console.log({ error });

      toast.error(
        `Something went wrong with saving: ${field}, please try again later!`
      );
    }
  };
  const debouncedProductUpdate = useDebounce(handleProductChange);

  const handleInputChange: HandleInputChanged = (field, parser) => (e) => {
    if (!$isCreate.get()) {
      console.log(e);

      debouncedProductUpdate(field, e.target.value, parser);
    }
  };

  return { register, handleSubmit, errors, onSubmit, handleInputChange };
};
