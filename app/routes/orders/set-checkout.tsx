import { MetaFunction, Link, useLoaderData } from "remix";
import { getUserSession } from "~/sessions";
import { createPaymentSession } from '~/create-checkout-session';
import { loadStripe } from '@stripe/stripe-js';
import { getPriceFormulaByNameCode } from "~/price-formula";
import Printbox from "~/utils/printbox";


export async function loader({ request }: any) {
  const session = await getUserSession(request);

  const stripe_value = process.env.STRIPE_PUBLIC_KEY;


  const productDetail = await Printbox.getProductdetails(session.ordered_project_id);
  const priceFormula = await getPriceFormulaByNameCode(session.ordered_name_code);

  let checkoutSession = '';
  if (session && session.session_id) {
    const checkoutData = {
        'stripe_set_up_price_id': priceFormula.data[0].stripe_set_up_price_id,
        'set_up_quantity': 1,
        'stripe_packing_price_id': priceFormula.data[0].stripe_packing_price_id,
        'packing_quantity': 1,
        'stripe_per_page_price_id': priceFormula.data[0].stripe_per_page_price_id,
        'page_quantity': (productDetail.page_count) * session.ordered_quantity,
        'customer_id': session.customer_id
    }
    checkoutSession = await createPaymentSession(checkoutData);
  }

  return {
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


  const setCheckout = async (checkoutSessionId: any) => { 

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

  if (data) {
    setCheckout(data.checkout_session)
  }
  return (
    <div className="df justify-content-center my3">
        <div className="w100 mw25">
          <div className="tc">
            <div className="df justify-content-center my3 b p2 br2">
              <div className="w100 mw25">
                <p>Redirecting to stripe...</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
