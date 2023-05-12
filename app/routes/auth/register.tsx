import { MetaFunction } from "@remix-run/react/routeModules";
import { ActionFunction, Form, useActionData, useLoaderData, useTransition } from "remix";
import invariant from "tiny-invariant";

import { register } from "~/auth";
import { createUserSession, getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import supabase from "~/utils/supabase";
import { getSchoolData } from "~/profile";
import { getProfile } from "~/profile";
import { updateProfile } from "~/profile";

type RegisterError = {
  email?: boolean;
  password?: boolean;

  school_name?: boolean;
  school_postcode?: boolean;
  school_address_line_1?: boolean;
  school_city?: boolean;

  response?: string;
};

export async function loader({ request }: any) {
  return getUserSession(request)
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const school_name = formData.get("school_name");
  const school_postcode = formData.get("school_postcode");
  const school_address_line_1 = formData.get("school_address_line_1");
  const school_address_line_2 = formData.get("school_address_line_2");
  const school_city = formData.get("school_city");
  const school_county = formData.get("school_county");

  const errors: RegisterError = {};
  if (!email) errors.email = true;
  if (!password) errors.password = true;

  if (!school_name) errors.school_name = true;
  if (!school_postcode) errors.school_postcode = true;
  if (!school_address_line_1) errors.school_address_line_1 = true;
  if (!school_city) errors.school_city = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof email === "string");
  invariant(typeof password === "string");

  invariant(typeof school_name === "string");
  invariant(typeof school_postcode === "string");
  invariant(typeof school_address_line_1 === "string");
  invariant(typeof school_city === "string");

  const school = {
    name: school_name,
    postcode: school_postcode,
    address_line_1: school_address_line_1,
    address_line_2: school_address_line_2,
    city: school_city,
    county: school_county
  }

  const response: any = await register({ email, password }, { data: { school } });
  console.log('Supabase Sign up: ', response);

  if (response.error) {
    errors.response = response.error.message
    return errors
  }

  // Create school
  const schoolResponse: any = await supabase
    .from("schools")
    .insert([school]);
  console.log(schoolResponse)

  // Add school to profile
  const profileResponse = await supabase
    .from("profiles")
    .update({ school: schoolResponse.data[0].id })
    .match({ id: response.user.id });
  console.log(profileResponse)

  // Create Printbox Customer
  const printboxResponse = await Printbox.createCustomer(
    response.user.id,
    email
  );
  console.log("Printbox createCustomer: ", printboxResponse);

  if (response.user.id) {
    const result = await updateProfile(response.user.id, {
      printbox_customer_id: printboxResponse.customer_id
    });

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const site_url = process.env.SITE_URL;

    var message = 'Hi '+school_name+',<br><br>';
    message += 'Congratulations, you have free access to Pressclub until the end of the year.<br><br>';
    message += '<a href="'+site_url+'">Visit Pressclub</a><br><br>';
    message += 'Regards,<br>Team Pressclub';

    const msg = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Welcome to Pressclub',
      html: message,
    }; 
    console.log('register-msg', msg);
    sgMail.send(msg);    
  }  

  return await createUserSession({
    id: response.user.id,
    ...printboxResponse,
    is_subscribed:true,
    school_name: school_name
  }, '/')
};

export let meta: MetaFunction = () => {
  return {
    title: "Create account | Pressclub",
    description: "Create Pressclub account"
  };
};

export default function Register() {
  useLoaderData()
  let errors = useActionData();
  let transition = useTransition();

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2>Subscribe - create an account</h2>
        </div>

        {errors?.response && <div className="my3 red">{errors?.response}</div>}

        <Form method="post">
          <div className="mb1">
            <label>Email</label>
            <div>
              <input type="email" name="email" />
              {errors?.password && <div className="mt1 red">Email required</div>}
            </div>
          </div>
          <div className="mb1">
            <label>Password</label>
            <div>
              <input type="password" name="password" />
            </div>
            {errors?.password && <div className="mt1 red">Password required</div>}
          </div>
          <fieldset className="my3">
            <legend>School</legend>
            <div className="mb1">
              <label>Name</label>
              <div>
                <input type="text" name="school_name" />
              </div>
              {errors?.school_name && <div className="mt1 red">Name required</div>}
            </div>
            <div className="mb1">
              <label>Postcode</label>
              <div>
                <input type="text" name="school_postcode" />
              </div>
              {errors?.school_postcode && <div className="mt1 red">Postcode required</div>}
            </div>
            <div className="mb1">
              <label>Address Line 1</label>
              <div>
                <input type="text" name="school_address_line_1" />
              </div>
              {errors?.school_address_line_1 && <div className="mt1 red">Address Line 1 required</div>}
            </div>
            <div className="mb1">
              <label>Address Line 2 (optional)</label>
              <div>
                <input type="text" name="school_address_line_2" />
              </div>
            </div>
            <div className="mb1">
              <label>Town/City</label>
              <div>
                <input type="text" name="school_city" />
              </div>
              {errors?.school_city && <div className="mt1 red">Town/City required</div>}
            </div>
            <div className="mb1">
              <label>County (if applicable)</label>
              <div>
                <input type="text" name="school_county" />
              </div>
              {errors?.school_county && <div className="mt1 red">County required</div>}
            </div>
          </fieldset>
          <div className="mb3">
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Creating account" : "Create account"}</button>
          </div>
        </Form>
      </div>
    </div>
  )
}