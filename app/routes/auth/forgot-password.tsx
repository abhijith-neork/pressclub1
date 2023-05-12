import { MetaFunction } from "@remix-run/react/routeModules";
import { ActionFunction, Form, redirect, useActionData, useTransition, json, useLoaderData, Link } from "remix";
import invariant from "tiny-invariant";

import { forgotPassword } from "~/auth";


type ForgotPasswordError = {
    email?: boolean;
    response?: string
  };

  export let meta: MetaFunction = () => {
  return {
    title: "Forgot password | Pressclub",
    description: "Create Pressclub account"
  };
};

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const errors: ForgotPasswordError = {};

    if (!email) errors.email = true;
  
    if (Object.keys(errors).length) {
      return errors;
    }
    invariant(typeof email === "string");
  
    try {
      // Supabase Forgot password
      const response: any = await forgotPassword({ email });
  
      if (response.error) {
        errors.response = response.error.message
        return errors
      } else {
        errors.response = "Please check your mailbox. If email is valid you will receive a reset password email"
        return errors
      }
  
    } catch (err) {
      console.log(err)
      errors.response = "Something went wrong"
      return errors
    }
  };


export default function ForgotPassword() {
  useLoaderData()
  let errors = useActionData();
  let transition = useTransition();

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2>Forgot Password</h2>
        </div>

        {errors?.response && <div className="my3 red tc">{errors?.response}</div>}

        <Form method="post">
          <div className="mb1">
            <label>Email</label>
            <div>
              <input type="email" name="email" />
            </div>
            {errors?.email && <div className="mt1 red">Email required</div>}
          </div>
          <div className="mb3">
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Please wait" : "Forgot password"}</button>
          </div>
        </Form>
      </div>
    </div>
  )
}