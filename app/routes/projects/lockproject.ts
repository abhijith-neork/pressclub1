import { useLoaderData, useSearchParams } from "remix";
import { getUserSession } from "~/sessions";
import Project from "~/utils/project";

export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const searchdata = new URL(request.url).search;
  const exploded = searchdata.split('=');
  const projectId = exploded[1];
  
  const projectLocked = await Project.getLockedProject(session.customer_id, projectId, session.session_id);
  if (projectLocked && projectLocked.data == 0) {
    const lock_project = Project.setProjectLocked(session.customer_id, projectId, session.session_id);
  }

  return session;
}

export default function Index() {
  const session = useLoaderData();
  return null;
}
