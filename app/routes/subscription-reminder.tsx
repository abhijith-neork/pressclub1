import { useLoaderData } from "remix";
import {getCustomerSubscriptionById} from '~/create-checkout-session';
import {getSubscriptionStartEndDates} from '~/create-checkout-session';
import {getDateAfter30Days} from '~/create-checkout-session';
import { getSubscriptionReminders } from "~/profile";
import Printbox from "~/utils/printbox";

export async function loader({ request }: any) {  
  const dateAfterDays30 = await getDateAfter30Days();
  console.log('dateAfterDays30:',dateAfterDays30);
  const profileResponse: any = await getSubscriptionReminders(dateAfterDays30.after_date_30);
  console.log('profileResponse:',profileResponse);

  const today = new Date(); 
  const date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear(); console.log('current date-', date);
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); console.log('current time-', time);
  const datetime = date + ' ' + time; console.log('datetime',datetime);

  if (profileResponse) {
      const data = profileResponse.data;

      if (data.length) {     
          var message = 'Hi,<br><br>';
          message += 'Your subscription is due for renewal in 30 days<br><br>';    
          message += 'Regards,<br>Team Pressclub';

          for (var i = 0; i < data.length; i++) {                
              if (data[i].subscriptions[0]) {
                  console.log('data[0]: ', data[i].subscriptions[0]);                   try {
                      const subscriptionDetail = await getCustomerSubscriptionById(data[i].subscriptions[0]);
                      const getSubscriptionDates = await getSubscriptionStartEndDates(subscriptionDetail.current_period_start, subscriptionDetail.current_period_end);
                                              
                      // if (getSubscriptionDates.subscription_end_date == dateAfterDays30.after_date_30) {
                          const customer = await Printbox.getCustomer(data[i].printbox_customer_id);
                          console.log('customer:',customer);
                          if (customer) {
                            const sgMail = require('@sendgrid/mail');
                            sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
                            //sgMail.setApiKey('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');                           

                              const msg = {
                                  to: customer.email,  
                                  from: process.env.FROM_EMAIL, 
                                  //from: 'pressclubdev@gmail.com',     
                                  subject: 'Pressclub - Subscription renewal',
                                  html: message,
                              };
                              sgMail.send(msg)
                            .then(() => console.log('Mail sent successfully to '+customer.email))
                            .catch(error => console.error(error.toString()));
                          }
                      // } else {
                      //     //update the subscription dates of the user
                      //     const result = await updateProfile(data[i].id, {
                      //         subscription_start_date: getSubscriptionDates.subscription_start_date,
                      //         subscription_end_date: getSubscriptionDates.subscription_end_date
                      //     });
                      // }
                    } catch (err) {
                      console.error(err);                        
                    }
              }
          }
      }
  }

  return {
    dateAfterDays30,
    profileResponse,
    from_email:process.env.FROM_EMAIL
  };
}


export default function Index() {
  const data = useLoaderData();
  console.log('data:',data);
  return null;
}
