import { MetaFunction, useLoaderData, useParams } from "remix";
import { PrintboxEmbed } from "~/components/printbox";
import { getUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const session = await getUserSession(request)


  const productFamilyId_demo = process.env.PRODUCT_ID_DEMO;
  const productFamilyId_news = process.env.PRODUCT_ID_NEWS_PAPER;

  return  { ...session, productFamilyId_news, productFamilyId_demo }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {
  const session = useLoaderData()
  const params = useParams();
  const productFamilyId = params.productFamilyId ?? "newspaper";

  const productFamilyIds: { [key: string]: number } = {
    "newspaper": session.productFamilyId_news,
    "demo": session.productFamilyId_demo
  }

  return (
    <div>
      <main>
        <PrintboxEmbed printboxSessionId={session?.session_id} productFamilyId={productFamilyIds[productFamilyId]} />
      </main>
    </div>
  );
}
