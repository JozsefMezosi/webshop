"use client";
import { Input, Button, TextArea } from "@frontend/form-components";
import { Product } from "@frontend/graphql-models";
import { DetailsTable } from "./components/details/details-table";
import { FunctionComponent } from "react";
import { $details } from "./components/details/store/details.store";
import { $imageUrls } from "./components/images/store/images.store";
import { $isCreate, $isLoading, $product } from "./store/product.store";
import { LoadingIcon } from "./components/loading-icon";
import { useStore } from "@nanostores/react";
import { useAdminProductForm } from "./use-admin-product-form";
import { Images } from "./components/images/images";

interface AdminProductPageProps {
  product?: Product;
}
export const AdminProductPage: FunctionComponent<AdminProductPageProps> = ({
  product,
}) => {
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

  const isLoading = useStore($isLoading);
  const { errors, handleSubmit, onSubmit, register, handleInputChange } =
    useAdminProductForm(product);

  return (
    <div>
      <form
        className="grid grid-cols-3 justify-center gap-5 py-12 max-w-[90rem] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="gap-4 grid grid-cols-12 col-span-3">
          <Input
            label="Name"
            error={errors.name?.message}
            {...register("name", {
              required: true,
              onChange: handleInputChange("name"),
            })}
            placeholder="Megaphone 123 64gb"
            containerClassName="col-span-9"
          />
          <Input
            label="Price"
            error={errors.priceInEuro?.message}
            {...register("priceInEuro", {
              required: true,
              valueAsNumber: true,
              onChange: handleInputChange("priceInEuro", parseFloat),
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
            {...register("description", {
              required: true,
              onChange: handleInputChange("description"),
            })}
            containerClassName="col-span-12"
            className="h-44 resize-none"
            placeholder="The Megaphone 123 64gb is the best phone in the world, buy it now, regret it later!"
          />
        </div>
        <DetailsTable />
        <Images />
        {isCreate && (
          <div className="col-span-3  justify-self-center md:justify-self-end fixed bottom-0 left-0 w-screen bg-white py-5 px-10 border-t-2 flex justify-end">
            <Button
              type="submit"
              text={"Create product"}
              className=""
              icon={<LoadingIcon />}
              disabled={isLoading}
            />
          </div>
        )}
      </form>
    </div>
  );
};
