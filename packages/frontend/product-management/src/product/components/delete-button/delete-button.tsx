import { Button } from "@frontend/form-components";
import { useHandleProductDelete } from "./use-handle-product-delete";

export const DeleteButton = () => {
  const handleDeleteProduct = useHandleProductDelete();
  return (
    <div className="col-span-3 justify-end flex">
      <Button
        text="Delete product"
        type="button"
        onClick={handleDeleteProduct}
      />
    </div>
  );
};
