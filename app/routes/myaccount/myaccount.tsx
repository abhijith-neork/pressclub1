import { MetaFunction, ActionFunction, Link, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getProfile } from "~/profile";
import { getRenders } from "~/render";
import { getUserSession } from "~/sessions";
import { useState } from "react";
import Modal from "~/components/modal";
import Printbox from "~/utils/printbox";
import Project from "~/utils/project";

export async function loader({ request }: any) {
  const session: any = await getUserSession(request)
  console.log('SESSION: ', session)

  // If session id is not found then session will be a response object
  // redirecting to subscribe page
  if (!session.id) {
    return session
  }

  // if subscribed, get profile so we can get orders
  const profile: any = await getProfile(session.id)
  console.log('PROFILE: ', profile)

  if (!profile.data[0]?.orders?.length) {
    return session
  }

  // Get orders
  const order = await Printbox.getOrder(profile.data[0]?.orders[0])
  console.log(order)

  // Get renders
  const renders: any = await getRenders(profile.data[0]?.orders[0])
  console.log(renders)

  const delete_locked_projects = await Project.deleteLockedProjects(session.session_id);

  return {
    ...session,
    order,
    pdfs: renders.data
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userId = formData.get("userId");

  invariant(typeof userId === "string");
}

export default function Myaccount() {
  const data = useLoaderData();

  const [openModal, setopenModal] = useState(false);


  const checkEdit = (event: any) => {
    event.preventDefault();
      setopenModal(true);
      setProjectId(projectId);
  };

  const confirm = (projectId: any) => {
    setopenModal(false);
    location.href = '/myaccount/send-cancel-subscription';
  }

  const cancel = (projectId: any) => {
    setopenModal(false);
  }

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">

          <Modal  isOpen={openModal}>
          
            <h1>Do you want to cancel the subscription?</h1>
            <h3>We will send you an email to confirm the cancellation.</h3>
            <div>
                <h1 onClick={() => confirm()}>OK</h1>
                <h1 onClick={() => cancel()}>Cancel</h1>
            </div>
          </Modal>

          <h2 className="mc">My Account</h2>
                <p className="kingsthings">
                     <Link to="/myaccount/update-school-details">Update school details</Link>
                </p>
                {/* <p className="kingsthings">
                  <a href="#" onClick={event => checkEdit(event)}>Cancel subscription</a>
                </p> */}
                <p className="kingsthings">
                    <Link to="/myaccount/change-password">Change password</Link>
                </p>
                
         

        </div>
      </div>
    </div>
  );
}
