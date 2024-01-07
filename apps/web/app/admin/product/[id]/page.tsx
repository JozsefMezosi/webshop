import { FunctionComponent } from "react";

interface AdminProductPage {
  params: { id: string };
}

const Page: FunctionComponent<AdminProductPage> = ({ params: { id } }) => {
  return <div>{id}</div>;
};
export default Page;
