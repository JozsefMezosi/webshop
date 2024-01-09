"use client";
import { Product } from "@frontend/graphql-models";
import { DetailsTable } from "./components/details/details-table";
import { FunctionComponent } from "react";
import { useAdminProductForm } from "./use-admin-product-form";
import { Images } from "./components/images/images";
import { DeleteButton } from "./components/delete-button/delete-button";
import { CreateProductButton } from "./components/create-product-button";
import { ProductInputs } from "./components/product-inputs";
import { initStore } from "./store/services/init-store";

interface AdminProductPageProps {
  product?: Product;
}
export const AdminProductPage: FunctionComponent<AdminProductPageProps> = ({
  product,
}) => {
  const isCreate = !product;
  initStore(product);
  const { errors, handleSubmit, onSubmit, register, handleInputChange } =
    useAdminProductForm(product);

  return (
    <div>
      <form
        className="grid grid-cols-3 justify-center gap-5 py-12 max-w-[90rem] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProductInputs
          register={register}
          errors={errors}
          handleInputChange={handleInputChange}
        />
        <DetailsTable />
        <Images />
        {isCreate ? <CreateProductButton /> : <DeleteButton />}
      </form>
    </div>
  );
};
