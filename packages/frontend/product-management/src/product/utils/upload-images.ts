import { getImagesAsFormData } from "../components/images/store/services/get-images-as-form-data";

export const uploadImages = async (productName: string) => {
  const images = getImagesAsFormData();

  const response = await fetch(
    `/api/product/image/upload?productName=${productName}`,
    {
      method: "POST",
      body: images,
    }
  );

  if (!response.ok) {
    throw new Error(await response.json());
  }

  return await response.json();
};
