import { atom } from "nanostores";

export const $images = atom<File[]>([]);
export const $imageUrls = atom<string[]>([]);
export const $newImageLoading = atom<boolean>(false);
