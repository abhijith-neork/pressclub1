import { useMemo, useState } from "react";
import { useStripe, useElements, CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "-apple-system, 'Linotte', Helvetica Neue, Helvetica, Roboto, Arial, sans-serif, system-ui",
          "::placeholder": {
            color: "#d1d1d1"
          }
        },
        invalid: {
          color: "#ff2427"
        }
      }
    }),
    []
  );

  return options;
};

function CardForm() {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setSubmitting(true)

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    console.log("[PaymentMethod]", payload);

    setSubmitting(false)
  };

  return (
    <form onSubmit={handleSubmit} className="my3">
      <div className="input my1">
        <CardElement
          options={options}
        />
      </div>
      <button type="submit" disabled={!stripe || submitting}>
        {submitting ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default function PaymentForm() {
  if (typeof window === "undefined") {
    throw new Error('Failed to load payment form')
  } else {
    const stripePromise = loadStripe((window as any).ENV.STRIPE_PUBLIC_KEY);

    return (
      <Elements stripe={stripePromise}>
        <CardForm />
      </Elements>
    )
  }
}
