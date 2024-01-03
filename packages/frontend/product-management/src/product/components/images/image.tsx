import { FunctionComponent } from "react";
import NextImage from "next/image";

interface ImageProps {
  image: File;
}

export const Image: FunctionComponent<ImageProps> = ({ image }) => {
  return (
    <div className="col-span-1 border flex justify-center w-[18.75rem] h-[18.75rem] relative">
      <NextImage
        src={URL.createObjectURL(image)}
        fill
        style={{
          objectFit: "contain",
        }}
        alt="Picture of the author"
      />
    </div>
  );
};
