import { MetaFunction } from "@remix-run/react/routeModules";
import { ActionFunction, Form, redirect, useActionData, useTransition, json, useLoaderData, Link } from "remix";
import invariant from "tiny-invariant";
import { useEffect } from "react"
import { signIn } from "~/auth";
import { getProfile } from "~/profile";
import { createUserSession, getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { getSchoolData } from "~/profile";

type SigninError = {
  email?: boolean;
  password?: boolean;
  response?: string
};

export async function loader({ request }: any) { 
  const url = new URL(request.url);
  console.log("url =======", url)
  const access_token = url.searchParams.get("access_token");
  console.log("access_token =======", access_token)
  const categoryPath_demo = process.env.CATEGORY_PATH_DEMO;

  let user_session = '';
  if(access_token) {
    user_session = await createUserSession({
      access_token,
    }, '/auth/reset-password');
  } else {
    user_session = getUserSession(request)
  }

  return {
    usersession: user_session,
    categoryPath_demo: categoryPath_demo
  }
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const errors: SigninError = {};
  if (!email) errors.email = true;
  if (!password) errors.password = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof email === "string");
  invariant(typeof password === "string");

  try {
    // Supabase sign in
    const response: any = await signIn({ email, password });
    console.log('Supabase Sign in: ', response);

    if (response.error) {
      errors.response = response.error.message
      return errors
    }

    // Supabase get profile
    const profileResponse: any = await getProfile(response.user.id);
    console.log('profileResponse:',profileResponse);
    let school_name = '';
    if(profileResponse && profileResponse.data && profileResponse.data[0] && profileResponse.data[0]?.school) {
      // Get school details
      const school = await getSchoolData(profileResponse.data[0]?.school);
      console.log('school:',school);
      school_name = school && school.data && school.data[0] && school.data[0].name ? school.data[0].name : "";
    }

    // Printbox check if account already exists with email
    let printboxResponse = await Printbox.getCustomerByEmail(response.user.email)
    console.log('Printbox getCustomerByEmail: ', printboxResponse)

    if (printboxResponse.id === "not_found") {

      // Printbox create account
      printboxResponse = await Printbox.createCustomer(response.user.id, email)
      console.log('Printbox createCustomer: ', printboxResponse)

      // Create session
      return createUserSession({
        id: response.user.id,
        ...printboxResponse.results[0],
        is_subscribed: profileResponse.data[0]?.subscriptions?.length > 0,
        ordered_project_id: null,
        ordered_quantity: null,
        school_name: school_name
      });
    } else {
      if (printboxResponse.results[0]) {
        // Printbox If account exists login
        printboxResponse = await Printbox.loginCustomer(printboxResponse.results[0].customer_id)
        console.log('Printbox loginCustomer: ', printboxResponse)

        // Create session
        return createUserSession({
          id: response.user.id,
          ...printboxResponse,
          is_subscribed:true,
          ordered_project_id: null,
          ordered_quantity: null,
          school_name: school_name
        });
      } else {
        errors.response = "Unable to find Printbox user"
        return errors
      }
    }
  } catch (err) {
    console.log(err)

    errors.response = "Something went wrong"
    return errors
  }
};

export let meta: MetaFunction = () => {
  return {
    title: "Sign in | Pressclub",
    description: "Sign in to Pressclub"
  };
};

export default function SignIn() {

  useEffect(() => {
    redirectToResetPasswordPage()
  }, []);

  const data = useLoaderData(); 
  let errors = useActionData();
  let transition = useTransition();

  let demo_url = "/demo/redirect-product-list?step=product_list&categoryPath="+data.categoryPath_demo; 

  async function redirectToResetPasswordPage() {
    let currentURL = window.location.href.replace(/#/g, "&");
    const params = new URLSearchParams(currentURL)
    if(params.has('type') && (params.get('type') === "recovery")) {
      window.location.href = `/auth/signin?redirectTo=%2F&access_token=${params.get('access_token')}`;
    }
  }

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
          {/* <div className="my3"> 
              <a href={demo_url}>
                  <button type="submit" className="btn green">Free Demo</button>
              </a>
          </div> */}
        <div className="tc">
          <h2>Sign in</h2>
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
            <label>Password</label>
            <div>
              <input type="password" name="password" />
            </div>
            {errors?.password && <div className="mt1 red">Password required</div>}
          </div>
          <div className="mb3">
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Signing in" : "Sign in"}</button>
          </div>
        </Form>
        <Link className="kingsthings tc red" to="/auth/forgot-password">Forgot password?</Link>
      </div>
    </div>
  )
}