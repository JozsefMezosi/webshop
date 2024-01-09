import { Button } from "@frontend/form-components";
import { LoadingIcon } from "./loading-icon";
import { useStore } from "@nanostores/react";
import { $isLoading } from "../store/product.store";

export const CreateProductButton = () => {
  const isLoading = useStore($isLoading);
  return (
    <div className="col-span-3  justify-self-center md:justify-self-end fixed bottom-0 left-0 w-screen bg-white py-5 px-10 border-t-2 flex justify-end">
      <Button
        type="submit"
        text="Create product"
        icon={<LoadingIcon />}
        disabled={isLoading}
      />
    </div>
  );
};
