import { MetaFunction, useLoaderData} from 'remix'
import { getUserSession, createUserSession } from "~/sessions";

export async function loader({ request }: any) {
    let url = new URL(request.url);
    let projectId = url.searchParams.get("project_id");
    let quantity = url.searchParams.get("quantity");
    let name_code = url.searchParams.get("name_code"); 
    
    const current_session: any = await getUserSession(request);

    // return await createUserSession({
    //     ...current_session,
    //     ordered_project_id: projectId,
    //     ordered_quantity: quantity,
    //     ordered_name_code: name_code
    // }, '/pay?project_id='+projectId+'&quantity='+quantity);

    return await createUserSession({
      ...current_session,
      ordered_project_id: projectId,
      ordered_quantity: quantity,
      ordered_name_code: name_code
  }, '/orders/set-checkout');
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