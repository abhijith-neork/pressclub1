import { MetaFunction, useLoaderData, Scripts, redirect } from "remix";
import { PrintboxDemoEmbed } from "~/components/printboxdemo";
import { getUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const productFamilyId = process.env.PRODUCT_ID_DEMO;

  return  { ...session, productFamilyId }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {  
  const session = useLoaderData();

  return (
    <div>
      <script crossOrigin="anonymous" src="/js/demo.js"></script>
      <main>
        { <PrintboxDemoEmbed printboxSessionId={session?.session_id} productFamilyId={session.productFamilyId} /> }
      </main>
    </div>
  );
}
