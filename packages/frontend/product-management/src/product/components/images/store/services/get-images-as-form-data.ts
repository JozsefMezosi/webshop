import { $images } from "../images.store";

export const getImagesAsFormData = () => {
  const images = new FormData();

  $images.get().forEach((img) => images.append("images", img));

  return images;
};
