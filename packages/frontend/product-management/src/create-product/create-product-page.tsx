"use client";
import { Input, TextAreaComponent } from "@frontend/form-components";
import { CreateProduct } from "@frontend/graphql-models";
import { useForm } from "react-hook-form";

export const CreateProductPage = () => {
  const { register } = useForm<CreateProduct>();
  return (
    <div>
      <form>
        <Input {...register("name")} placeholder="Megaphone 123 64gb" />
        <TextAreaComponent
          {...register("description")}
          placeholder="Megaphone 123 64gb"
        />
        <Input {...register("name")} placeholder="Megaphone 123 64gb" />
        <Input {...register("name")} placeholder="Megaphone 123 64gb" />
        <Input {...register("name")} placeholder="Megaphone 123 64gb" />
      </form>
    </div>
  );
};
