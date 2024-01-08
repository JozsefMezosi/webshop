import { getGraphqlClient } from "@frontend/graphql-server";
import { AdminProductPage } from "@frontend/product-management";
import { redirect } from "next/navigation";

interface AdminProductPageProps {
  params: { id: string };
}

const Page = async ({ params: { id } }: AdminProductPageProps) => {
  const graphqlClient = await getGraphqlClient();
  const product = (await graphqlClient.getProduct({ id })).products[0];
  if (!product) redirect("/not-found");
  return <AdminProductPage product={product} />;
};
export default Page;
