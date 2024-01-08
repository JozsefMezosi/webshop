import { FunctionComponent } from "react";
import { Detail as DetailProps } from "../model/detail.model";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { $details } from "../store/details.store";
export const Detail: FunctionComponent<DetailProps> = ({
  detailDescription,
  detailName,
}) => {
  const onDetailDelete = () => {
    const details = $details.get();
    if (!details) {
      return;
    }

    const newDetails = Object.entries(details).reduce(
      (result, [name, description]) => {
        if (detailName === name) {
          return result;
        }
        return { ...result, [name]: description };
      },
      {}
    );

    $details.set(newDetails);
  };
  return (
    <div className="grid grid-cols-12 border-b-2 py-2" key={detailName}>
      <h2 className="col-span-5">{detailName}</h2>
      <h2 className="col-span-5">{detailDescription}</h2>
      <div className="col-span-2 flex justify-end self-start">
        <XMarkIcon
          className="w-6 text-black cursor-pointer"
          onClick={onDetailDelete}
        />
      </div>
    </div>
  );
};
