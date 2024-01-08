import { Button } from "@frontend/form-components";
import { PlusIcon } from "@heroicons/react/24/outline";
import { addDetail } from "./store/services/add-detail";
import { useStore } from "@nanostores/react";
import { $details } from "./store/details.store";

export const DetailsTable = () => {
  const details = useStore($details);
  const handleAddDetail = () =>
    addDetail({ detailDescription: "test", detailName: Date.now().toString() });
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
        <Button
          type="button"
          onClick={handleAddDetail}
          text="Add detail"
          className="mt-8 ml-auto"
          secondary
          icon={<PlusIcon />}
        />
      </div>
    </div>
  );
};
