import { useLoaderData, redirect } from "remix";
import { getUserSession, createUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const session = await getUserSession(request);
  const url = new URL(request.url);
  const step = url.searchParams.get("step");
  const categoryPath = url.searchParams.get("categoryPath");
  
  let redirect_url = '';
  if (!session || !session.is_subscribed) {
    redirect_url = "/demo/redirect-product-list?step=product_list&categoryPath="+process.env.CATEGORY_PATH_DEMO;
  } else {
    redirect_url = "/products#&step="+step+"&categoryPath="+categoryPath;
  }

  return await createUserSession({
    ...session,
    edit_product_family_id: null
  }, redirect_url);
}

export default function Index() {  
    return null;
}
