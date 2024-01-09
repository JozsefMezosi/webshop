"use client";

import { Button, Input } from "@frontend/form-components";
import { useForm } from "react-hook-form";
import { Detail } from "./model/detail.model";
import { useModal } from "@frontend/modal-context";
import { useCallback } from "react";
import { addDetail } from "./store/services/add-detail";
import { $details } from "./store/details.store";
import { $product } from "../../store/product.store";
import { useGraphqlClient } from "@frontend/graphql-client";
import { useToast } from "@frontend/toast-context";
import { removeDetail } from "./store/services/remove-details";

export const ADD_DETAIL_HEADER = "Add detail";
export const AddDetailFrom = () => {
  const modal = useModal();
  const toast = useToast();
  const { register, handleSubmit } = useForm<Detail>();
  const getGraphQlClient = useGraphqlClient();

  const onSubmit = useCallback(
    async (data: Detail) => {
      addDetail(data);
      modal.close();
      const details = $details.get();
      const product = $product.get();
      if (product && details) {
        try {
          const graphqlClient = await getGraphQlClient();
          graphqlClient.setProductDetails({ id: product.id, details });
        } catch {
          removeDetail(data.detailName);
          toast.error("Something went wrong please, try again later!");
        }
      }
    },
    [getGraphQlClient, modal, toast]
  );

  return (
    <form
      className="grid gap-4 h-full content-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("detailName")}
        placeholder="Battery capacity"
        containerClassName="w-full"
      />
      <Input
        {...register("detailDescription")}
        placeholder="1400 mAh"
        containerClassName="w-full"
      />
      <Button text="Add detail" className="justify-self-end" />
    </form>
  );
};
