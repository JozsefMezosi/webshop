import { PrimaryButton } from "@frontend/form-components";
import { CreateProduct, Product } from "@frontend/graphql-models";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FunctionComponent } from "react";
import { Control, useController } from "react-hook-form";

interface DetailsTableProps {
  control: Control<CreateProduct, unknown>;
  setDetails: (details: Product["details"]) => void;
}
export const DetailsTable: FunctionComponent<DetailsTableProps> = ({
  control,
  setDetails,
}) => {
  const { field } = useController({
    control,
    name: "details",
  });
  const details = field.value;

  const handleAddDetail = () =>
    setDetails({ ...details, [Date.now()]: "test3" });
  return (
    <div className="col-span-3">
      <div className="p-2">
        <div className="grid grid-cols-2 border-b-2 py-3 font-bold">
          <h2>Detail name</h2>
          <h2>Description</h2>
        </div>
        {Object.entries(details ?? {}).map(
          ([detailName, detailDescription]) => (
            <div className="grid grid-cols-2 border-b-2 py-2" key={detailName}>
              <h2>{detailName}</h2>
              <h2>{detailDescription}</h2>
            </div>
          )
        )}
        <PrimaryButton
          type="button"
          onClick={handleAddDetail}
          text="Add detail"
          className="mt-8 ml-auto"
          isSecondary
          icon={<PlusIcon />}
        />
      </div>
    </div>
  );
};
