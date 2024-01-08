import { useGraphqlClient } from "@frontend/graphql-client";
import { useToast } from "@frontend/toast-context";
import { useState, useCallback } from "react";
import { $product } from "../../../store/product.store";
import { $imageUrls, $images } from "../store/images.store";

export const useRemoveImage = (image: File | string) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const getGraphQlClient = useGraphqlClient();
  const removeImageHandler = useCallback(async () => {
    setIsLoading(true);
    if (typeof image === "string") {
      const product = $product.get();
      const images = $imageUrls.get();
      if (!product) {
        toast.error("Product cannot not found! ");
        return;
      }

      if (images.length === 1) {
        toast.error("A product must contain at least 1 image");
        return;
      }

      try {
        const res = await fetch(`/api/product/image/remove`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: image,
          }),
        });
        if (!res.ok) {
          toast.error(await res.json());
        }
        const graphQlClient = await getGraphQlClient();
        const newImages = $imageUrls.get().filter((el) => el !== image);
        await graphQlClient.setImagesOnProduct({
          id: product.id,
          imageUrls: newImages,
        });
        $imageUrls.set(newImages);
        return;
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
      return;
    }
    $images.set($images.get().filter((el) => el.name !== image.name));
    setIsLoading(false);
  }, [getGraphQlClient, image, toast]);

  return { isLoading, removeImageHandler };
};
