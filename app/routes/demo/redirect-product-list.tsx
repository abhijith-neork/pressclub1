import { useLoaderData, redirect } from "remix";
import { getUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const session = await getUserSession(request);
  const url = new URL(request.url);
  const step = url.searchParams.get("step");
  const categoryPath = url.searchParams.get("categoryPath");
  
  let redirect_url = "/demo/freedemoeditor#&step="+step+"&categoryPath="+categoryPath;

  return redirect(redirect_url);
}

export default function Index() {  
  // const session = useLoaderData();

    return null;
}
