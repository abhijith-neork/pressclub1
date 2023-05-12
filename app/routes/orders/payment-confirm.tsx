import { MetaFunction, redirect, useLoaderData } from "remix";
import {retrieveSubscriptionSession} from '~/create-checkout-session';

export async function loader({ request }: any) {
    let url = new URL(request.url);
    let checkoutSessionId = url.searchParams.get("session_id");

    if (checkoutSessionId) {
        const retreiveSession = await retrieveSubscriptionSession(checkoutSessionId);
        
        if (retreiveSession.is_session) {
            return redirect("/orders/confirm-order");
        } else {
            return redirect("/?subscription_attempt=payment_failed");
        }
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
