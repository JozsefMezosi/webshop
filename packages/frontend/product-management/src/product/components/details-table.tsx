import { PrimaryButton } from "@frontend/form-components";
import { PlusIcon } from "@heroicons/react/24/outline";
export const DetailsTable = () => {
  return (
    <div className="col-span-3">
      <div className="p-2">
        <div className="grid grid-cols-2 border-b-2 py-3 font-bold">
          <h2>Detail name</h2>
          <h2>Description</h2>
        </div>
        <div className="grid grid-cols-2 border-b-2 py-2">
          <h2>accumulator capacity</h2>
          <h2>1234 mAh</h2>
        </div>

        <PrimaryButton
          type="button"
          text="Add detail"
          className="mt-8 ml-auto"
          isSecondary
          icon={<PlusIcon />}
        />
      </div>
    </div>
  );
};
