import { Link } from "remix";
import { updateProfile } from "~/profile";
import { getUserSession, createUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const Stripe = require('stripe');
  const stripe = Stripe(process.env.STRIPE_SECRET);

  const session: any = await getUserSession(request)

  const response = await stripe.customers.list({
    email: session.email,
  });

  const subscriptionId = response?.data[0]?.subscriptions.data[0]?.id

  console.log(subscriptionId)

  if (subscriptionId) {
    await updateProfile(session.id, {
      subscriptions: [subscriptionId]
    })

    return await createUserSession({
      ...session,
      is_subscribed: true
    }, '/orders/download-pdf')
  }

  return {}
}

export default function SendToPrinters() {
  return (
    <>
      <div className="df justify-content-center my3">
        <div className="w100 mw25">
          <div className="tc">
            <h2>Yay! You are now subscribed to Pressclub</h2>
            <p>You can now download your newspaper PDFs.</p>

            <div className="my3">
              <a href="/orders/download-pdf" className="btn">Download PDFs</a>
              <div className="my1 kingsthings">or</div>
              <Link to="/" className="btn grey">Back to Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
