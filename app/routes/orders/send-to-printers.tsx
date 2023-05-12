import { MetaFunction, redirect, useActionData, useLoaderData, useTransition, Link } from "remix";
import { useState } from "react";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import Modal from "~/components/modal";
import { getPriceFormulaByNameCode } from "~/price-formula";
import { getCategory } from "~/price-formula";
import { getQuantitiesByNameCode } from "~/price-formula";

export async function loader({ request }: any) {
  const data: any = await getUserSession(request)
  //console.log('SESSION: ', data)

  if (!data.is_subscribed) {
    return redirect("/");
  }

  let url = new URL(request.url);
  let projectId = url.searchParams.get("projectId");  

  const product = await Printbox.getProductdetails(projectId)
  const prod = product.params;

  const OrderedProduct = await Printbox.getProduct(product.product.id);
 
  const categoryDetail = await getCategory(OrderedProduct.categories[0]);
  const priceFormula = await getPriceFormulaByNameCode(categoryDetail.data[0].price_formula_name_code);
  const categoryQuantities = await getQuantitiesByNameCode(categoryDetail.data[0].price_formula_name_code);
console.log('categoryQuantities:', categoryQuantities);
  return {
    ...data,
    ...prod,
    product,
    projectId,
    priceFormula,
    categoryQuantities
  }

}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {
  const data = useLoaderData();

  const [totalQty, setQty] = useState("1");
  const [openModal, setopenModal] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [agree, setAgree] = useState(false);

  const total_pages = data[0].page_count;

  const actualPrice = data.priceFormula.data[0].set_up_price + data.priceFormula.data[0].packing_price + (JSON.parse(totalQty) * total_pages * data.priceFormula.data[0].per_page_price);
  const price = setPrice(actualPrice, 2);

  function setPrice(actualPrice, decimalPlaces) {    
    const p = Math.pow(10, decimalPlaces);
    const n = (actualPrice * p) * (1 + Number.EPSILON);
    return Math.round(n) / p;
  }

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  const checkEdit = (event: any, projectId: any, nameCode: any) => {
    event.preventDefault();
    
    //console.log('pages-', data[0].page_count)
    var pages = data[0].page_count;
    if (pages % 4 == 0) { //if multiple of 4
      location.href = "/orders/set-session?project_id="+projectId+'&quantity='+totalQty+'&name_code='+nameCode;
     } else {
      setopenModal(true)
      setProjectId(projectId)
    }

  };
  
  const confirmEdit = (projectId: any) => {
    setopenModal(false)
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/projects/lockproject?project_id=" + projectId, true);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        location.href = '/products#&step=editor&projectId=' + projectId;
      }
    }

    xhttp.send();
  }

  const cancelEdit = (projectId: any) => {
    setopenModal(false);
    location.href = 'success?projectId=' + projectId;
  }  

  return (
    <div className="df justify-content-center my3">
      <div className="w100 mw31">

        <div className="tc">
        {!data.priceFormula.data[0]?
        <>
            <h1>Warning!</h1>
            <h3>Sorry, you cannot book this product now. Price formula is missing</h3>
        </>:<>
          <Modal 
            isOpen={openModal}
            // onClose={() => closeModal()}
          >
            <h1>Warning!</h1>
            <h3>The number of pages in your project is not a multiple of four. Please go back and adjust the number of pages before sending to the printers</h3>
            <div>
                <h1 onClick={() => confirmEdit(projectId)}>OK</h1>
                <h1 onClick={() => cancelEdit(projectId)}>Cancel</h1>
            </div>
          </Modal>
            <h2>Send to the printers</h2>
            <p className="send">Template: {data.product.product.name}</p>
            <p className="send">Project name: {data.product.name}</p>
            <p className="send">Size:  {data[0].attribute_values.size}</p>
            <p className="send">No. of pages:  {data[0].page_count} </p>
            <p className="send"><b>
              <label> Choose your quantity
                <select onChange={(e) => setQty(e.target.value)} className="drop">
                  {data.categoryQuantities.data.map((category_quantity, index) => (  
                    <option value={category_quantity.quantity}>{category_quantity.quantity}</option>
                  ))}  
                </select>
              </label>
            </b></p>

            <h2>Price formula</h2>
            <p className="send">Set up price : £{data.priceFormula.data[0].set_up_price}</p>
            <p className="send">Packing & DHL Courier price : £{data.priceFormula.data[0].packing_price}</p>
            <p className="send">Per Page price : £{data.priceFormula.data[0].per_page_price}</p>

            <p>
              <input type="checkbox" id="agree" onChange={checkboxHandler} />
              <label className="mt1">Confirm you have read our terms and conditions</label>
            </p>

            <div className="df justify-content-center b p2 br2">
              <div className="w100 mw25">

                <input type="hidden" name="project_id" value={data.projectId} />
                <input type="hidden" name="num_of_pages" value="200" />
                <input type="hidden" name="total" value={data[0].price_gross} />

                <div>
                  <Link to={{ pathname: `/orders/success?projectId=${data.projectId}` }} className="btn grey printer">Back</Link>
                  <a href="#" onClick={event => checkEdit(event, data.projectId, data.priceFormula.data[0].name_code)}>
                    <button type="submit" disabled={!agree} className="btn green printer">Pay £{price}</button></a>
                  <div className="f1 dark">
                    <p className="drk">You will be redirected to our payments provider Stripe.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
          }
        </div>
      </div>
    </div>
  );
}