import { PlusIcon } from "@heroicons/react/24/outline";
import { useCallback, ChangeEvent } from "react";
import { addImage } from "../store/services/add-image";
import { $isCreate, $product } from "../../../store/product.store";
import { useGraphqlClient } from "@frontend/graphql-client";
import { useToast } from "@frontend/toast-context";
import { $imageUrls, $newImageLoading } from "../store/images.store";

export const ImagesHeader = () => {
  const getGraphQlClient = useGraphqlClient();
  const toast = useToast();
  const handleImageUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      $newImageLoading.set(true);
      const isCreate = $isCreate.get();
      const image = event?.target?.files?.[0];
      if (image) {
        if (isCreate) {
          addImage(image);
          $newImageLoading.set(false);
          return;
        }

        const product = $product.get();
        if (!product) {
          return; // todo error handling
        }
        try {
          const images = new FormData();
          images.append("images", image);
          const graphQlClient = await getGraphQlClient();

          const response = await fetch(
            `/api/product/image/upload?productName=${product?.name}`,
            {
              method: "POST",
              body: images,
            }
          );

          if (!response.ok) {
            throw new Error(await response.json());
          }

          const imageUrls = await response.json();
          graphQlClient.addImageToProduct({
            id: product.id,
            newImageUrl: imageUrls[0],
          });
          $imageUrls.set([...($imageUrls.get() || []), imageUrls[0]]);
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message);
          }
        }

        $newImageLoading.set(false);
      }
    },
    [getGraphQlClient, toast]
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
