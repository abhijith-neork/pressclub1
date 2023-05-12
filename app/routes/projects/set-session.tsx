import { MetaFunction, useLoaderData} from 'remix'
import { getUserSession, createUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";

export async function loader({ request }: any) {
    let url = new URL(request.url);
    let projectId = url.searchParams.get("projectId");
    let redirectUrl = '';

    let projectDetail = await Printbox.getProjectDetail(projectId);
       
    const current_session: any = await getUserSession(request);

    if (current_session.is_subscribed) {
        redirectUrl = '/products#&step=editor&projectId='+projectId;      
    } else {
        redirectUrl = '/demo/freedemoeditor#&step=editor&projectId='+projectId;      
    }

    return await createUserSession({
      ...current_session,
      edit_product_family_id: projectDetail.family.id
  }, redirectUrl);
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function index() {
  const data = useLoaderData();
  return null
}