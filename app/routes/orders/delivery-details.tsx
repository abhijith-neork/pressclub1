import { MetaFunction, ActionFunction, Form, redirect, useActionData, useLoaderData, useTransition, Link } from "remix";
import { getProfile } from "~/profile";
import { getUserSession } from "~/sessions";
import { getSchoolData } from "~/profile";
import Printbox from "~/utils/printbox";
import { useState } from "react";
import ReactTooltip from 'react-tooltip';
import { getPriceFormulaByNameCode } from "~/price-formula";

export async function loader({ request }: any) {
  const session: any = await getUserSession(request);
  console.log('SESSION: ', session)

  // If session id is not found then session will be a response object
  // redirecting to subscribe page
  if (!session.id) {
    return redirect("/");
  }

  const projectId = session.ordered_project_id;

  const projectDetail = await Printbox.getProjectDetail(projectId);
  if (projectDetail.id == 'not_found' || !projectDetail.order) {
    return redirect("/");
  }

  // if subscribed, get profile so we can get orders
  const profile: any = await getProfile(session.id)

  // Get school details
  const school = await getSchoolData(profile.data[0]?.school)

  return {
    ...session,
    profile,
    ...school,
    ...projectDetail
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {

  let school_name = '';
  let school_address = '';
  let school_postcode = '';
  let school_city = '';
  let school_county = '';
  const formData = await request.formData();

  if(formData.get("school_name")){ school_name = formData.get("school_name");}else{ school_name = formData.get("name_loader");}
  if(formData.get("school_address_line_1")){ school_address = formData.get("school_address_line_1");}else{ school_address = formData.get("address_loader");}
  if(formData.get("school_postcode")){ school_postcode = formData.get("school_postcode");}else{ school_postcode = formData.get("postcode_loader");}
  if(formData.get("school_city")){ school_city = formData.get("school_city");}else{ school_city = formData.get("city_loader");}
  if(formData.get("school_county")){ school_county = formData.get("school_county");}else{ school_county = formData.get("country_loader");}

  const printer_email = process.env.PRINTER_EMAIL;
  const admin_email = process.env.ADMIN_EMAIL;
  const from_email = process.env.FROM_EMAIL;
  const sendgrid_key = process.env.SENDGRID_API_KEY;  

  const data: any = await getUserSession(request);
  console.log('data:', data);
  const projectId = data.ordered_project_id;
  const projectDetail = await Printbox.getProjectDetail(projectId);
  const order_number = projectDetail.order.number;
  const product = await Printbox.getProductdetails(projectId)
  const prod = product.params;
  const size = prod[0].attribute_values.size;
  const quantity = data.ordered_quantity;

  const priceFormula = await getPriceFormulaByNameCode(data.ordered_name_code);
  const actualPrice = priceFormula.data[0].set_up_price + priceFormula.data[0].packing_price + ((projectDetail.page_count + 2) * priceFormula.data[0].per_page_price * data.ordered_quantity);
  const p = Math.pow(10, 2);
  const n = (actualPrice * p) * (1 + Number.EPSILON);
  //const order_amount = new Intl.NumberFormat('en-gb', { maximumSignificantDigits: 3 }).format(Math.round(n) / p); 
  const order_amount = new Intl.NumberFormat('en-gb', { style:'currency',currency:'GBP' }).format(Math.round(n) / p);

  if(school_county){school_county=school_county;}else{school_county='';}

    const school = {
      name: school_name,
      postcode: school_postcode,
      address_line_1: school_address,
      city: school_city,
      county: school_county,
    }

    console.log("new_school:", school);
    console.log('data2:', data);

    const subject = 'Pressclub - Delivery details confirmed';

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(sendgrid_key);

    var client_message = 'Hi '+data.school_name+',<br><br>';
    client_message += 'Thank you for confirming your delivery details:<br>';

    var common_message =  'Order #: '+order_number+'<br>';
    common_message +=  'Quantity: '+quantity+'<br>';
    common_message +=  'Size: '+size+'<br>';
    common_message +=  'Amount: '+order_amount+'<br><br>';    
    common_message += 'Delivery address:<br>';
    common_message += school_name+'<br>';
    common_message += school_address+'<br>';
    common_message += school_city+' - '+school_postcode;
    if (school_county) {
      common_message += '<br>'+school_county;
    }
    common_message += '<br><br>';
    common_message += 'Regards,<br>Team Pressclub';

    const msg = {
      to: data.email,
      from: from_email,
      subject: subject,
      html: client_message+common_message,
    };
    sgMail.send(msg)
    .then(() => console.log('Mail sent successfully to '+data.email))
    .catch(error => console.error(error.toString()));

    var admin_message = 'Hi,<br><br>';
    admin_message += 'A new order was placed.<br>Details are provided below:<br>';

    const msg1 = {
      to: printer_email,
      from: from_email,
      subject: 'Pressclub - A new order was placed Order#'+order_number,
      html: admin_message+common_message,
    };
    sgMail.send(msg1)
    .then(() => console.log('Mail sent successfully to '+printer_email))
    .catch(error => console.error(error.toString()));

    const msg2 = {
      to: admin_email,
      from: from_email,
      subject: 'Pressclub - A new order was placed Order#'+order_number,
      html: admin_message+common_message,
    };
    sgMail.send(msg2)
    .then(() => console.log('Mail sent successfully to '+admin_email))
    .catch(error => console.error(error.toString()));
    
    throw redirect("/orders/delivery-success");
}

export default function UpdateAccount() {
  const data = useLoaderData(); console.log(data);

    const [agree, setAgree] = useState(false); console.log('aaa', agree);

    const onclickHandler = () => {
      setAgree(!agree);
    }

  let errors = useActionData(); 
  let transition = useTransition();  

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">
          <h2 className="mc">Delivery details</h2>
        </div>
            
        <Form method="post">   
            <div className="mb2">
              <label> Name     : </label> <input type="text"  name="school_name" className="edit_name" disabled={!agree} defaultValue={data.body[0].name}/>
            </div>
            <div className="mb2">
                <label> Address  : </label> <input type="text"  name="school_address_line_1" className="edit_address" disabled={!agree} defaultValue={data.body[0].address_line_1}/>
            </div>
            <div className="mb2">
              <label> City     : </label> <input type="text"  name="school_city" className="edit_city" disabled={!agree} defaultValue={data.body[0].city}/>
            </div>
            <div className="mb2">
              <label> Country  : </label> <input type="text"  name="school_county" className="edit_country" disabled={!agree} defaultValue={data.body[0].county}/>
            </div>
            <div className="mb2">
              <label> Postcode : </label> <input type="text"  name="school_postcode" className="edit_postcode" disabled={!agree} defaultValue={data.body[0].postcode}/>
            </div>


            <input type="hidden"  name="name_loader" defaultValue={data.body[0].name}/>
            <input type="hidden"  name="address_loader" defaultValue={data.body[0].address_line_1}/>
            <input type="hidden"  name="city_loader" defaultValue={data.body[0].city}/>
            <input type="hidden"  name="country_loader" defaultValue={data.body[0].county}/>
            <input type="hidden"  name="postcode_loader" defaultValue={data.body[0].postcode}/>
            <input type="hidden"  name="order_number" defaultValue={data.order.number}/>

          <div className="mb3-23">
            <button type="submit" data-tip data-for='confirm' className="btn green delivery" >Confirm</button>
             <ReactTooltip id='confirm' type='warning'>
                <span>Confirm delivery details</span>
              </ReactTooltip>
          </div>

          <div className="mb3-23">
            <Link to='#' data-tip data-for='edit_list' onClick={onclickHandler} type="edit" className="btn grey delivery">Edit</Link>
            <ReactTooltip id='edit_list' type='warning'>
                <span>Edit delivery details</span>
            </ReactTooltip>
          </div>
        </Form>
                
         

      </div>
    </div>
  );
}
