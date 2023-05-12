import { useLoaderData, useSearchParams } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";

export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const searchdata = new URL(request.url).search;
  const exploded = searchdata.split('=');
  const projectId = exploded[1];
  
  const deleteProject = await Printbox.deleteProject(projectId);

  return {
    session,
    deleteProject
  };
}

export default function Index() {
  const data = useLoaderData();
  //if (deleteProject.error)
  console.log('deleteProject: ',data);
  return null;
}
