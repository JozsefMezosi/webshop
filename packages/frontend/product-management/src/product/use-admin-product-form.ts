import { useGraphqlClient } from "@frontend/graphql-client";
import { CreateProduct, Product } from "@frontend/graphql-models";
import { useToast } from "@frontend/toast-context";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { $details } from "./components/details/store/details.store";
import { getImagesAsFormData } from "./components/images/store/services/get-images-as-form-data";
import { $isLoading } from "./store/product.store";
import { useForm } from "react-hook-form";

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
  return { register, handleSubmit, errors, onSubmit };
};
