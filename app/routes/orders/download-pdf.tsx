import { MetaFunction, ActionFunction, Link, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getRenders } from "~/render";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { updateProfile } from "~/profile";
import { getProfileByPrintboxCustomerId } from "~/profile";
import { register } from "~/auth";
import supabase from "~/utils/supabase";

export async function loader({ request }: any) {
  let url = new URL(request.url);
  let projectId = url.searchParams.get("projectId");
  let isCompleted = url.searchParams.get("isCompleted");
  let user_id = '';
  let to_email ='';
  let not_order_reason = '';
  let CATEGORY_PATH_DEMO = process.env.CATEGORY_PATH_DEMO;

  let projectDetail = await Printbox.getProjectDetail(projectId);

  if (projectDetail.id == 'not_found') {
    return redirect("/");
  }

  const session: any = await getUserSession(request);

  if (session && session.id) {
    user_id = session.customer_id;
    to_email = session.email;
  }

  if (projectDetail.customer && projectDetail.customer.id) {
    user_id = projectDetail.customer.id;
  }
console.log('user_id:',user_id);

  if (!user_id) {    
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
      string += chars[Math.floor(Math.random() * chars.length)];
    } 

    const email = string + '@gmail.com';
    const password = string;
    const school_name = string + 'school';
    const school_postcode = string ;
    const school_address_line_1 = string + 'school_address' ;
    const school_address_line_2 = '' ;
    const school_city = string + 'school_city';

    const school = {
      name: school_name,
      postcode: school_postcode,
      address_line_1: school_address_line_1,
      address_line_2: school_address_line_2,
      city: school_city,
      county: 'uk'
    }

    const response: any = await register({ email, password }, { data: { school } });

    // Create school
    const schoolResponse: any = await supabase
      .from("schools")
      .insert([school]);

    // Add school to profile
    const profileResponse = await supabase
      .from("profiles")
      .update({ school: schoolResponse.data[0].id })
      .match({ id: response.user.id });

    // Create Printbox Customer
    const printboxResponse = await Printbox.createCustomer(
      response.user.id,
      email
    );

    const result = await updateProfile(response.user.id, {
      printbox_customer_id: printboxResponse.customer_id
    }); 

    // Update Printbox Customer id in Project
    const userResponse = await Printbox.updateProjectUserid(
      projectId,
      printboxResponse.customer_id
    );
    
    user_id = printboxResponse.customer_id;
  }

  if (!projectDetail.order) {
    // Create order on Printbox
    const order = await Printbox.createOrder(user_id, [
      {
        project_id: projectId,
        quantity: 1,
        item_price_net: 0,
      },
    ]);

    if (order.number) {
      // Mark order as paid on Printbox
      const updateOrder = await Printbox.setOrderAsPaid(order.number); 
    }
  }

  let profile = await getProfileByPrintboxCustomerId(user_id);

  projectDetail = await Printbox.getProjectDetail(projectId);

  let orderNumber = (projectDetail.order.number) ? [projectDetail.order.number] : null;

  let profileData = await updateProfile(profile.data[0].id, {
    orders: orderNumber
  });
  
  // Get orders
  profile = await getProfileByPrintboxCustomerId(user_id);
  const orderDetail = await Printbox.getOrder(profile.data[0]?.orders[0]);

  if (orderDetail.id && orderDetail.id == 'not_found') {  
    not_order_reason = projectDetail.is_not_orderable_reason;
  }

  // Get renders
  const renders: any = await getRenders(profile.data[0]?.orders[0]); console.log('renders--', renders.data?.length);

  return {
    ...session,
    orderDetail,
    pdfs: renders.data,
    projectId,
    not_order_reason,
    isCompleted: isCompleted,
    CATEGORY_PATH_DEMO
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const userId = formData.get("userId");

  invariant(typeof userId === "string");
}

export default function DownloadPDF() {
  const data = useLoaderData(); console.log('data-',data);
  let backUrl = data.isCompleted ? '/projects/completed' : '/orders/success?projectId='+data.projectId;
  
  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw25">
        <div className="tc">          
          {data.orderDetail.number ?
            <>
            <h2>Download PDF</h2>
            {(!data.pdfs || data.pdfs?.length === 0) &&
              <p>Your newspaper is still being prepared. <br />To see your PDF, refresh this page in 5-10 minutes.</p>
            }

           {data.pdfs?.length > 0 &&
              <>
                <p>Your PDF is ready to download!</p>
                <div className="df justify-content-center my3 b p2 br2">
                  <div className="my1">
                      <a className="btn my1" style={{ display: 'block' }} href={data.pdfs[0].render_url} target="_blank" rel="noopener noreferrer">Download Page</a>
                  </div>
                </div>
              </>
            }

            <div className="my3">
              <a href={backUrl}>
                <button type="submit" className="btn grey" style={{width:'150px'}}>Back</button>
              </a>
            </div>
            </>:<>
              <p>Your order cannot be placed right now. <br />Please try again later. <br />Reason: {data.not_order_reason}</p>
              <div className="my3">
                {data.session && data.session.id ?
                <>
                <Link to={`/products#&step=editor&projectId=${data.projectId}`} className="btn grey">Go Back To Editor</Link>
                </>:<>
                <Link to={`/demo/freedemoeditor#step=product_list&categoryPath=${data.CATEGORY_PATH_DEMO}`} className="btn grey">Go Back To Products</Link>
                </>
                }
              </div>
            </>    
          }      
        </div>
      </div>
    </div>
  );
}
