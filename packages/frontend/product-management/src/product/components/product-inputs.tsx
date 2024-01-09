import { Input, TextArea } from "@frontend/form-components";
import { CreateProduct } from "@frontend/graphql-models";
import { FunctionComponent } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { HandleInputChanged } from "../use-admin-product-form";

interface ProductInputs {
  register: UseFormRegister<CreateProduct>;
  errors: FieldErrors<CreateProduct>;
  handleInputChange: HandleInputChanged;
}
export const ProductInputs: FunctionComponent<ProductInputs> = ({
  register,
  errors,
  handleInputChange,
}) => {
  return (
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
  );
};
