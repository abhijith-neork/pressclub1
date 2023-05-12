import { Metafunction, ActionFunction, Form, useActionData, useLoaderData, useTransition, Link } from "remix";
import invariant from "tiny-invariant";
import { getProfile } from "~/profile";
import { getSchoolData } from "~/profile";
import { updateSchoolData } from "~/profile";
import { useEffect } from "react";



import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";


type RegisterError = {

  school_name?: boolean;
  school_postcode?: boolean;
  school_address_line_1?: boolean;
  school_city?: boolean;
  response?: string;
  status?: number

};


export async function loader({ request }: any) {
  const session: any = await getUserSession(request);
  console.log('SESSION: ', session)

  // If session id is not found then session will be a response object
  // redirecting to subscribe page
  if (!session.id) {
    return session
  }

  // if subscribed, get profile so we can get orders
  const profile: any = await getProfile(session.id)
  console.log('PROFILE: ', profile)


  // Get school details
  const school = await getSchoolData(profile.data[0]?.school)
  // console.log('SCHOOL:', school.data[0])


  return {
    ...session,
    school
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData(); console.log(formData);

  const school_name = formData.get("school_name");
  const school_postcode = formData.get("school_postcode");
  const school_address_line_1 = formData.get("school_address_line_1");
  const school_address_line_2 = formData.get("school_address_line_2");
  const school_city = formData.get("school_city");
  const school_county = formData.get("school_county");

  const errors: RegisterError = {};

  if (!school_name) errors.school_name = true;
  if (!school_postcode) errors.school_postcode = true;
  if (!school_address_line_1) errors.school_address_line_1 = true;
  if (!school_city) errors.school_city = true;

  console.log("errors ============", errors)
  if (Object.keys(errors).length) {
    return errors;
  }

  invariant(typeof school_name === "string");
  invariant(typeof school_postcode === "string");
  invariant(typeof school_address_line_1 === "string");
  invariant(typeof school_city === "string");

  try {

    const school = {
      id: formData.get("school_id"),
      name: formData.get("school_name"),
      postcode: formData.get("school_postcode"),
      address_line_1: formData.get("school_address_line_1"),
      address_line_2: formData.get("school_address_line_2"),
      city: formData.get("school_city"),
      county: formData.get("school_county"),
    }

    console.log("new_school:", school);

    const response: any = await updateSchoolData(school);
    console.log('Supabase school detils update: ', response);

    if (response.error) {
      errors.response = response.error.message
      errors.status = 1
      return errors
    }

    if (response.error == null) {
      errors.response = "Succssfully updated school details"
      errors.status = 0
      return errors
    }
  } catch (err) {
    console.log(err)

    errors.response = "Something went wrong"
    return errors
  }
}



export default function UpdateAccount() {
  const data = useLoaderData()
  console.log('Loader:', data.school.data[0])

  let errors = useActionData();
  let transition = useTransition(); console.log(errors?.status);


  useEffect(() => {
      window.scrollTo(0, 0);

  },[errors]);


  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2 className="mc">Update school details</h2>
        </div>

        {errors?.response && <div className="my3 red">{errors?.response}</div>}

        <Form method="post">
          <fieldset className="my3">
            <legend>School details</legend>
            <div className="mb1">
              <label>Name</label>
              <div>
                <input type="text" name="school_name"
                  defaultValue={data.school.data[0].name}
                />
              </div>
              {errors?.school_name && <div className="mt1 red">Name required</div>}
            </div>
            <div className="mb1">
              <label>Postcode</label>
              <div>
                <input type="text" name="school_postcode" defaultValue={data.school.data[0].postcode}
                />
              </div>
              {errors?.school_postcode && <div className="mt1 red">Postcode required</div>}
            </div>
            <div className="mb1">
              <label>Address Line 1</label>
              <div>
                <input type="text" name="school_address_line_1" defaultValue={data.school.data[0].address_line_1} />
              </div>
              {errors?.school_address_line_1 && <div className="mt1 red">Address Line 1 required</div>}
            </div>
            <div className="mb1">
              <label>Address Line 2 (optional)</label>
              <div>
                <input type="text" name="school_address_line_2" defaultValue={data.school.data[0].address_line_2} />
              </div>
            </div>
            <div className="mb1">
              <label>Town/City</label>
              <div>
                <input type="text" name="school_city" defaultValue={data.school.data[0].city} />
              </div>
              {errors?.school_city && <div className="mt1 red">Town/City required</div>}
            </div>
            <div className="mb1">
              <label>County (if applicable)</label>
              <div>
                <input type="text" name="school_county" defaultValue={data.school.data[0].county} />
              </div>
              {errors?.school_county && <div className="mt1 red">County required</div>}
            </div>
            <input type="hidden" name="school_id" defaultValue={data.school.data[0].id} />
          </fieldset>

          <div className="mb3">
            <button type="submit" disabled={Boolean(transition.submission)}>{transition.submission ? "Updating.." : "Update"}</button>
          </div>
          <div className="mb3">
            <Link to={{ pathname: `/myaccount/myaccount` }}  className="btn grey printer-new">Cancel</Link>
          </div>
        </Form>

      </div>
    </div>
  );
}
