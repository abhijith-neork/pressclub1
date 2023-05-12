import {useSubmit, Form, useLoaderData, redirect} from 'remix'
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useEffect } from "react";
import { getUserSession, createUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { updateProfile } from "~/profile";

export async function loader({ request }: any) {
    let url = new URL(request.url);
    let projectId = url.searchParams.get("project_id");
    let quantity = url.searchParams.get("quantity");
    //let redirect_url = process.env.PAYMENT_REDIRECT_URL;
    let redirect_url = 'https://pressclub1-pressclub.vercel.app/orders/confirm-payment';

 const current_session2: any = await getUserSession(request);
console.log('current_session2: ', current_session2);

    const projectDetail = await Printbox.getProjectDetail(projectId);
    if (projectDetail.id == 'not_found') {
      return redirect("/");
    }

    return {projectId,quantity,redirect_url}
}

export const action = async ({request}) => {
  const formData = await request.formData();
  console.log(formData);

  await confirmPayment(formData);

  return redirect("/pay/success");
}


export default function PayForm() {
  const submit = useSubmit();
  const stripe = useStripe();
  const elements = useElements();

  const data = useLoaderData();  console.log('yyyyyyyyyy-', data);

  const handleChange = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) {
      console.log("Stripe or elements not loaded");
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: data.redirect_url,
      }
    })

    console.log("stripe result: ", result);
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      alert(result.error.message);

      let projectId = '/pay?project_id='+ data.projectId ;
      let quantity = '&quantity=' + data.quantity;

      location.href =  projectId+quantity;

    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    submit(event.currentTarget, { replace: true });
  }

  return (
    <Form method="post" onSubmit={handleChange}>
      <h1>Pay</h1>

      <PaymentElement />

      <p>
        <button type="submit">Pay</button>
      </p>
    </Form>
  );
}