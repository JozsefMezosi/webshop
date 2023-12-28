import { getServerSession } from "@frontend/next-auth-backend";

export default async function Page(): Promise<JSX.Element> {
  const session = await getServerSession();
  return <div>{session?.user?.email}</div>;
}
