"use client";

import { Button, Input } from "@frontend/form-components";
import { useForm } from "react-hook-form";
import { Detail } from "./model/detail.model";
import { $details } from "./store/details.store";
import { useModal } from "@frontend/modal-context";

export const ADD_DETAIL_HEADER = "Add detail";
export const AddDetailFrom = () => {
  const modal = useModal();
  const { register, handleSubmit } = useForm<Detail>();
  const onSubmit = ({ detailDescription, detailName }: Detail) => {
    $details.set({ ...$details.get(), [detailName]: detailDescription });
    modal.close();
  };
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
