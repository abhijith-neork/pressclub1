import { MetaFunction, useLoaderData} from "remix";
import { getUserSession } from "~/sessions";
import Product from "~/utils/product";

export async function loader({ request }: any) {
    const session = await getUserSession(request);

    const demo_products = await Product.getDemoProducts();

    const products = [];

    if (demo_products) {
        var products_data = demo_products.data;
        for (var i in products_data) {            
            products.push(products_data[i]);
        }
    }    

    return {
        session,
        products
    };
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function Index() {  
  const data = useLoaderData();
  const products = data.products;  

  const createProject = (event, productId) => {
    location.href = '/demo/editor#&step=product_card&productId='+productId+'&category=null'; 
    event.preventDefault();
  };

  return (
    <div className="justify-content-center my3">
        <div className="w100">
            <div className="tc">
              {data.products.length > 0? 
              <>
                <h2>Choose a product to edit</h2>
                <div className="my3">
                  <div className="project_list_flex my3">
                  {data.products.map((product) => (                                 
                    <div className="project_list_wrapper" id={product.product_id} key={product.id}>                        
                      <a href="#" onClick={event => createProject(event, product.product_id)}>
                        <div>
                          <img className="product-list-image" src={product.product_image} alt="Printing Press Newspaper - pp_newspaper_stack" ></img>  
                        </div>
                        <div>
                          {product.product_name}
                        </div>
                      </a>                      
                    </div>
                    ))}                    
                  </div>  
                </div>
              </> : <>
                <h2>No demo products available</h2>
              </>
              }
            </div>
        </div>
    </div>
  );
}
