import { Button } from "@frontend/form-components";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import { $details } from "./store/details.store";
import { useModal } from "@frontend/modal-context";
import { ADD_DETAIL_HEADER, AddDetailFrom } from "./add-detail-form";

export const DetailsTable = () => {
  const details = useStore($details);
  const modal = useModal();
  const handleAddDetail = () => {
    modal.show(<AddDetailFrom />, ADD_DETAIL_HEADER);
  };
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
