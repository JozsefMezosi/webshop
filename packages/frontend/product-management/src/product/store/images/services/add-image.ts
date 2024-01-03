import { $images } from "../images.store";

export const addImage = (image: File) => $images.set([...$images.get(), image]);
