import { useLoaderData, redirect } from "remix";
import { getProfile } from "~/profile";
import { updateProfile } from "~/profile";
import {cancelCustomerSubscription} from '../create-checkout-session';
import Printbox from "~/utils/printbox";
import { getUserSession, createUserSession } from "~/sessions";
import {getCustomerSubscription} from '../create-checkout-session';


export async function loader({ request }: any) {

    return true;
}

export default function index() {
  const data = useLoaderData();
  
  return (    
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">         
                    <h2>Your subscription is already cancelled</h2> 
        </div>
      </div>
    </div>
  );
}
