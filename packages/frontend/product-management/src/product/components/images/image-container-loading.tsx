import { ButtonLoading } from "@frontend/form-components";
import { ImageLoading } from "./image/image-loading";

export const ImageContainerLoading = () => {
  return (
    <div>
      <ImageLoading />
      <ButtonLoading className="mt-3 mx-auto" />
    </div>
  );
};
