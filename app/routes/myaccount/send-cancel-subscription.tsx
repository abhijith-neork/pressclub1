import { Metafunction, useLoaderData } from "remix";
import { getUserSession} from "~/sessions";

export async function loader({ request }: any) {
    const session: any = await getUserSession(request)
    console.log('SESSION: ', session);

    const generateRandomString = (myLength) => {
        const chars =
          "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
          { length: myLength },
          (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );
      
        const randomString = randomArray.join("");
        return randomString;
    };
      
    const firstFourCharcters = generateRandomString(4);
    const lastFourCharacters = generateRandomString(4);

    const codeToEncode = firstFourCharcters+'-'+session.id+'-'+lastFourCharacters;
    const code_f = Buffer.from(codeToEncode).toString('base64');
    const code_s = Buffer.from(session.email).toString('base64');

    const site_url = process.env.SITE_URL+'cancel-subscription?code_f='+code_f+'&code_s='+code_s; console.log('urllllllllllll..', site_url);

    console.log('cancellation link:', site_url);
    const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    var message = 'Hi,<br><br>';
    message += 'Please confirm your subscription cancellation by clicking on the link below.<br><br>';
    message += '<a href="'+site_url+code_f+'&code_s='+code_s+'">Confirm cancellation</a><br><br>';
    message += 'Regards,<br>Team Pressclub';

    const msg = {
        to: session.email,
        from: process.env.FROM_EMAIL,
        subject: 'Pressclub - Confirm cancellation',
        html: message,
    };

    //console.log(msg);
    const result = sgMail.send(msg);  

    return true;
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function index() {
  const data = useLoaderData();
  
  return (    
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">          
          <h2>An email has been sent to confirm your subscription cancellation</h2>                  
        </div>
      </div>
    </div>
  );
}
