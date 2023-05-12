import { useLoaderData, redirect } from "remix";
import { getProfile } from "~/profile";
import { updateProfile } from "~/profile";
import {cancelCustomerSubscription} from '../create-checkout-session';
import Printbox from "~/utils/printbox";
import { getUserSession, createUserSession } from "~/sessions";
import {getCustomerSubscription} from '../create-checkout-session';


export async function loader({ request }: any) {
    const session: any = await getUserSession(request)

    const url = new URL(request.url);
    const encodedCodeF = url.searchParams.get("code_f");
    const decodedCodeF = Buffer.from(encodedCodeF, 'base64').toString('ascii');
 
    const remvedFirstFiveCharacters = decodedCodeF.slice(5);
    const customer_id = remvedFirstFiveCharacters.slice(0, -5);

    const encodedCodeS = url.searchParams.get("code_s");
    const customer_email = Buffer.from(encodedCodeS, 'base64').toString('ascii');

    console.log('customer_email: ', customer_email);
    const profile = await getProfile(customer_id); 

    const subscription_status = profile.data[0].subscriptions; console.log('subscription status', profile.data[0].subscriptions);

    const customer = await Printbox.getCustomer(customer_id);   

    if(subscription_status){  console.log('subscribed');

    const result = await cancelCustomerSubscription(profile.data[0].subscriptions[0]);

    if (result && result.status == 'canceled') {
        const result = await updateProfile(customer_id, {
            subscriptions: null
        });

        const sgMail = require('@sendgrid/mail');

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        var message = 'Hi,<br><br>';
        message += 'Your subscription has been successfully cancelled<br><br>';    
        message += 'Regards,<br>Team Pressclub';

        const msg = {
            to: customer_email,        
            from: process.env.FROM_EMAIL,
            subject: 'Pressclub - Subscription cancelled',
            html: message,
        };
        sgMail.send(msg);  

        var message = 'Hi,<br><br>';
        message += 'Customer '+customer_email+' has been cancelled subscription<br><br>';    
        message += 'Regards,<br>Team Pressclub';

        const msg2 = {
            to: process.env.ADMIN_EMAIL,        
            from: process.env.FROM_EMAIL,
            subject: 'Pressclub - Customer Cancelled Subscription',
            html: message,
        };
        sgMail.send(msg2);  

        if (session) {
            return await createUserSession({
                ...session,
                is_subscribed: false
            }, '/?subscription_attempt=subscription_cancelled');
        } else {
            return redirect('/?subscription_attempt=subscription_cancelled');
        }        
    } else {
        return redirect('/?subscription_attempt=subscription_cancelled_failed');
    }  

   }else{ console.log('not subscribed');

   return redirect('/subscription-already-cancelled');

   }
}

export default function index() {
  const data = useLoaderData();
  
  return (    
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">
            {data?
                <>          
                    <h2>Your subscription has been successfully cancelled</h2> 
                </> : <>  
                    <h2>Your subscription could not be cancelled. Please try again later.</h2> 
                </>
            }               
        </div>
      </div>
    </div>
  );
}
