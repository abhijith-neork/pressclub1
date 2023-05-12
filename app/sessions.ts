import { createCookieSessionStorage, redirect } from "remix";

const storage = createCookieSessionStorage({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "printbox__session",
    expires: new Date(Date.now() + 60),
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: process.env.NODE_ENV === "production",
  },
});

export function getSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getSession(request);
  const userId = session.get("id");

  if (!userId || typeof userId !== "string") return null;

  return userId;
}

export async function getUserSession(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getSession(request);

  const id = session.get("id");
  const email = session.get("email");
  const customer_id = session.get("customer_id");
  const session_id = session.get("session_id");
  const is_subscribed = session.get("is_subscribed");
  const access_token = session.get("access_token");
  const ordered_project_id = session.get("ordered_project_id");
  const ordered_quantity = session.get("ordered_quantity");
  const ordered_name_code = session.get("ordered_name_code");
  const edit_product_family_id = session.get("edit_product_family_id");
  const school_name = session.get("school_name");
  
  const authRoutes = [
    "/auth/signin",
    "/auth/register",
    "/auth/reset-password",
    "/auth/forgot-password",
    "/auth/email-confirmation",
  ];

  const subscriptionRoutes = [
    "/orders/send-to-printer",
    "/myaccount/myaccount",
    "/myaccount/update-school-details",
    "/myaccount/change-password"
  ];

  console.log('demo: ', new URL(request.url).pathname);

  if (!id || typeof id !== "string") {
    if (new URL(request.url).pathname === "/demo/freedemoeditor" || 
    new URL(request.url).pathname === "/orders/success" || 
    new URL(request.url).pathname === "/orders/download-pdf" ||
    new URL(request.url).pathname === "/subscription-reminder" ||
    new URL(request.url).pathname === "/products/redirect-product-card" ||
    new URL(request.url).pathname === "/demo/redirect-product-list" ||
    new URL(request.url).pathname === "/terms-and-conditions" ||
    new URL(request.url).pathname === "/privacy-policy"
    ) {
      return null;
    }    
    if (!authRoutes.includes(new URL(request.url).pathname)) {
      const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
      throw redirect(`/auth/signin?${searchParams}`);
    }

    return access_token ? {access_token} : null;
  } else {
    if (subscriptionRoutes.includes(new URL(request.url).pathname)) {
      if (!is_subscribed) {
        const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
        return redirect(`/subscribe?${searchParams}`);
      }
    }

    if (authRoutes.includes(new URL(request.url).pathname)) {
      return redirect("/");
    }

    return { id, email, customer_id, session_id, is_subscribed, ordered_project_id, ordered_quantity, ordered_name_code, edit_product_family_id, school_name };
  }
}

export async function createUserSession(
  sessionData: any,
  redirectTo: string = "/"
) {
  if (!sessionData) {
    throw new Error("Session data required");
  }

  const session = await storage.getSession();
console.log('sessionData: ', sessionData);
  for (let key of Object.keys(sessionData)) {
    session.set(key, sessionData[key]);
  }

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

export async function destroyUserSession(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));

  return redirect("/auth/signin", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
