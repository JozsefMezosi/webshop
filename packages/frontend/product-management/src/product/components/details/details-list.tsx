import { useStore } from "@nanostores/react";
import { $details } from "./store/details.store";
import { Detail } from "./detail/detail";

export const DetailsList = () => {
  const details = useStore($details);
  if (!details) {
    return null;
  }
  return (
    <>
      {Object.entries(details).map(([detailName, detailDescription]) => (
        <Detail
          key={detailName}
          detailName={detailName}
          detailDescription={detailDescription}
        />
      ))}
    </>
  );
};
