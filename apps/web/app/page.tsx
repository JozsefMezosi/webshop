import { cookies } from "next/headers";
export default function Page(): JSX.Element {
  const cookieStore = cookies();
  return <h1>{cookieStore.get("user-first-name")?.value}</h1>;
}
