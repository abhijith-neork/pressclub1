import { MetaFunction, Link, useLoaderData } from "remix";
import { getUserSession } from "~/sessions";
import { createSubscriptionSession } from '../create-checkout-session';
import { loadStripe } from '@stripe/stripe-js';

export async function loader({ request }: any) {
  const session = await getUserSession(request);
    
  const stripe_value = process.env.STRIPE_PUBLIC_KEY;


  let checkoutSession = '';
  let url = new URL(request.url);
  console.log("url =====", url)
  const signUpValue = url.searchParams.get("signup");
  console.log("signUpValue =====", signUpValue)

  if (session && session.session_id) {
    checkoutSession = await createSubscriptionSession(session.email);
  }

  return {
    signUpValue,
    session: session,
    checkout_session: checkoutSession,
    stripe_value
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


  const setSubscription = async (checkoutSessionId: any) => {

    console.log('stripe_value',data.stripe_value);


    const stripe = await loadStripe(data.stripe_value);

    if (!stripe || !checkoutSessionId) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const result = stripe.redirectToCheckout({ sessionId: checkoutSessionId.id });

    //console.log("error: ", result);

    if (result.error) {
      alert('Sorry, please try again later');
      // Show error to your customer (for example, payment details incomplete)
      //console("error: ", result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  if (data && data.signUpValue) {
    setSubscription(data.checkout_session)
  }
  return (
    <div className="df justify-content-center my3">
      {data.checkout_session && !data.signUpValue ?
        <div className="w100 mw25">
          <div className="tc">

            <div className="df justify-content-center my3 b p2 br2">
              <div className="w100 mw25">
                <h2>Pressclub Subscription</h2>
                <p>A Pressclub subscription is required to access this feature. Join now for just £50 per year.</p>

                <div className="my3">
                  <a href="javascript:void(0);" onClick={() => setSubscription(data.checkout_session)} className="btn">Subscribe now</a>
                  <div className="f1 grey-dark">
                    <p>You will be redirected to our <br />payments provider Stripe.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my3">
              <Link to="/" className="btn grey">Back</Link>
            </div>
          </div>
        </div> : null}
    </div>
  );
}
