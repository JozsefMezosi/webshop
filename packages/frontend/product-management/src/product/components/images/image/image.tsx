import { FunctionComponent } from "react";
import NextImage from "next/image";
import { Button } from "@frontend/form-components";
import { ImageLoading } from "./image-loading";
import { useRemoveImage } from "./use-remove-image";
interface ImageProps {
  image: File | string;
}

export const Image: FunctionComponent<ImageProps> = ({ image }) => {
  const { isLoading, removeImageHandler } = useRemoveImage(image);

  if (isLoading) {
    return <ImageLoading />;
  }

  return (
    <div>
      <div className="col-span-1  flex-col justify-center w-[18.75rem] h-[18.75rem] relative">
        <NextImage
          src={typeof image === "string" ? image : URL.createObjectURL(image)}
          fill
          style={{
            objectFit: "contain",
          }}
          alt="Picture of product"
        />
      </div>
      <Button
        text="Remove image"
        onClick={removeImageHandler}
        className="mt-3 mx-auto"
      />
    </div>
  );
};
