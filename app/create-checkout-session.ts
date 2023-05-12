const stripe = require('stripe')(process.env.STRIPE_SECRET);


export async function createSubscriptionSession(email) {
  return await stripe.checkout.sessions.create({ 
    success_url: process.env.SITE_URL+"?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.SITE_URL+'?subscription_attempt=cancelled',
    line_items: [
      {price: process.env.STRIPE_SUBSCRIPTION_PRICE_ID, quantity: 1},
    ],
    mode: 'subscription',
    customer_email: email
  });
}

export async function retrieveSubscriptionSession(checkout_session_id) {
  const session = await stripe.checkout.sessions.retrieve(checkout_session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  if (session) {
    return {
      is_session: true,
      customer: customer
    }
  }
  
  return {
    is_session: false
  }
}

export async function getCustomerSubscription(customer_id) {
  return await stripe.subscriptions.list({
    customer: customer_id
  });
}

export async function getCustomerSubscriptionById(subscription_id) {
  return await stripe.subscriptions.retrieve(
    subscription_id
  );
}

export async function cancelCustomerSubscription(subscription_id) {
  return await stripe.subscriptions.del(subscription_id);
}

export async function getSubscriptionStartEndDates(start_time_stamp, end_time_stamp) {
  const start_date = new Date(parseInt(start_time_stamp) * 1000);
  const subscription_start_date = `${start_date.getFullYear()}-${start_date.getMonth()+1}-${start_date.getDate()}`;

  const end_date = new Date(parseInt(end_time_stamp) * 1000);
  const subscription_end_date = `${end_date.getFullYear()}-${end_date.getMonth()+1}-${end_date.getDate()}`;

  return {
    subscription_start_date: subscription_start_date,
    subscription_end_date: subscription_end_date
  }
}

export async function getCurrentDate() {
  const date = new Date();
  const current_date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;  

  return {
    current_date: current_date
  }
}

export async function getDateAfter30Days() {
  const date = new Date();
  date.setDate(date.getDate()+31);
  const after_date_30 = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

  return {
    after_date_30: after_date_30
  }
}

export async function createPaymentSession(checkoutData) {
  return await stripe.checkout.sessions.create({
    success_url: process.env.SITE_URL+"orders/payment-confirm?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.SITE_URL+'?subscription_attempt=payment_cancelled',
    line_items: [
      {price: checkoutData.stripe_set_up_price_id, quantity: checkoutData.set_up_quantity},
      {price: checkoutData.stripe_packing_price_id, quantity: checkoutData.packing_quantity},
      {price: checkoutData.stripe_per_page_price_id, quantity: checkoutData.page_quantity}
    ],
    mode: 'payment',
    client_reference_id: checkoutData.customer_id
  });
}