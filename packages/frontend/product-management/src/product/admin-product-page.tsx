"use client";
import { Input, Button, TextArea } from "@frontend/form-components";
import { CreateProduct, Product } from "@frontend/graphql-models";
import { useForm } from "react-hook-form";
import { Images } from "./components/images/Images";
import { DetailsTable } from "./components/details-table";
import { FunctionComponent } from "react";
import { $details } from "./store/details/details.store";

interface AdminProductPageProps {
  product?: Product;
}
export const AdminProductPage: FunctionComponent<AdminProductPageProps> = ({
  product,
}) => {
  $details.set(product?.details);
  const { register } = useForm<CreateProduct>({
    defaultValues: product,
  });

  return (
    <form className="grid grid-cols-3 justify-center gap-5 py-12 max-w-[90rem] mx-auto">
      <div className="gap-4 grid grid-cols-12 col-span-3">
        <Input
          label="Name"
          {...register("name")}
          placeholder="Megaphone 123 64gb"
          containerClassName="col-span-9"
        />
        <Input
          label="Price"
          {...register("priceInEuro")}
          placeholder="999.99"
          containerClassName="col-span-3"
        />
        <TextArea
          label="Description"
          {...register("description")}
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
