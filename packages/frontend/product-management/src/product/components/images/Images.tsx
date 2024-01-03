import { useStore } from "@nanostores/react";
import { Image } from "./image";
import { ImagesHeader } from "./images-header";
import { $images } from "../../store/images/images.store";

export const Images = () => {
  const images = useStore($images);

  return (
    <div className="pt-10 col-span-3 w-full">
      <ImagesHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-full justify-items-center w-full">
        {images.map((image) => (
          <Image image={image} />
        ))}
      </div>
    </div>
  );
};
