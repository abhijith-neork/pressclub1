import {Outlet, useLoaderData} from 'remix'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {createPaymentIntent} from '~/payments';
import Printbox from "~/utils/printbox";
import { useState } from "react";

const stripePromise = loadStripe('pk_test_51LPsvMG5fV8tIkqhXvn9NPMJgkir7WDU3DZc6gO5WWngUYUaLdMSJiU0mg7k6BydG3DFNS42xcb0RbFPmo2JykwT00wsPxQoOG');

export const loader = async ({ request }: any) => {  
    const url = new URL(request.url);
    const projectId = url.searchParams.get("project_id");
    const product = await Printbox.getProductdetails(projectId);
    //console.log('product: ',product);
    
    const totalQty = url.searchParams.get("quantity"); 
    const amount = JSON.parse(totalQty)*Math.round(product.price_gross);

    return await createPaymentIntent(amount);    
}

export default function Payments() {
  const paymentIntent = useLoaderData()
  const options = {
    // passing the client secret obtained from the server
    clientSecret: paymentIntent.client_secret,
  };

  return (
    <div style={{padding: '20px'}}>
      <Elements stripe={stripePromise} options={options}>
        <Outlet />
      </Elements>
    </div>
  );
}