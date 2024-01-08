"use client";

import { Button, Input } from "@frontend/form-components";
import { useForm } from "react-hook-form";

export const ADD_DETAIL_HEADER = "Add detail";
export const AddDetailFrom = () => {
  const { register } = useForm<{ name: string; value: string }>();
  return (
    <form className="grid gap-4 h-full content-center">
      <Input
        {...register("name")}
        placeholder="Battery capacity"
        containerClassName="w-full"
      />
      <Input
        {...register("value")}
        placeholder="1400 mAh"
        containerClassName="w-full"
      />
      <Button text="Add detail" className="justify-self-end" />
    </form>
  );
};
