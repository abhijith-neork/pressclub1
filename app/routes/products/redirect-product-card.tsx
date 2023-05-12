import { redirect } from "remix";
import { getUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const categoryPath = url.searchParams.get("categoryPath");
  const productId = url.searchParams.get("productId");
  const size = url.searchParams.get("size");
  const isDemo = url.searchParams.get("demo");

  let redirect_url = '';
  if (isDemo == 1) {
    redirect_url = '/demo/freedemoeditor#&category='+category+'&step=product_card&categoryPath='+categoryPath+'&productId='+productId;
  } else {
    redirect_url = '/products#&category='+category+'&step=product_card&categoryPath='+categoryPath+'&productId='+productId;
  }  

  if (size) {
    redirect_url += '&size='+size;
  }

  return redirect(redirect_url);
}

export default function Index() {  
  const session = useLoaderData();

    return null;
}
