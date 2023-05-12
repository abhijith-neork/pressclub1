import { MetaFunction, useLoaderData } from "remix";
import { getUserSession } from "~/sessions";

export async function loader({ request }: any) {
  const data: any = await getUserSession(request)
  console.log('SESSION: ', data)

  return {
    ...data
  }
}

export let meta: MetaFunction = () => {
  return {
    title: "Pressclub",
    description: "Welcome to Pressclub"
  };
};

export default function OrderSuccess() {
  const data = useLoaderData(); console.log('data:-', data);  

  return (
    <div className="df justify-content-center my3">
      <div className="w100">
        <div className="tc">
          <p>Sorry, your order could not be placed.<br/>Please contact our help desk.</p>          
        </div>
      </div>
    </div>
  );
}
