import {
  Form,
  json,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData
} from "remix";
import type { LinksFunction } from "remix";

import fontStylesUrl from "~/styles/fonts.css";
import globalStylesUrl from "~/styles/global.css";
import { getUserSession } from "./sessions";

import { getProfile } from "~/profile";
import { getSchoolData } from "~/profile";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontStylesUrl },
    { rel: "stylesheet", href: globalStylesUrl }
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      <Layout>
        <div className="tc my3">
          <h1>Oh no!</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="tc my3">
          <h1>
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </div>
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/images/pressclub-fav.png" sizes="16x16" type="image/png"/>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {/* <ScrollRestoration /> */}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <script crossOrigin="anonymous" src="https://js-cdn.getprintbox.com/init/pressclub/init.min.js"></script>
      </body>
    </html>
  );
}

export async function loader({ request }: any) {
  const user = await getUserSession(request);
  const pathName = new URL(request.url).pathname;

  let school_name = '';

  if(user)
  {
      // if subscribed, get profile so we can get orders
      const profile: any = await getProfile(user.id)

      if(profile && profile.data && profile.data[0] && profile.data[0]?.school) {
        // Get school details
        const school = await getSchoolData(profile.data[0]?.school);
        school_name = school && school.data && school.data[0] && school.data[0].name ? school.data[0].name : "";
      }

  }

  return {
    user: user,
    school_name: school_name,
    ENV: {
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
    },
    path_name: pathName
  }
}

function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData();

  return (
    <>
      <header className="px2 relative">
        <div className="df justify-content-between align-items-center relative z2 mx--height-175">
          <div className="header-left">
            <h1 className="kingsthings m0 black">
              <Link to="/" className="logo">
                <img src="/images/pressclub-logo.png" alt="pressclub-logo"></img>
              </Link>
            </h1>
            {data?.user?.id ?
              <>
              <a href="/" className="home__btn">Home</a>
              </>:
              <></>
            }
          </div>
          <nav>
            <ul className="list-style-none m0 p0 df">
              {data?.user?.id ?

                <>
                <li className="myaccount">
                    <Link to="/myaccount/myaccount">My account</Link>
                </li>

                <li>
                  <Form action="/auth/logout" method="post">
                    <button type="submit">
                      Sign out
                    </button>
                  </Form>
                </li> </>:
                <>
                  <li className="ml1">
                    <Link to="/auth/register" className="subscribe__btn">Subscribe</Link>
                  </li>
                </>}
            </ul>

            {data?.school_name?
                 <>
                  <div className="Profile"> <span> {data.school_name} </span> </div></>:
                  <> </>


            }

          </nav>
        </div>
        <div className="bg-torn-paper"></div>
      </header>
      <div>
        <div>{children}</div>
      </div>
      <footer className="p3 tc">
        <div className="footer-contentWrap">
          <div>
            <span className="kingsthings">All enquiries please contact:</span>
          </div>
          <div>
            <span className="kingsthings">Jo McNeill mob 07544 332230</span>
          </div>
          <div>
            <span className="kingsthings">email jo.pressclub@gmail.com</span>
          </div>
          <div className="footer-terms-privacy">
            <a href="https://www.pressclub.org.uk/terms-and-conditions" target="_blank">Terms & conditions</a>
            <a href="https://www.pressclub.org.uk/privacy-policy" target="_blank">Privacy Policy</a>
          </div>
        </div>        
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${data ? JSON.stringify(
            data.ENV
          ) : {}}`
        }}
      />
    </>
  )
}
