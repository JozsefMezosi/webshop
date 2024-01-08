import { $details } from "../details.store";

interface AddDetailProps {
  detailName: string;
  detailDescription: string;
}

export const addDetail = ({ detailDescription, detailName }: AddDetailProps) =>
  $details.set({ ...$details.get(), [detailName]: detailDescription });
