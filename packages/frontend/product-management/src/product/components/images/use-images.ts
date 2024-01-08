import { useStore } from "@nanostores/react";
import { $imageUrls, $images } from "./store/images.store";
import { $isCreate } from "../../store/product.store";

export const useImages = () => {
  const isCreate = useStore($isCreate);
  const imageUrls = useStore($imageUrls);
  const images = useStore($images);

  return isCreate ? images : imageUrls;
};
