import { MetaFunction, ActionFunction, Form, redirect, useActionData, useLoaderData, useTransition, Link } from "remix";
import { useState } from "react"

import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";


export async function loader({ request }: any) {
 
  let url = new URL(request.url);
  let projectId = url.searchParams.get("projectId"); //console.log(projectId);

  const data: any = await getUserSession(request)
  //console.log('SESSION: ', data)

  const product = await Printbox.getProductdetails(projectId) 
    //console.log("product details:",product)
  const prod=product.params;

return {
      ...data,
      ...prod,
      product,
      projectId
    }

}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();  console.log('dsfd',formData);  

  const projectId = formData.get("project_id");
  const price_gross = formData.get("total");
  const page_count = formData.get("num_of_pages");

  const response = await Printbox.getProductdetails(projectId, price_gross,page_count) 

  console.log(response);

  return redirect(`/orders/delivery-details`);


 
}


export default function SendToPrinters() {

  const data = useLoaderData(); console.log('data:-', data);
  const [totalQty, setQty] = useState("1");
  //console.log('new_session',data)
  //console.log(data.is_subscribed)

  return (
      <div className="df justify-content-center my3">
        <div className="w100 mw31">

         <Form method="post"> 

          <div className="tc">
            <h2>Send to the printers</h2>
            <p className="send">Template: {data.product.product.name}</p>
            <p className="send">Project name: {data.product.name}</p>
            <p className="send">Size:  {data[0].attribute_values.size}</p>
            <p className="send">No. of pages:  {data[0].page_count} </p>
            <p className="send"><b>
                  <label> Choose your quantity
                    <select onChange={(e)=> setQty(e.target.value)} className="drop">  
                      <option value="1">1</option>     
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                    </select>
                  </label>
            </b></p> 

            <p>
                <input type="checkbox" /> 
                <label className="mt1">Confirm you have read our terms and conditions</label>
            </p>

            <div className="df justify-content-center b p2 br2">
              <div className="w100 mw25">

                  <input type="hidden" name="project_id" value={data.projectId} />
                  <input type="hidden" name="num_of_pages" value="200"/>
                  <input type="hidden" name="total" value={data[0].price_gross} />



                <div>
                  <Link to={{ pathname: `/orders/success?projectId=${data.projectId}` }}  className="btn grey printer">Back</Link>
                  <button type="submit" className="btn green printer">Pay £{JSON.parse(totalQty)*data[0].price_gross}</button>
                  <div className="f1 dark">
                    <p className="drk">You will be redirected to our payments provider Stripe.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          </Form>

        </div>
      </div>
  );
}
