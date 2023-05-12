import { MetaFunction, useLoaderData, Scripts, redirect } from "remix";
import { PrintboxDemoEmbed } from "~/components/printboxdemo";
import { getUserSession } from "~/sessions";
import { useEffect } from "react";

export async function loader({ request }: any) {
  const session = await getUserSession(request);
  console.log('session1:',session);
  const productFamilyId = (session && session.edit_product_family_id) ? session.edit_product_family_id : process.env.PRODUCT_ID_DEMO;

  return  { ...session, productFamilyId }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {  
  const session = useLoaderData(); console.log('new productFamilyId',session.productFamilyId);

  useEffect(() => {
    var editorBackButtonInterval = null;
    
    function redirectToProductList() {
      var category = '';
      var categoryPath = '';
      var productId = '';
      var size = '';
      var split_data = '';    

      var url = window.location.href;
      var url_parts = url.split('&');
      for (var i in url_parts) {
        split_data = url_parts[i].split('=');  
              
        if (split_data[0] == 'category') {
          category = split_data[1];
        } else if (split_data[0] == 'categoryPath') {
          categoryPath = split_data[1];
        } else if (split_data[0] == 'productId') {
          productId = split_data[1];
        } else if (split_data[0] == 'size') {
          size = split_data[1];
        }
      }     
      var redirect_url = '/products/redirect-product-card?category='+category+'&categoryPath='+categoryPath+'&productId='+productId+'&size='+size+'&demo=1';
      window.location.href = redirect_url;
    }

    function setEditorBackButton() {
      var iframe = document.getElementById("app_iframe");
      if (iframe) {
        var span_elemnts = iframe.contentWindow.document.getElementsByClassName('ModalsHeaderTitle');
        if (span_elemnts.length) {
          var title = span_elemnts[0].innerHTML;
          if (title == 'Do you want to leave this site?') {
            var button_elemnts = iframe.contentWindow.document.querySelectorAll('[data-sid="confirmationOk"]');

            if (button_elemnts.length) {
              button_elemnts.forEach((userItem) => {
                var old_element = userItem;
                var new_element = old_element.cloneNode(true);
                old_element.parentNode.replaceChild(new_element, old_element);

                new_element.addEventListener("click", redirectToProductList);            
              });  
            }
          }
        }
      }
    }
    editorBackButtonInterval = setInterval(setEditorBackButton, 1000);
  }, []);

  return (
    <div>
      <main>
        { <PrintboxDemoEmbed  printboxSessionId={session?session.session_id:null} productFamilyId={session.productFamilyId}/> }
      </main>
    </div>
  );
}
