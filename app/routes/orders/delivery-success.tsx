import { MetaFunction, ActionFunction, Form, redirect, useActionData, useLoaderData, useTransition, Link } from "remix";
import { getProfile } from "~/profile";
import { getUserSession } from "~/sessions";
import { getSchoolData } from "~/profile";
import Printbox from "~/utils/printbox";

export async function loader({ request }: any) {
  const session: any = await getUserSession(request);
  console.log('SESSION: ', session)

  // If session id is not found then session will be a response object
  // redirecting to subscribe page
  if (!session.id) {
    return redirect("/");
  }

  const projectId = session.ordered_project_id;

  const projectDetail = await Printbox.getProjectDetail(projectId);
  if (projectDetail.id == 'not_found' || !projectDetail.order) {
    return redirect("/");
  }

  // if subscribed, get profile so we can get orders
  const profile: any = await getProfile(session.id)

  // Get school details
  const school = await getSchoolData(profile.data[0]?.school);  

  return {
    ...session,
    profile,
    ...school
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function UpdateAccount() {
  const data = useLoaderData();

  let errors = useActionData();
  let transition = useTransition();

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2 className="mc">Delivery details</h2>
        </div>
            
        <Form method="post">   
            <div className="mb1">
              <p className="del">Your delivery is on its way</p>
            </div>

            <div className="mb3-new">
            <Link to={{ pathname: `/` }} type="edit" className="btn green delivery">Done</Link>
          </div>

        </Form>   
      </div>
    </div>
  );
}
