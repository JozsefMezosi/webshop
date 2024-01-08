import { Button } from "@frontend/form-components";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useStore } from "@nanostores/react";
import { $details } from "./store/details.store";
import { useModal } from "@frontend/modal-context";
import { ADD_DETAIL_HEADER, AddDetailFrom } from "./add-detail-form";
import { Detail } from "./detail/detail";

export const DetailsTable = () => {
  const details = useStore($details);
  const modal = useModal();
  const handleAddDetail = () => {
    modal.show(<AddDetailFrom />, ADD_DETAIL_HEADER);
  };
  return (
    <div className="col-span-3">
      <div className="p-2">
        <div className="grid grid-cols-12 border-b-2 py-3 font-bold">
          <h2 className="col-span-5">Detail name</h2>
          <h2 className="col-span-5">Description</h2>
        </div>
        {Object.entries(details || {}).map(
          ([detailName, detailDescription]) => (
            <Detail
              key={detailName}
              detailName={detailName}
              detailDescription={detailDescription}
            />
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
