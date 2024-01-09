import { $details } from "../details.store";

export const removeDetail = (detailName: string) => {
  const details = $details.get();
  if (!details) {
    return;
  }

  const newDetails = Object.entries(details).reduce(
    (result, [name, description]) => {
      if (detailName === name) {
        return result;
      }
      return { ...result, [name]: description };
    },
    {}
  );

  $details.set(newDetails);
};
