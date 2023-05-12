import { MetaFunction, redirect, useLoaderData } from "remix";
import { getUserSession } from "~/sessions";
import Printbox from "~/utils/printbox";
import { updateProfile } from "~/profile";
import { getPriceFormulaByNameCode } from "~/price-formula";

export async function loader({ request }: any) {
  const data: any = await getUserSession(request);
  const projectId = data.ordered_project_id;
  const quantity = data.ordered_quantity;

  const projectDetail = await Printbox.getProjectDetail(projectId);

  if (projectDetail.id == 'not_found') {
    return redirect("/");
  }

  if (!projectDetail.order) {
    // Create order on Printbox
    const order = await Printbox.createOrder(data.customer_id, [
      {
        project_id: projectId,
        quantity: quantity,
      },
    ]);

    console.log('order create response:',order);

    if (order.number) {
      // Mark order as paid on Printbox
      const updateOrder = await Printbox.setOrderAsPaid(order.number);

      // Update profile with order number
      const profile = await updateProfile(data.id, {
        orders: [order.number]
      });

      const priceFormula = await getPriceFormulaByNameCode(data.ordered_name_code);
      const actualPrice = priceFormula.data[0].set_up_price + priceFormula.data[0].packing_price + ((projectDetail.page_count + 2) * priceFormula.data[0].per_page_price * data.ordered_quantity)
      const p = Math.pow(10, 2);
      const n = (actualPrice * p) * (1 + Number.EPSILON);
      //const orderAmount = new Intl.NumberFormat('en-gb', { maximumSignificantDigits: 3 }).format(Math.round(n) / p);
      const orderAmount = new Intl.NumberFormat('en-gb', { style:'currency',currency:'GBP' }).format(Math.round(n) / p);

      const product = await Printbox.getProductdetails(projectId)
      const prod = product.params;
      const size = prod[0].attribute_values.size;

      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      var message = 'Hi '+data.school_name+',<br><br>';
      message +=  'Your order was successfully placed.<br><br>';
      message +=  'Details are provided below:<br>';
      message +=  'Order #: '+order.number+'<br>';
      message +=  'Quantity: '+data.ordered_quantity+'<br>';
      message +=  'Size: '+size+'<br>';
      message +=  'Amount: '+orderAmount+'<br><br>';
      message +=  'You will receive another email shortly with a link to download the PDF.<br><br>';      
      message +=  'Regards,<br>Team Pressclub';

      const msg = {
        to: data.email,
        from: process.env.FROM_EMAIL,
        subject: 'Pressclub - Stripe payment received',
        html: message,
      };
      console.log('confirm-order-msg',msg);
      sgMail.send(msg)
      .then(() => console.log('Mail sent successfully to '+data.email))
      .catch(error => console.error(error.toString()));      

      return redirect("/orders/delivery-details");
    } else {
      return redirect("/orders/order-failed");
    }
  } else {
    // Mark order as paid on Printbox
    const updateOrder = await Printbox.setOrderAsPaid(projectDetail.order.number);
    return redirect("/orders/delivery-details");
  }

  return data;
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function index() {
  const data = useLoaderData();
  return null;
}
