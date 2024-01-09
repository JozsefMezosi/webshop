import { useCallback } from "react";
import { $product } from "../../store/product.store";
import { useToast } from "@frontend/toast-context";
import { useGraphqlClient } from "@frontend/graphql-client";
import { useRouter } from "next/navigation";

export const useHandleProductDelete = () => {
  const toast = useToast();
  const getGraphqlClient = useGraphqlClient();
  const router = useRouter();
  return useCallback(async () => {
    const product = $product.get();
    if (!product) {
      return;
    }

    try {
      const graphqlClient = await getGraphqlClient();
      await graphqlClient.deleteProduct({ id: product.id });
      toast.success(`Product: ${product.name} successfully deleted!`);
      router.push("/admin/product");
    } catch {
      toast.error(
        `Something went wrong when deleting: ${product.name}, please try again later!`
      );
    }
  }, [getGraphqlClient, router, toast]);
};
