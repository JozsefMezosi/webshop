import { handleErrorInMethod } from "./handle-error-in-method";

export const Controller = (target: { prototype: object }) => {
  const prototype = target.prototype;
  for (const propertyName of Reflect.ownKeys(prototype).filter(
    (prop) => prop !== "constructor"
  )) {
    const desc = Object.getOwnPropertyDescriptor(prototype, propertyName);
    if (!desc) continue;

    const isMethod = desc.value instanceof Function;

    if (!isMethod) continue;
    Object.defineProperty(prototype, propertyName, handleErrorInMethod(desc));
  }
};
