import { MetaFunction, redirect, useLoaderData } from "remix";
import {retrievePaymentIntent} from '~/payments'

export async function loader({ request }: any) {
  let url = new URL(request.url);
  let paymentIntentId = url.searchParams.get("payment_intent");

  if (!paymentIntentId) {
    return redirect("/?subscription_attempt=payment_failed");
  }

  const result = await retrievePaymentIntent(paymentIntentId);
  console.log('result: ', result);
  if (!result.error) {
    return redirect("/orders/confirm-order");
  } else {
    return redirect("/?subscription_attempt=payment_failed");
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function index() {
    const data = useLoaderData();   
    return null;
}
