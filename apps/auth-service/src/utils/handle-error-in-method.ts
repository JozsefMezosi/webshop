import { NextFunction, Request, Response } from "express";

export const handleErrorInMethod = (descriptor: PropertyDescriptor) => {
  const childFunction = descriptor.value;
  descriptor.value = async function (
    ...args: [Request, Response, NextFunction]
  ) {
    const next = args[2];
    try {
      return await childFunction.apply(this, args);
    } catch (error) {
      next(error);
    }
  };

  return descriptor;
};
