const stripe = require('stripe')(process.env.STRIPE_SECRET);

export async function createPaymentIntent(pay_amount) {
  return await stripe.paymentIntents.create({
    amount: pay_amount*100,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    }
  })
}

export async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id);
}