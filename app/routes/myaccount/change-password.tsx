import { MetaFunction, ActionFunction, Form, redirect, useActionData, useLoaderData, useTransition, Link } from "remix";
import invariant from "tiny-invariant";
import { useEffect, useRef } from "react";

import { getProfile } from "~/profile";
import { getCurrentPassword } from "~/profile";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";


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
  console.log('PROFILE: ', profile.data)


  return {
    ...session,
    profile
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {

  const formData = await request.formData();  console.log(formData);  


  const current_password = formData.get("current_password");
  const new_password = formData.get("new_password");
  const confirm_password = formData.get("confirm_password");
  const errors: RegisterError = {};

  if (!current_password) errors.current_password = true;
  if (!new_password) errors.new_password = true;
  if (!confirm_password) errors.confirm_password = true;


  if (Object.keys(errors).length) {
    return errors;
  }


  if(new_password!=confirm_password)
  {
    errors.response = "New password and confirm password should be same.";
    return errors;
  }

  if(new_password==current_password)
  {
    errors.response = "New password and current password should not be same.";
    return errors;
  }
  

  try {
          const user_email = formData.get("user_email");
          const response: any = await getCurrentPassword(current_password,new_password,user_email)
          console.log('CURRENT PWD: ', response)

          if (response.error) {
            errors.response = response.error.message
            return errors
          }else {
            errors.response = "Password Successfully Updated"
            return errors          
          }
      } catch (err) {
      console.log(err)
      errors.response = "Something went wrong"
      return errors
    }

 
}


export default function UpdateAccount() {
  const data = useLoaderData(); console.log('data:-', data.id);

  let errors = useActionData();
  let transition = useTransition();  console.log(errors?.status);

  let formRef = useRef();  console.log(formRef);

  useEffect(() => {
   formRef.current?.reset();

  },[errors]);

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2 className="mc">Change password</h2>
        </div>

        {errors?.response && <div className="my3 red">{errors?.response}</div>}
            
        <Form method="post" ref={formRef}>   
            <div className="mb1">
              <label>Current password</label>
              <div>
                <input type="password" name="current_password" />
              </div>
              {errors?.current_password && <div className="mt1 red">Enter current password</div>}
            </div>
            <div className="mb1">
              <label>New password</label>
              <div>
                <input type="password" name="new_password" />
              </div>
              {errors?.new_password && <div className="mt1 red">Enter new password</div>}
            </div>
            <div className="mb1">
              <label>Confirm password</label>
              <div>
                <input type="password" name="confirm_password" />
              </div>
              {errors?.confirm_password && <div className="mt1 red">Enter confirm password</div>}
            </div>

            <input type="hidden" name="user_email" value={data.email} />

          <div className="mb3">
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Updating password.." : "Update password"}</button>
          </div>
          <div className="mb3">
            <Link to={{ pathname: `/myaccount/myaccount` }}  className="btn grey printer-new">Cancel</Link>
          </div>
        </Form>
                
         

      </div>
    </div>
  );
}
