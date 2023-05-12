import { useLoaderData, redirect } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";

export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const url = new URL(request.url);
  const projectId = url.searchParams.get("project_id");
  
  const copyProject = await Printbox.copyProject(projectId);

  if (copyProject.number) {
    return redirect('/products#&step=editor&projectId='+copyProject.id);
  } else {
    return redirect('/projects/completed?copy=failed');
  }
}

export default function Index() {
  const data = useLoaderData();
  return null;
}
