import { useStore } from "@nanostores/react";
import { Image } from "./image/image";
import { ImageContainerLoading } from "./image-container-loading";
import { ImagesHeader } from "./image/images-header";
import { useImages } from "./use-images";
import { $newImageLoading } from "./store/images.store";

export const Images = () => {
  const images = useImages();
  const isNewImageLoading = useStore($newImageLoading);
  return (
    <div className="pt-10 col-span-3 w-full">
      <ImagesHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-full justify-items-center w-full">
        {images?.map((image) => (
          <Image
            image={image}
            key={typeof image === "string" ? image : image.name}
          />
        ))}
        {isNewImageLoading && <ImageContainerLoading />}
      </div>
    </div>
  );
};
