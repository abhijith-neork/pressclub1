import { MetaFunction } from "@remix-run/react/routeModules";
import { ActionFunction, Form, redirect, useTransition, useLoaderData, useActionData } from "remix";
import invariant from "tiny-invariant";
import { useEffect, useState } from "react"
import { resetPassword } from "~/auth";
import { getUserSession } from "~/sessions";

type ResetPasswordError = {
  password?: boolean;
  rePassword?: boolean;
  passwordNotEqual?: boolean;
  response?: string
};

export let meta: MetaFunction = () => {
  return {
    title: "Reset Password | Pressclub",
    description: "Reset Password"
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const errors: ResetPasswordError = {};

  const password = formData.get("password");
  const rePassword = formData.get("rePassword");
  const accessToken = formData.get("access_token");

  if (!password) errors.password = true;
  if (!rePassword) errors.rePassword = true;

  if (password !== rePassword) {
    errors.passwordNotEqual = true;
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof password === "string");
  invariant(typeof rePassword === "string");

  try {
    console.log('accessToken1', accessToken)

    //Supabase Reset password
    const response: any = await resetPassword({ password, access_token: accessToken });
    console.log('Supabase Reset password1: ', response);

    if (response.error) {
      errors.response = response.error.message
      return errors
    }

    return redirect("/auth/signin");

  } catch (err) {
    console.log("error"+err);
    errors.response = "Something went wrong"
    return errors
  }
};


export default function ResetPassword() {
  let errors = useActionData();
  let transition = useTransition();

  useEffect(() => {
    let url = window.location.href;
    let url_parts = url.split('access_token=');
    let message = 'Email link is invalid or has expired. Please try again.';
    let is_redirect = false;
    if (url_parts[1]) {
      let split_data = url_parts[1].split('&'); 
      if (!split_data[0]) {
        is_redirect = true;
      }
      document.getElementById('access_token').value = split_data[0];
    } else {
      is_redirect = true;
    }

    if (is_redirect) {
      alert(message);
      location.href = '/auth/forgot-password';
    }
  }, []);

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2>Reset Password</h2>
        </div>
        {errors?.response && <div className="my3 red tc">{errors?.response}</div>}
        {errors?.passwordNotEqual && <div className="mt1 red">Passwords do not match</div>}
        <Form method="post">
          <div className="mb3">
            <label>Password</label>
            <div>
              <input type="password" name="password"
              />
            </div>
            {errors?.password && <div className="mt1 red">Password required</div>}
            <br />
            <label>Re-enter Password</label>
            <div>
              <input type="password" name="rePassword"
              />
            </div>
            {errors?.rePassword && <div className="mt1 red">Re-enter Password required</div>}
          </div>
          <div className="mb3">
            <input type="hidden" id="access_token" name="access_token"></input>
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Please wait" : "Reset Password"}</button>
          </div>
        </Form>
      </div>
    </div>
  )
}