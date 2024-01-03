import { PlusIcon } from "@heroicons/react/24/outline";
import { useCallback, ChangeEvent } from "react";
import { addImage } from "../../store/images/services/add-image";

export const ImagesHeader = () => {
  const handleImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const image = event?.target?.files?.[0];
      if (image) {
        addImage(image);
      }
    },
    []
  );
  return (
    <div className="flex justify-between py-5">
      <h1 className="text-xl font-bold ">Images:</h1>
      <label
        htmlFor="upload-image"
        className="flex border border-gray-400 rounded px-10 py-2 hover:bg-slate-100 cursor-pointer"
      >
        <div className="w-6 *:text-gray-500">
          <PlusIcon />
        </div>
        <p>Add Image</p>
        <input
          id="upload-image"
          type="file"
          name="upload-image"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};
