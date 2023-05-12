import { useLoaderData, redirect } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { useEffect } from "react";


export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const url = new URL(request.url);
  const projectId = url.searchParams.get("project_id");
  
  const copyProject = await Printbox.copyProject(projectId); console.log('giii',copyProject.number);

  if (copyProject.number) {  
    return {
              ...session,
              projectId,
              copyProject
            }

  } else {
    return redirect('/projects/completed?copy=failed');
  }
}

export default function Index() {
  const data = useLoaderData(); console.log('new session:', data);

  useEffect(() => {
      window.location.href = '/demo/freedemoeditor#&step=editor&projectId='+data.copyProject.id;

  },[]);

  return null;
}
