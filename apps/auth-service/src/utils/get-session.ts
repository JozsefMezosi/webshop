import { getDatabase } from "./get-database";

export const getSession = async (): Promise<
  ReturnType<Awaited<ReturnType<typeof getDatabase>>["session"]>
> => {
  return (await getDatabase()).session();
};
