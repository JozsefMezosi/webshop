"use client";
import { Input, Button, TextArea } from "@frontend/form-components";
import { CreateProduct, Product } from "@frontend/graphql-models";
import { useForm } from "react-hook-form";
import { Images } from "./components/images/Images";
import { DetailsTable } from "./components/details-table";
import { FunctionComponent, useCallback } from "react";
import { $details } from "./store/details/details.store";
import { useGraphqlClient } from "@frontend/graphql-client";
import { getImagesAsFormData } from "./store/images/services/get-images-as-form-data";
import { useRouter } from "next/navigation";
import { useToast } from "@frontend/toast-context";

interface AdminProductPageProps {
  product?: Product;
}
export const AdminProductPage: FunctionComponent<AdminProductPageProps> = ({
  product,
}) => {
  const isCreate = Boolean(product);
  $details.set(product?.details);
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

  const onCreateSubmit = useCallback(
    async (data: CreateProduct) => {
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
    },
    [getGraphQlClient, router, toast]
  );

  const onSaveSubmit = useCallback(() => {}, []);

  return (
    <form
      className="grid grid-cols-3 justify-center gap-5 py-12 max-w-[90rem] mx-auto"
      onSubmit={handleSubmit(isCreate ? onCreateSubmit : onSaveSubmit)}
    >
      <div className="gap-4 grid grid-cols-12 col-span-3">
        <Input
          label="Name"
          error={errors.name?.message}
          {...register("name", { required: true })}
          placeholder="Megaphone 123 64gb"
          containerClassName="col-span-9"
        />
        <Input
          label="Price"
          error={errors.priceInEuro?.message}
          {...register("priceInEuro", {
            required: true,
            valueAsNumber: true,
            validate: (value) => {
              if (!/^\d+(\.\d+)?$/.test(value.toString())) {
                return "The value of price should be a number (e.g. 999.99)";
              }
            },
          })}
          placeholder="999.99"
          containerClassName="col-span-3"
        />
        <TextArea
          label="Description"
          error={errors.description?.message}
          {...register("description", { required: true })}
          containerClassName="col-span-12"
          className="h-44 resize-none"
          placeholder="The Megaphone 123 64gb is the best phone in the world, buy it now, regret it later!"
        />
      </div>
      <DetailsTable />
      <Images />
      <div className="col-span-3 justify-self-center md:justify-self-end">
        <Button type="submit" text="Create product" />
      </div>
    </form>
  );
};
