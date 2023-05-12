import { MetaFunction, Link, redirect, useLoaderData } from "remix";
import { updateProfile } from "~/profile";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { getCategory } from "~/price-formula";

export async function loader({ request }: any) {
  let url = new URL(request.url);
  let projectId = url.searchParams.get("projectId");

  const data: any = await getUserSession(request)
  console.log('SESSION: ', data)

  const projectDetail = await Printbox.getProjectDetail(projectId);
  console.log('projectDetail: ',projectDetail);
  if (projectDetail.id == 'not_found') {
    return redirect("/");
  }

  const product = await Printbox.getProductdetails(projectId)
  const prod = product.params;

  const OrderedProduct = await Printbox.getProduct(product.product.id);
 
  const categoryDetail = await getCategory(OrderedProduct.categories[0]);
  let isPriceFormula = false;
  if (categoryDetail.data[0]) {
    isPriceFormula = true;
  }

  return {
    ...data,
    projectId: projectId,
    isPriceFormula: isPriceFormula
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function OrderSuccess() {
  const data = useLoaderData(); 
  console.log('data:-', data);

  const confirmOrder = async (event: any, projectId: any, which: any) => {
    event.preventDefault();

    let message = '';
    if (which == 'printer') {
       message = 'Please note that you could not edit the project anymore after making the payment. Are you sure to continue?';
    } else {
       message = 'Please keep in mind that you will no longer be able to edit the project. Are you sure to continue?';
    }
    if (confirm(message)) {
      if (which == 'printer') {
        location.href = '/orders/send-to-printers?projectId='+projectId;
      } else {
        location.href = '/orders/download-pdf?projectId='+projectId;
      }
    }     
  };

  const confirmdemoOrder = async (event: any, projectId: any, which: any) => {
    event.preventDefault();
     
      if (which == 'printer') {
        location.href = '/orders/send-to-printers?projectId='+projectId;
      } else {
        location.href = '/orders/download-pdf?projectId='+projectId;
      }  
  };

  let message = '';
  if (data.is_subscribed && data.isPriceFormula) {
    message = 'What would you like to do with your newspaper?';
  } else {
    message = 'This is a demo newspaper.<br>Demo newspaper is not printable and could only download as PDF.';
  }

  return (
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">

          {data?.is_subscribed ?

          <>
          <h2>Newspaper order successful!</h2>
          <p dangerouslySetInnerHTML={{__html: message}}></p>
          </>:
          <>
          <h2 className="kingsthings">What would you like to do with your project?</h2>
          <p className="kingsthings">Sending to printers is only available to subscribers</p>
          </>}

          {data?.is_subscribed ?

          <>

          <div className="my3">
            <Link to='/' onClick={event => confirmOrder(event, data.projectId, 'printer')} className={`${(data.is_subscribed && data.isPriceFormula) ? "btn green" : "btn grey disabled-link"}`}>Send to printers</Link>
            <div className="my1 kingsthings">or</div>
            <Link to='/' onClick={event => confirmOrder(event, data.projectId, 'pdf')} className="btn teal">Download as PDF</Link>
          </div>

          </>:
          <>

          <div className="my3">
            <Link to='/' onClick={event => confirmdemoOrder(event, data.projectId, 'printer')} className={`${data.is_subscribed ? "btn green" : "btn grey disabled-link"}`}>Send to printers</Link>
            <div className="my1 kingsthings">or</div>
            <Link to='/' onClick={event => confirmdemoOrder(event, data.projectId, 'pdf')} className="btn teal">Download as PDF</Link>
          </div>

          </>}
        </div>
      </div>
    </div>
  );
}
