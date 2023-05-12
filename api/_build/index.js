var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    exports.createCookie = node.createCookie;
    exports.createCookieSessionStorage = node.createCookieSessionStorage;
    exports.createFileSessionStorage = node.createFileSessionStorage;
    exports.createMemorySessionStorage = node.createMemorySessionStorage;
    exports.createSessionStorage = node.createSessionStorage;
    exports.unstable_createFileUploadHandler = node.unstable_createFileUploadHandler;
    exports.unstable_createMemoryUploadHandler = node.unstable_createMemoryUploadHandler;
    exports.unstable_parseMultipartFormData = node.unstable_parseMultipartFormData;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    exports.createSession = serverRuntime.createSession;
    exports.isCookie = serverRuntime.isCookie;
    exports.isSession = serverRuntime.isSession;
    exports.json = serverRuntime.json;
    exports.redirect = serverRuntime.redirect;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    exports.Form = react.Form;
    exports.Link = react.Link;
    exports.Links = react.Links;
    exports.LiveReload = react.LiveReload;
    exports.Meta = react.Meta;
    exports.NavLink = react.NavLink;
    exports.PrefetchPageLinks = react.PrefetchPageLinks;
    exports.RemixBrowser = react.RemixBrowser;
    exports.RemixServer = react.RemixServer;
    exports.Scripts = react.Scripts;
    exports.ScrollRestoration = react.ScrollRestoration;
    exports.useActionData = react.useActionData;
    exports.useBeforeUnload = react.useBeforeUnload;
    exports.useCatch = react.useCatch;
    exports.useFetcher = react.useFetcher;
    exports.useFetchers = react.useFetchers;
    exports.useFormAction = react.useFormAction;
    exports.useLoaderData = react.useLoaderData;
    exports.useMatches = react.useMatches;
    exports.useSubmit = react.useSubmit;
    exports.useTransition = react.useTransition;
    exports.Outlet = react.Outlet;
    exports.useHref = react.useHref;
    exports.useLocation = react.useLocation;
    exports.useNavigate = react.useNavigate;
    exports.useNavigationType = react.useNavigationType;
    exports.useOutlet = react.useOutlet;
    exports.useOutletContext = react.useOutletContext;
    exports.useParams = react.useParams;
    exports.useResolvedPath = react.useResolvedPath;
    exports.useSearchParams = react.useSearchParams;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix3 = __toESM(require_dist());

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-YK6BPWHE.css";

// app/styles/global.css
var global_default = "/build/_assets/global-RG5QECJP.css";

// app/sessions.ts
var import_remix2 = __toESM(require_dist()), storage = (0, import_remix2.createCookieSessionStorage)({
  // a Cookie from `createCookie` or the CookieOptions to create one
  cookie: {
    name: "printbox__session",
    expires: new Date(Date.now() + 60),
    httpOnly: !0,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret1"],
    secure: !1
  }
});
function getSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserSession(request, redirectTo = new URL(request.url).pathname) {
  let session = await getSession(request), id = session.get("id"), email = session.get("email"), customer_id = session.get("customer_id"), session_id = session.get("session_id"), is_subscribed = session.get("is_subscribed"), access_token = session.get("access_token"), ordered_project_id = session.get("ordered_project_id"), ordered_quantity = session.get("ordered_quantity"), ordered_name_code = session.get("ordered_name_code"), edit_product_family_id = session.get("edit_product_family_id"), school_name = session.get("school_name"), authRoutes = [
    "/auth/signin",
    "/auth/register",
    "/auth/reset-password",
    "/auth/forgot-password",
    "/auth/email-confirmation"
  ], subscriptionRoutes = [
    "/orders/send-to-printer",
    "/myaccount/myaccount",
    "/myaccount/update-school-details",
    "/myaccount/change-password"
  ];
  if (console.log("demo: ", new URL(request.url).pathname), !id || typeof id != "string") {
    if (new URL(request.url).pathname === "/demo/freedemoeditor" || new URL(request.url).pathname === "/orders/success" || new URL(request.url).pathname === "/orders/download-pdf" || new URL(request.url).pathname === "/subscription-reminder" || new URL(request.url).pathname === "/products/redirect-product-card" || new URL(request.url).pathname === "/demo/redirect-product-list" || new URL(request.url).pathname === "/terms-and-conditions" || new URL(request.url).pathname === "/privacy-policy")
      return null;
    if (!authRoutes.includes(new URL(request.url).pathname)) {
      let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
      throw (0, import_remix2.redirect)(`/auth/signin?${searchParams}`);
    }
    return access_token ? { access_token } : null;
  } else {
    if (subscriptionRoutes.includes(new URL(request.url).pathname) && !is_subscribed) {
      let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
      return (0, import_remix2.redirect)(`/subscribe?${searchParams}`);
    }
    return authRoutes.includes(new URL(request.url).pathname) ? (0, import_remix2.redirect)("/") : { id, email, customer_id, session_id, is_subscribed, ordered_project_id, ordered_quantity, ordered_name_code, edit_product_family_id, school_name };
  }
}
async function createUserSession(sessionData, redirectTo = "/") {
  if (!sessionData)
    throw new Error("Session data required");
  let session = await storage.getSession();
  console.log("sessionData: ", sessionData);
  for (let key of Object.keys(sessionData))
    session.set(key, sessionData[key]);
  return (0, import_remix2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function destroyUserSession(request) {
  let session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix2.redirect)("/auth/signin", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/utils/supabase.ts
var import_supabase_js = require("@supabase/supabase-js"), supabase = (0, import_supabase_js.createClient)(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
), supabase_default = supabase;

// app/profile.ts
async function getProfile(userId) {
  try {
    return await supabase_default.from("profiles").select("*").match({ id: userId });
  } catch (err) {
    return console.error(err), null;
  }
}
async function getSchoolData(userId) {
  try {
    return await supabase_default.from("schools").select("*").match({ id: userId });
  } catch (err) {
    return console.error(err), null;
  }
}
async function updateSchoolData(data) {
  console.log(data);
  try {
    return await supabase_default.from("schools").upsert(data);
  } catch (err) {
    return console.error(err), null;
  }
}
async function updateProfile(userId, data) {
  try {
    return await supabase_default.from("profiles").update(data).match({ id: userId });
  } catch (err) {
    return console.error(err), null;
  }
}
async function getCurrentPassword(current_plain_password, new_plain_password, user_email) {
  console.log("cp", current_plain_password), console.log("user_email", user_email);
  try {
    return await supabase_default.rpc("update_user_password", {
      new_plain_password,
      current_plain_password,
      user_email
    });
  } catch (err) {
    return console.error(err), null;
  }
}
async function getSubscriptionReminders(date) {
  try {
    return await supabase_default.from("profiles").select("*").eq("subscription_end_date", date);
  } catch (err) {
    return console.error(err), null;
  }
}
async function getProfileByPrintboxCustomerId(customerId) {
  try {
    return await supabase_default.from("profiles").select("*").match({ printbox_customer_id: customerId });
  } catch (err) {
    return console.error(err), null;
  }
}

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: fonts_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tc my3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Oh no!" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "tc my3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    message
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "icon", href: "/images/pressclub-fav.png", sizes: "16x16", type: "image/png" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 52
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("script", { crossOrigin: "anonymous", src: "https://js-cdn.getprintbox.com/init/pressclub/init.min.js" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  var _a, _b;
  let user = await getUserSession(request), pathName = new URL(request.url).pathname, school_name = "";
  if (user) {
    let profile = await getProfile(user.id);
    if (profile && profile.data && profile.data[0] && ((_a = profile.data[0]) != null && _a.school)) {
      let school = await getSchoolData((_b = profile.data[0]) == null ? void 0 : _b.school);
      school_name = school && school.data && school.data[0] && school.data[0].name ? school.data[0].name : "";
    }
  }
  return {
    user,
    school_name,
    ENV: {
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
    },
    path_name: pathName
  };
}
function Layout({ children }) {
  var _a, _b;
  let data = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "px2 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "df justify-content-between align-items-center relative z2 mx--height-175", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "header-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "kingsthings m0 black", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/", className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/pressclub-logo.png", alt: "pressclub-logo" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 157,
            columnNumber: 13
          }, this),
          (_a = data == null ? void 0 : data.user) != null && _a.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "home__btn", children: "Home" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 166,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-style-none m0 p0 df", children: (_b = data == null ? void 0 : data.user) != null && _b.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "myaccount", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/myaccount/myaccount", children: "My account" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Form, { action: "/auth/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", children: "Sign out" }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 179,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 178,
              columnNumber: 17
            }, this),
            " "
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "ml1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix3.Link, { to: "/auth/register", className: "subscribe__btn", children: "Subscribe" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 187,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 186,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          data != null && data.school_name ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "Profile", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: [
              " ",
              data.school_name,
              " "
            ] }, void 0, !0, {
              fileName: "app/root.tsx",
              lineNumber: 194,
              columnNumber: 45
            }, this),
            " "
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 194,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 193,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: " " }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 195,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-torn-paper" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 205,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "p3 tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-contentWrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "kingsthings", children: "All enquiries please contact:" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 209,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "kingsthings", children: "Jo McNeill mob 07544 332230" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "kingsthings", children: "email jo.pressclub@gmail.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "footer-terms-privacy", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.pressclub.org.uk/terms-and-conditions", target: "_blank", children: "Terms & conditions" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://www.pressclub.org.uk/privacy-policy", target: "_blank", children: "Privacy Policy" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 218,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `window.ENV = ${data ? JSON.stringify(
            data.ENV
          ) : {}}`
        }
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 225,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 153,
    columnNumber: 5
  }, this);
}

// app/routes/myaccount/send-cancel-subscription.tsx
var send_cancel_subscription_exports = {};
__export(send_cancel_subscription_exports, {
  default: () => index,
  loader: () => loader2,
  meta: () => meta
});
var import_remix4 = __toESM(require_dist());
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  let session = await getUserSession(request);
  console.log("SESSION: ", session);
  let generateRandomString = (myLength) => {
    let chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    return Array.from(
      { length: myLength },
      (v, k) => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }, firstFourCharcters = generateRandomString(4), lastFourCharacters = generateRandomString(4), codeToEncode = firstFourCharcters + "-" + session.id + "-" + lastFourCharacters, code_f = Buffer.from(codeToEncode).toString("base64"), code_s = Buffer.from(session.email).toString("base64"), site_url = process.env.SITE_URL + "cancel-subscription?code_f=" + code_f + "&code_s=" + code_s;
  console.log("urllllllllllll..", site_url), console.log("cancellation link:", site_url);
  let sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  var message = "Hi,<br><br>";
  message += "Please confirm your subscription cancellation by clicking on the link below.<br><br>", message += '<a href="' + site_url + code_f + "&code_s=" + code_s + '">Confirm cancellation</a><br><br>', message += "Regards,<br>Team Pressclub";
  let msg = {
    to: session.email,
    from: process.env.FROM_EMAIL,
    subject: "Pressclub - Confirm cancellation",
    html: message
  }, result = sgMail.send(msg);
  return !0;
}
var meta = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index() {
  let data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "An email has been sent to confirm your subscription cancellation" }, void 0, !1, {
    fileName: "app/routes/myaccount/send-cancel-subscription.tsx",
    lineNumber: 66,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/send-cancel-subscription.tsx",
    lineNumber: 65,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/send-cancel-subscription.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/send-cancel-subscription.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

// app/routes/myaccount/update-school-details.tsx
var update_school_details_exports = {};
__export(update_school_details_exports, {
  action: () => action,
  default: () => UpdateAccount,
  loader: () => loader3,
  meta: () => meta2
});
var import_remix5 = __toESM(require_dist()), import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_react = require("react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  var _a;
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.id)
    return session;
  let profile = await getProfile(session.id);
  console.log("PROFILE: ", profile);
  let school = await getSchoolData((_a = profile.data[0]) == null ? void 0 : _a.school);
  return {
    ...session,
    school
  };
}
var meta2 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let school_name = formData.get("school_name"), school_postcode = formData.get("school_postcode"), school_address_line_1 = formData.get("school_address_line_1"), school_address_line_2 = formData.get("school_address_line_2"), school_city = formData.get("school_city"), school_county = formData.get("school_county"), errors = {};
  if (school_name || (errors.school_name = !0), school_postcode || (errors.school_postcode = !0), school_address_line_1 || (errors.school_address_line_1 = !0), school_city || (errors.school_city = !0), console.log("errors ============", errors), Object.keys(errors).length)
    return errors;
  (0, import_tiny_invariant.default)(typeof school_name == "string"), (0, import_tiny_invariant.default)(typeof school_postcode == "string"), (0, import_tiny_invariant.default)(typeof school_address_line_1 == "string"), (0, import_tiny_invariant.default)(typeof school_city == "string");
  try {
    let school = {
      id: formData.get("school_id"),
      name: formData.get("school_name"),
      postcode: formData.get("school_postcode"),
      address_line_1: formData.get("school_address_line_1"),
      address_line_2: formData.get("school_address_line_2"),
      city: formData.get("school_city"),
      county: formData.get("school_county")
    };
    console.log("new_school:", school);
    let response = await updateSchoolData(school);
    if (console.log("Supabase school detils update: ", response), response.error)
      return errors.response = response.error.message, errors.status = 1, errors;
    if (response.error == null)
      return errors.response = "Succssfully updated school details", errors.status = 0, errors;
  } catch (err) {
    return console.log(err), errors.response = "Something went wrong", errors;
  }
};
function UpdateAccount() {
  let data = (0, import_remix5.useLoaderData)();
  console.log("Loader:", data.school.data[0]);
  let errors = (0, import_remix5.useActionData)(), transition = (0, import_remix5.useTransition)();
  return console.log(errors == null ? void 0 : errors.status), (0, import_react.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [errors]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mc", children: "Update school details" }, void 0, !1, {
      fileName: "app/routes/myaccount/update-school-details.tsx",
      lineNumber: 142,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/myaccount/update-school-details.tsx",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "my3 red", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/myaccount/update-school-details.tsx",
      lineNumber: 145,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix5.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("fieldset", { className: "my3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("legend", { children: "School details" }, void 0, !1, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Name" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "text",
              name: "school_name",
              defaultValue: data.school.data[0].name
            },
            void 0,
            !1,
            {
              fileName: "app/routes/myaccount/update-school-details.tsx",
              lineNumber: 153,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_name) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt1 red", children: "Name required" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 157,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Postcode" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "text",
              name: "school_postcode",
              defaultValue: data.school.data[0].postcode
            },
            void 0,
            !1,
            {
              fileName: "app/routes/myaccount/update-school-details.tsx",
              lineNumber: 162,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_postcode) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt1 red", children: "Postcode required" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 165,
            columnNumber: 43
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Address Line 1" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "school_address_line_1", defaultValue: data.school.data[0].address_line_1 }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_address_line_1) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt1 red", children: "Address Line 1 required" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 172,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Address Line 2 (optional)" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "school_address_line_2", defaultValue: data.school.data[0].address_line_2 }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "Town/City" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "school_city", defaultValue: data.school.data[0].city }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_city) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt1 red", children: "Town/City required" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 185,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: "County (if applicable)" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "school_county", defaultValue: data.school.data[0].county }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 190,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_county) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt1 red", children: "County required" }, void 0, !1, {
            fileName: "app/routes/myaccount/update-school-details.tsx",
            lineNumber: 192,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "school_id", defaultValue: data.school.data[0].id }, void 0, !1, {
          fileName: "app/routes/myaccount/update-school-details.tsx",
          lineNumber: 194,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/myaccount/update-school-details.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Updating.." : "Update" }, void 0, !1, {
        fileName: "app/routes/myaccount/update-school-details.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/myaccount/update-school-details.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix5.Link, { to: { pathname: "/myaccount/myaccount" }, className: "btn grey printer-new", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/myaccount/update-school-details.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/myaccount/update-school-details.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/myaccount/update-school-details.tsx",
      lineNumber: 147,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/myaccount/update-school-details.tsx",
    lineNumber: 140,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/update-school-details.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/projects/copy-project-free-user.ts
var copy_project_free_user_exports = {};
__export(copy_project_free_user_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_remix6 = __toESM(require_dist());

// app/utils/printbox.ts
var import_dayjs = __toESM(require("dayjs")), crypto = require("crypto"), baseUri = process.env.PRINTBOX_URL, apiKey = process.env.PRINTBOX_API_KEY, secret = process.env.PRINTBOX_SECRET, version = process.env.PRINTBOX_VERSION, Printbox = {
  getCustomer: async function(customerID) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = `/api/ec/customers/${customerID}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getCustomerByEmail: async function(email) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = "/api/ec/customers/", query = `email=${encodeURIComponent(email)}`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  createCustomer: async function(username, email) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = "/api/ec/customers/", payload = JSON.stringify({
      username,
      email
    }), hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  loginCustomer: async function(username, email) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = `/api/ec/customers/${username}/login/`, payload = JSON.stringify({
      username,
      email
    }), hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  createOrder: async function(customer, projects) {
    let number = Math.random().toString().substring(10), version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = "/api/ec/orders/", payload = JSON.stringify({
      number,
      projects,
      customer
    }), hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  setOrderAsPaid: async function(orderNumber) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = `/api/ec/orders/${orderNumber}/paid/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getOrder: async function(orderNumber) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = `/api/ec/orders/${orderNumber}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getProductdetails: async function(uuid) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = `/api/ec/projects/${uuid}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  updateproject: async function(uuid, price_gross, page_count) {
    let number = Math.random().toString().substring(10), version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = `/api/ec/projects/${uuid}/`, payload = JSON.stringify({
      price_gross,
      page_count,
      uuid,
      order_status: "paid"
    }), hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getProjects: async function(customerID) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = "/api/ec/projects/", query = `customer_id=${encodeURIComponent(customerID)}&is_ordered=false`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  deleteProject: async function(uuid) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "DELETE", endpoint = `/api/ec/projects/${uuid}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getProjectDetail: async function(projectID) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = `/api/ec/projects/${projectID}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getProjectsCompleted: async function(customerID) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = "/api/ec/projects/", query = `customer_id=${encodeURIComponent(customerID)}&is_ordered=true`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  copyProject: async function(projectID) {
    let datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "POST", endpoint = `/api/ec/projects/${projectID}/duplicate/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  updateProjectUserid: async function(uuid, customer_id) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "PUT", endpoint = `/api/ec/projects/${uuid}/`, payload = JSON.stringify({
      customer_id
    });
    console.log(payload);
    let hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      },
      body: payload
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  },
  getProduct: async function(id) {
    let version2 = "v3", datetime = (0, import_dayjs.default)(/* @__PURE__ */ new Date()).format("YYYY-MM-DDTHH:mm:ssZ"), method = "GET", endpoint = `/api/ec/products/${id}/`, payload = "", hashedPayload = crypto.createHash("sha256").update(payload).digest("hex"), stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version2}

date;x-version
${hashedPayload}`, generatedSignature = crypto.createHmac("sha256", secret).update(stringToSign).digest("base64");
    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version2,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`
      }
      // body: payload,
    }).then((response) => response.json()).then((json4) => json4).catch((err) => console.error(err));
  }
}, printbox_default = Printbox;

// app/routes/projects/copy-project-free-user.ts
var import_react2 = require("react");
async function loader4({ request }) {
  let session = await getUserSession(request), projectId2 = new URL(request.url).searchParams.get("project_id"), copyProject = await printbox_default.copyProject(projectId2);
  return console.log("giii", copyProject.number), copyProject.number ? {
    ...session,
    projectId: projectId2,
    copyProject
  } : (0, import_remix6.redirect)("/projects/completed?copy=failed");
}
function Index() {
  let data = (0, import_remix6.useLoaderData)();
  return console.log("new session:", data), (0, import_react2.useEffect)(() => {
    window.location.href = "/demo/freedemoeditor#&step=editor&projectId=" + data.copyProject.id;
  }, []), null;
}

// app/routes/products/redirect-product-card.tsx
var redirect_product_card_exports = {};
__export(redirect_product_card_exports, {
  default: () => Index2,
  loader: () => loader5
});
var import_remix7 = __toESM(require_dist());
async function loader5({ request }) {
  let url = new URL(request.url), category = url.searchParams.get("category"), categoryPath = url.searchParams.get("categoryPath"), productId = url.searchParams.get("productId"), size = url.searchParams.get("size"), isDemo = url.searchParams.get("demo"), redirect_url = "";
  return isDemo == 1 ? redirect_url = "/demo/freedemoeditor#&category=" + category + "&step=product_card&categoryPath=" + categoryPath + "&productId=" + productId : redirect_url = "/products#&category=" + category + "&step=product_card&categoryPath=" + categoryPath + "&productId=" + productId, size && (redirect_url += "&size=" + size), (0, import_remix7.redirect)(redirect_url);
}
function Index2() {
  let session = useLoaderData();
  return null;
}

// app/routes/products/redirect-product-list.tsx
var redirect_product_list_exports = {};
__export(redirect_product_list_exports, {
  default: () => Index3,
  loader: () => loader6
});
async function loader6({ request }) {
  let session = await getUserSession(request), url = new URL(request.url), step = url.searchParams.get("step"), categoryPath = url.searchParams.get("categoryPath"), redirect_url = "";
  return !session || !session.is_subscribed ? redirect_url = "/demo/redirect-product-list?step=product_list&categoryPath=" + process.env.CATEGORY_PATH_DEMO : redirect_url = "/products#&step=" + step + "&categoryPath=" + categoryPath, await createUserSession({
    ...session,
    edit_product_family_id: null
  }, redirect_url);
}
function Index3() {
  return null;
}

// app/routes/subscription-already-cancelled.tsx
var subscription_already_cancelled_exports = {};
__export(subscription_already_cancelled_exports, {
  default: () => index2,
  loader: () => loader7
});
var import_remix8 = __toESM(require_dist()), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  return !0;
}
function index2() {
  let data = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: "Your subscription is already cancelled" }, void 0, !1, {
    fileName: "app/routes/subscription-already-cancelled.tsx",
    lineNumber: 22,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-already-cancelled.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-already-cancelled.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-already-cancelled.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/orders/send-to-printers-old.tsx
var send_to_printers_old_exports = {};
__export(send_to_printers_old_exports, {
  action: () => action2,
  default: () => SendToPrinters,
  loader: () => loader8,
  meta: () => meta3
});
var import_remix9 = __toESM(require_dist()), import_react3 = require("react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  let projectId2 = new URL(request.url).searchParams.get("projectId"), data = await getUserSession(request), product = await printbox_default.getProductdetails(projectId2), prod = product.params;
  return {
    ...data,
    ...prod,
    product,
    projectId: projectId2
  };
}
var meta3 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action2 = async ({ request }) => {
  let formData = await request.formData();
  console.log("dsfd", formData);
  let projectId2 = formData.get("project_id"), price_gross = formData.get("total"), page_count = formData.get("num_of_pages"), response = await printbox_default.getProductdetails(projectId2, price_gross, page_count);
  return console.log(response), (0, import_remix9.redirect)("/orders/delivery-details");
};
function SendToPrinters() {
  let data = (0, import_remix9.useLoaderData)();
  console.log("data:-", data);
  let [totalQty, setQty] = (0, import_react3.useState)("1");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w100 mw31", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_remix9.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Send to the printers" }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "send", children: [
      "Template: ",
      data.product.product.name
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "send", children: [
      "Project name: ",
      data.product.name
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "send", children: [
      "Size:  ",
      data[0].attribute_values.size
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "send", children: [
      "No. of pages:  ",
      data[0].page_count,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "send", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
      " Choose your quantity",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("select", { onChange: (e) => setQty(e.target.value), className: "drop", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 76,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "100", children: "100" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 77,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "200", children: "200" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "300", children: "300" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 79,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "400", children: "400" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 80,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "500", children: "500" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 81,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 75,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 74,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 73,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "checkbox" }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "mt1", children: "Confirm you have read our terms and conditions" }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "df justify-content-center b p2 br2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w100 mw25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "project_id", value: data.projectId }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 94,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "num_of_pages", value: "200" }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 95,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "total", value: data[0].price_gross }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 96,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_remix9.Link, { to: { pathname: `/orders/success?projectId=${data.projectId}` }, className: "btn grey printer", children: "Back" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 101,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", className: "btn green printer", children: [
          "Pay \xA3",
          JSON.parse(totalQty) * data[0].price_gross
        ] }, void 0, !0, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 102,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "f1 dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "drk", children: "You will be redirected to our payments provider Stripe." }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers-old.tsx",
          lineNumber: 103,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/send-to-printers-old.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers-old.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/send-to-printers-old.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers-old.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers-old.tsx",
    lineNumber: 63,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers-old.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this);
}

// app/routes/demo/redirect-product-list.tsx
var redirect_product_list_exports2 = {};
__export(redirect_product_list_exports2, {
  default: () => Index4,
  loader: () => loader9
});
var import_remix10 = __toESM(require_dist());
async function loader9({ request }) {
  let session = await getUserSession(request), url = new URL(request.url), step = url.searchParams.get("step"), categoryPath = url.searchParams.get("categoryPath"), redirect_url = "/demo/freedemoeditor#&step=" + step + "&categoryPath=" + categoryPath;
  return (0, import_remix10.redirect)(redirect_url);
}
function Index4() {
  return null;
}

// app/routes/myaccount/change-password.tsx
var change_password_exports = {};
__export(change_password_exports, {
  action: () => action3,
  default: () => UpdateAccount2,
  loader: () => loader10,
  meta: () => meta4
});
var import_remix11 = __toESM(require_dist()), import_react4 = require("react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
async function loader10({ request }) {
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.id)
    return session;
  let profile = await getProfile(session.id);
  return console.log("PROFILE: ", profile.data), {
    ...session,
    profile
  };
}
var meta4 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action3 = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let current_password = formData.get("current_password"), new_password = formData.get("new_password"), confirm_password = formData.get("confirm_password"), errors = {};
  if (current_password || (errors.current_password = !0), new_password || (errors.new_password = !0), confirm_password || (errors.confirm_password = !0), Object.keys(errors).length)
    return errors;
  if (new_password != confirm_password)
    return errors.response = "New password and confirm password should be same.", errors;
  if (new_password == current_password)
    return errors.response = "New password and current password should not be same.", errors;
  try {
    let user_email = formData.get("user_email"), response = await getCurrentPassword(current_password, new_password, user_email);
    return console.log("CURRENT PWD: ", response), response.error ? (errors.response = response.error.message, errors) : (errors.response = "Password Successfully Updated", errors);
  } catch (err) {
    return console.log(err), errors.response = "Something went wrong", errors;
  }
};
function UpdateAccount2() {
  let data = (0, import_remix11.useLoaderData)();
  console.log("data:-", data.id);
  let errors = (0, import_remix11.useActionData)(), transition = (0, import_remix11.useTransition)();
  console.log(errors == null ? void 0 : errors.status);
  let formRef = (0, import_react4.useRef)();
  return console.log(formRef), (0, import_react4.useEffect)(() => {
    var _a;
    (_a = formRef.current) == null || _a.reset();
  }, [errors]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "mc", children: "Change password" }, void 0, !1, {
      fileName: "app/routes/myaccount/change-password.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/myaccount/change-password.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "my3 red", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/myaccount/change-password.tsx",
      lineNumber: 115,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix11.Form, { method: "post", ref: formRef, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: "Current password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "password", name: "current_password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        (errors == null ? void 0 : errors.current_password) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt1 red", children: "Enter current password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 123,
          columnNumber: 44
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: "New password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "password", name: "new_password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 127,
          columnNumber: 15
        }, this),
        (errors == null ? void 0 : errors.new_password) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt1 red", children: "Enter new password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 130,
          columnNumber: 40
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { children: "Confirm password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "password", name: "confirm_password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this),
        (errors == null ? void 0 : errors.confirm_password) && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt1 red", children: "Enter confirm password" }, void 0, !1, {
          fileName: "app/routes/myaccount/change-password.tsx",
          lineNumber: 137,
          columnNumber: 44
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "user_email", value: data.email }, void 0, !1, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Updating password.." : "Update password" }, void 0, !1, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_remix11.Link, { to: { pathname: "/myaccount/myaccount" }, className: "btn grey printer-new", children: "Cancel" }, void 0, !1, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/myaccount/change-password.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/myaccount/change-password.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/myaccount/change-password.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/change-password.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}

// app/routes/newspapers-print-success.tsx
var newspapers_print_success_exports = {};
__export(newspapers_print_success_exports, {
  default: () => SendToPrinters2
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function SendToPrinters2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Yay, payment successful! Thanks!" }, void 0, !1, {
      fileName: "app/routes/newspapers-print-success.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "We will be in touch shortly regarding your order." }, void 0, !1, {
      fileName: "app/routes/newspapers-print-success.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://www.pressclub.org.uk/", className: "btn", children: "Back to Shop" }, void 0, !1, {
      fileName: "app/routes/newspapers-print-success.tsx",
      lineNumber: 11,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/newspapers-print-success.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/newspapers-print-success.tsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/newspapers-print-success.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/newspapers-print-success.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/newspapers-print-success.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/auth/email-confirmation.tsx
var email_confirmation_exports = {};
__export(email_confirmation_exports, {
  default: () => ConfirmEmail
});
var import_remix12 = __toESM(require_dist()), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ConfirmEmail() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: "Activate your account" }, void 0, !1, {
      fileName: "app/routes/auth/email-confirmation.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Please click the link in the email we just sent you and then you can:" }, void 0, !1, {
      fileName: "app/routes/auth/email-confirmation.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_remix12.Link, { to: "/auth/signin", className: "btn", children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/auth/email-confirmation.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth/email-confirmation.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth/email-confirmation.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/email-confirmation.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/email-confirmation.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/orders/delivery-details.tsx
var delivery_details_exports = {};
__export(delivery_details_exports, {
  action: () => action4,
  default: () => UpdateAccount3,
  loader: () => loader11,
  meta: () => meta5
});
var import_remix13 = __toESM(require_dist());
var import_react5 = require("react"), import_react_tooltip = __toESM(require("react-tooltip"));

// app/price-formula.ts
async function getPriceFormulaByNameCode(nameCode) {
  try {
    return await supabase_default.from("price_formula").select("*").match({ name_code: nameCode });
  } catch (err) {
    return console.error(err), null;
  }
}
async function getCategory(categoryId) {
  try {
    return await supabase_default.from("category_price").select("*").match({ printbox_category_id: categoryId });
  } catch (err) {
    return console.error(err), null;
  }
}
async function getQuantitiesByNameCode(nameCode) {
  try {
    return await supabase_default.from("category_quantity").select("*").match({ price_formula_name_code: nameCode });
  } catch (err) {
    return console.error(err), null;
  }
}

// app/routes/orders/delivery-details.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader11({ request }) {
  var _a;
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.id)
    return (0, import_remix13.redirect)("/");
  let projectId2 = session.ordered_project_id, projectDetail = await printbox_default.getProjectDetail(projectId2);
  if (projectDetail.id == "not_found" || !projectDetail.order)
    return (0, import_remix13.redirect)("/");
  let profile = await getProfile(session.id), school = await getSchoolData((_a = profile.data[0]) == null ? void 0 : _a.school);
  return {
    ...session,
    profile,
    ...school,
    ...projectDetail
  };
}
var meta5 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action4 = async ({ request }) => {
  let school_name = "", school_address = "", school_postcode = "", school_city = "", school_county = "", formData = await request.formData();
  formData.get("school_name") ? school_name = formData.get("school_name") : school_name = formData.get("name_loader"), formData.get("school_address_line_1") ? school_address = formData.get("school_address_line_1") : school_address = formData.get("address_loader"), formData.get("school_postcode") ? school_postcode = formData.get("school_postcode") : school_postcode = formData.get("postcode_loader"), formData.get("school_city") ? school_city = formData.get("school_city") : school_city = formData.get("city_loader"), formData.get("school_county") ? school_county = formData.get("school_county") : school_county = formData.get("country_loader");
  let printer_email = process.env.PRINTER_EMAIL, admin_email = process.env.ADMIN_EMAIL, from_email = process.env.FROM_EMAIL, sendgrid_key = process.env.SENDGRID_API_KEY, data = await getUserSession(request);
  console.log("data:", data);
  let projectId2 = data.ordered_project_id, projectDetail = await printbox_default.getProjectDetail(projectId2), order_number = projectDetail.order.number, size = (await printbox_default.getProductdetails(projectId2)).params[0].attribute_values.size, quantity = data.ordered_quantity, priceFormula = await getPriceFormulaByNameCode(data.ordered_name_code), actualPrice = priceFormula.data[0].set_up_price + priceFormula.data[0].packing_price + (projectDetail.page_count + 2) * priceFormula.data[0].per_page_price * data.ordered_quantity, p = Math.pow(10, 2), n = actualPrice * p * (1 + Number.EPSILON), order_amount = new Intl.NumberFormat("en-gb", { style: "currency", currency: "GBP" }).format(Math.round(n) / p);
  school_county ? school_county = school_county : school_county = "", console.log("new_school:", {
    name: school_name,
    postcode: school_postcode,
    address_line_1: school_address,
    city: school_city,
    county: school_county
  }), console.log("data2:", data);
  let subject = "Pressclub - Delivery details confirmed", sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(sendgrid_key);
  var client_message = "Hi " + data.school_name + ",<br><br>";
  client_message += "Thank you for confirming your delivery details:<br>";
  var common_message = "Order #: " + order_number + "<br>";
  common_message += "Quantity: " + quantity + "<br>", common_message += "Size: " + size + "<br>", common_message += "Amount: " + order_amount + "<br><br>", common_message += "Delivery address:<br>", common_message += school_name + "<br>", common_message += school_address + "<br>", common_message += school_city + " - " + school_postcode, school_county && (common_message += "<br>" + school_county), common_message += "<br><br>", common_message += "Regards,<br>Team Pressclub";
  let msg = {
    to: data.email,
    from: from_email,
    subject,
    html: client_message + common_message
  };
  sgMail.send(msg).then(() => console.log("Mail sent successfully to " + data.email)).catch((error) => console.error(error.toString()));
  var admin_message = "Hi,<br><br>";
  admin_message += "A new order was placed.<br>Details are provided below:<br>";
  let msg1 = {
    to: printer_email,
    from: from_email,
    subject: "Pressclub - A new order was placed Order#" + order_number,
    html: admin_message + common_message
  };
  sgMail.send(msg1).then(() => console.log("Mail sent successfully to " + printer_email)).catch((error) => console.error(error.toString()));
  let msg2 = {
    to: admin_email,
    from: from_email,
    subject: "Pressclub - A new order was placed Order#" + order_number,
    html: admin_message + common_message
  };
  throw sgMail.send(msg2).then(() => console.log("Mail sent successfully to " + admin_email)).catch((error) => console.error(error.toString())), (0, import_remix13.redirect)("/orders/delivery-success");
};
function UpdateAccount3() {
  let data = (0, import_remix13.useLoaderData)();
  console.log(data);
  let [agree, setAgree] = (0, import_react5.useState)(!1);
  console.log("aaa", agree);
  let onclickHandler = () => {
    setAgree(!agree);
  }, errors = (0, import_remix13.useActionData)(), transition = (0, import_remix13.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "mc", children: "Delivery details" }, void 0, !1, {
      fileName: "app/routes/orders/delivery-details.tsx",
      lineNumber: 172,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/delivery-details.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_remix13.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: " Name     : " }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "school_name", className: "edit_name", disabled: !agree, defaultValue: data.body[0].name }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 177,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: " Address  : " }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 180,
          columnNumber: 17
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "school_address_line_1", className: "edit_address", disabled: !agree, defaultValue: data.body[0].address_line_1 }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 180,
          columnNumber: 45
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: " City     : " }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "school_city", className: "edit_city", disabled: !agree, defaultValue: data.body[0].city }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 183,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: " Country  : " }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 186,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "school_county", className: "edit_country", disabled: !agree, defaultValue: data.body[0].county }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 186,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: " Postcode : " }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "school_postcode", className: "edit_postcode", disabled: !agree, defaultValue: data.body[0].postcode }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 189,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "name_loader", defaultValue: data.body[0].name }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "address_loader", defaultValue: data.body[0].address_line_1 }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "city_loader", defaultValue: data.body[0].city }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "country_loader", defaultValue: data.body[0].county }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "postcode_loader", defaultValue: data.body[0].postcode }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 197,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "hidden", name: "order_number", defaultValue: data.order.number }, void 0, !1, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb3-23", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", "data-tip": !0, "data-for": "confirm", className: "btn green delivery", children: "Confirm" }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_tooltip.default, { id: "confirm", type: "warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Confirm delivery details" }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 203,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 202,
          columnNumber: 14
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mb3-23", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_remix13.Link, { to: "#", "data-tip": !0, "data-for": "edit_list", onClick: onclickHandler, type: "edit", className: "btn grey delivery", children: "Edit" }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react_tooltip.default, { id: "edit_list", type: "warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Edit delivery details" }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/orders/delivery-details.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/delivery-details.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/delivery-details.tsx",
      lineNumber: 175,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/delivery-details.tsx",
    lineNumber: 170,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/delivery-details.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}

// app/routes/orders/delivery-success.tsx
var delivery_success_exports = {};
__export(delivery_success_exports, {
  default: () => UpdateAccount4,
  loader: () => loader12,
  meta: () => meta6
});
var import_remix14 = __toESM(require_dist());
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
async function loader12({ request }) {
  var _a;
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.id)
    return (0, import_remix14.redirect)("/");
  let projectId2 = session.ordered_project_id, projectDetail = await printbox_default.getProjectDetail(projectId2);
  if (projectDetail.id == "not_found" || !projectDetail.order)
    return (0, import_remix14.redirect)("/");
  let profile = await getProfile(session.id), school = await getSchoolData((_a = profile.data[0]) == null ? void 0 : _a.school);
  return {
    ...session,
    profile,
    ...school
  };
}
var meta6 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function UpdateAccount4() {
  let data = (0, import_remix14.useLoaderData)(), errors = (0, import_remix14.useActionData)(), transition = (0, import_remix14.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "mc", children: "Delivery details" }, void 0, !1, {
      fileName: "app/routes/orders/delivery-success.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/delivery-success.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_remix14.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "del", children: "Your delivery is on its way" }, void 0, !1, {
        fileName: "app/routes/orders/delivery-success.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/orders/delivery-success.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mb3-new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_remix14.Link, { to: { pathname: "/" }, type: "edit", className: "btn green delivery", children: "Done" }, void 0, !1, {
        fileName: "app/routes/orders/delivery-success.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/orders/delivery-success.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/delivery-success.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/delivery-success.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/delivery-success.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// app/routes/orders/send-to-printers.tsx
var send_to_printers_exports = {};
__export(send_to_printers_exports, {
  default: () => Index5,
  loader: () => loader13,
  meta: () => meta7
});
var import_remix15 = __toESM(require_dist()), import_react6 = require("react");

// app/components/modal.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Modal(props) {
  return props.isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "modal", children: props.children }, void 0, !1, {
      fileName: "app/components/modal.tsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      "div",
      {
        className: "bg",
        onClick: (e) => props.close(e)
      },
      void 0,
      !1,
      {
        fileName: "app/components/modal.tsx",
        lineNumber: 9,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/modal.tsx",
    lineNumber: 5,
    columnNumber: 13
  }, this) : null;
}

// app/routes/orders/send-to-printers.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader13({ request }) {
  let data = await getUserSession(request);
  if (!data.is_subscribed)
    return (0, import_remix15.redirect)("/");
  let projectId2 = new URL(request.url).searchParams.get("projectId"), product = await printbox_default.getProductdetails(projectId2), prod = product.params, OrderedProduct = await printbox_default.getProduct(product.product.id), categoryDetail = await getCategory(OrderedProduct.categories[0]), priceFormula = await getPriceFormulaByNameCode(categoryDetail.data[0].price_formula_name_code), categoryQuantities = await getQuantitiesByNameCode(categoryDetail.data[0].price_formula_name_code);
  return console.log("categoryQuantities:", categoryQuantities), {
    ...data,
    ...prod,
    product,
    projectId: projectId2,
    priceFormula,
    categoryQuantities
  };
}
var meta7 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index5() {
  let data = (0, import_remix15.useLoaderData)(), [totalQty, setQty] = (0, import_react6.useState)("1"), [openModal, setopenModal] = (0, import_react6.useState)(!1), [projectId2, setProjectId2] = (0, import_react6.useState)(""), [agree, setAgree] = (0, import_react6.useState)(!1), total_pages = data[0].page_count, actualPrice = data.priceFormula.data[0].set_up_price + data.priceFormula.data[0].packing_price + JSON.parse(totalQty) * total_pages * data.priceFormula.data[0].per_page_price, price = setPrice(actualPrice, 2);
  function setPrice(actualPrice2, decimalPlaces) {
    let p = Math.pow(10, decimalPlaces), n = actualPrice2 * p * (1 + Number.EPSILON);
    return Math.round(n) / p;
  }
  let checkboxHandler = () => {
    setAgree(!agree);
  }, checkEdit = (event, projectId3, nameCode) => {
    event.preventDefault();
    var pages = data[0].page_count;
    pages % 4 == 0 ? location.href = "/orders/set-session?project_id=" + projectId3 + "&quantity=" + totalQty + "&name_code=" + nameCode : (setopenModal(!0), setProjectId2(projectId3));
  }, confirmEdit = (projectId3) => {
    setopenModal(!1);
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/projects/lockproject?project_id=" + projectId3, !0), xhttp.onreadystatechange = function() {
      this.readyState == 4 && this.status == 200 && (location.href = "/products#&step=editor&projectId=" + projectId3);
    }, xhttp.send();
  }, cancelEdit = (projectId3) => {
    setopenModal(!1), location.href = "success?projectId=" + projectId3;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w100 mw31", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "tc", children: data.priceFormula.data[0] ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Modal,
      {
        isOpen: openModal,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Warning!" }, void 0, !1, {
            fileName: "app/routes/orders/send-to-printers.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: "The number of pages in your project is not a multiple of four. Please go back and adjust the number of pages before sending to the printers" }, void 0, !1, {
            fileName: "app/routes/orders/send-to-printers.tsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { onClick: () => confirmEdit(projectId2), children: "OK" }, void 0, !1, {
              fileName: "app/routes/orders/send-to-printers.tsx",
              lineNumber: 124,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { onClick: () => cancelEdit(projectId2), children: "Cancel" }, void 0, !1, {
              fileName: "app/routes/orders/send-to-printers.tsx",
              lineNumber: 125,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/orders/send-to-printers.tsx",
            lineNumber: 123,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 117,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Send to the printers" }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Template: ",
      data.product.product.name
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Project name: ",
      data.product.name
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Size:  ",
      data[0].attribute_values.size
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 131,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "No. of pages:  ",
      data[0].page_count,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 132,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { children: [
      " Choose your quantity",
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("select", { onChange: (e) => setQty(e.target.value), className: "drop", children: data.categoryQuantities.data.map((category_quantity, index13) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("option", { value: category_quantity.quantity, children: category_quantity.quantity }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 137,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 135,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 134,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 133,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Price formula" }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 143,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Set up price : \xA3",
      data.priceFormula.data[0].set_up_price
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Packing & DHL Courier price : \xA3",
      data.priceFormula.data[0].packing_price
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "send", children: [
      "Per Page price : \xA3",
      data.priceFormula.data[0].per_page_price
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 146,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "checkbox", id: "agree", onChange: checkboxHandler }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 149,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("label", { className: "mt1", children: "Confirm you have read our terms and conditions" }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 150,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 148,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "df justify-content-center b p2 br2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "w100 mw25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "project_id", value: data.projectId }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 156,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "num_of_pages", value: "200" }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 157,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("input", { type: "hidden", name: "total", value: data[0].price_gross }, void 0, !1, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 158,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_remix15.Link, { to: { pathname: `/orders/success?projectId=${data.projectId}` }, className: "btn grey printer", children: "Back" }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers.tsx",
          lineNumber: 161,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("a", { href: "#", onClick: (event) => checkEdit(event, data.projectId, data.priceFormula.data[0].name_code), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("button", { type: "submit", disabled: !agree, className: "btn green printer", children: [
          "Pay \xA3",
          price
        ] }, void 0, !0, {
          fileName: "app/routes/orders/send-to-printers.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers.tsx",
          lineNumber: 162,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "f1 dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "drk", children: "You will be redirected to our payments provider Stripe." }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers.tsx",
          lineNumber: 165,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/orders/send-to-printers.tsx",
          lineNumber: 164,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders/send-to-printers.tsx",
        lineNumber: 160,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 154,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 153,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/send-to-printers.tsx",
    lineNumber: 116,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Warning!" }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { children: "Sorry, you cannot book this product now. Price formula is missing" }, void 0, !1, {
      fileName: "app/routes/orders/send-to-printers.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/send-to-printers.tsx",
    lineNumber: 113,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers.tsx",
    lineNumber: 111,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/send-to-printers.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/index.$productFamilyId.tsx
var index_productFamilyId_exports = {};
__export(index_productFamilyId_exports, {
  default: () => Index6,
  loader: () => loader14,
  meta: () => meta8
});
var import_remix16 = __toESM(require_dist());

// app/components/printbox.tsx
var import_react7 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function PrintboxEmbed({ printboxSessionId, productFamilyId }) {
  (0, import_react7.useEffect)(() => {
    console.log({ printboxSessionId, productFamilyId }), initPrintbox();
  }, []);
  function initPrintbox() {
    window.printbox.setEditorConfig({
      projectId: "",
      productFamilyId: (productFamilyId || process.env.PRODUCT_ID_NEWS_PAPER).toString(),
      moduleId: "4",
      storeName: "default_store",
      showPrice: !0,
      currency: "EUR",
      sessionId: printboxSessionId,
      translationsLanguage: "en",
      contentLanguage: "en",
      language: "en",
      locale: "en-GB"
    }), window.printbox.authUserRequest = () => (console.log("authUserRequest"), new Promise((resolve) => {
      resolve(printboxSessionId);
    })), window.printbox.savingFinished = (projectId2) => {
      console.log("savingFinished", projectId2);
      let xhttp = new XMLHttpRequest();
      return xhttp.open("GET", "/projects/lockproject?project_id=" + projectId2, !0), xhttp.send(), new Promise((resolve) => {
        resolve();
      });
    }, window.printbox.beginGoToCart = () => (console.log("beginGoToCart"), new Promise((resolve) => {
      resolve();
    })), window.printbox.showECommerce = () => (console.log("showECommerce"), new Promise((resolve) => {
      resolve();
    })), window.printbox.goToCartFinished = async (projectId2) => (console.log("goToCartFinished", projectId2), location.href = `/orders/success?projectId=${projectId2}`, new Promise(function(resolve) {
      resolve(!0);
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { id: "app", style: { margin: "5vw 0" } }, void 0, !1, {
    fileName: "app/components/printbox.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/index.$productFamilyId.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader14({ request }) {
  let session = await getUserSession(request), productFamilyId_demo = process.env.PRODUCT_ID_DEMO, productFamilyId_news = process.env.PRODUCT_ID_NEWS_PAPER;
  return { ...session, productFamilyId_news, productFamilyId_demo };
}
var meta8 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index6() {
  let session = (0, import_remix16.useLoaderData)(), productFamilyId = (0, import_remix16.useParams)().productFamilyId ?? "newspaper", productFamilyIds = {
    newspaper: session.productFamilyId_news,
    demo: session.productFamilyId_demo
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PrintboxEmbed, { printboxSessionId: session == null ? void 0 : session.session_id, productFamilyId: productFamilyIds[productFamilyId] }, void 0, !1, {
    fileName: "app/routes/index.$productFamilyId.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.$productFamilyId.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.$productFamilyId.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

// app/routes/orders/confirm-payment.tsx
var confirm_payment_exports = {};
__export(confirm_payment_exports, {
  default: () => index3,
  loader: () => loader15,
  meta: () => meta9
});
var import_remix17 = __toESM(require_dist());

// app/payments.ts
var stripe = require("stripe")(process.env.STRIPE_SECRET);
async function createPaymentIntent(pay_amount) {
  return await stripe.paymentIntents.create({
    amount: pay_amount * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: !0
    }
  });
}
async function retrievePaymentIntent(id) {
  return await stripe.paymentIntents.retrieve(id);
}

// app/routes/orders/confirm-payment.tsx
async function loader15({ request }) {
  let paymentIntentId = new URL(request.url).searchParams.get("payment_intent");
  if (!paymentIntentId)
    return (0, import_remix17.redirect)("/?subscription_attempt=payment_failed");
  let result = await retrievePaymentIntent(paymentIntentId);
  return console.log("result: ", result), result.error ? (0, import_remix17.redirect)("/?subscription_attempt=payment_failed") : (0, import_remix17.redirect)("/orders/confirm-order");
}
var meta9 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index3() {
  let data = (0, import_remix17.useLoaderData)();
  return null;
}

// app/routes/orders/payment-confirm.tsx
var payment_confirm_exports = {};
__export(payment_confirm_exports, {
  default: () => index4,
  loader: () => loader16,
  meta: () => meta10
});
var import_remix18 = __toESM(require_dist());

// app/create-checkout-session.ts
var stripe2 = require("stripe")(process.env.STRIPE_SECRET);
async function createSubscriptionSession(email) {
  return await stripe2.checkout.sessions.create({
    success_url: process.env.SITE_URL + "?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.SITE_URL + "?subscription_attempt=cancelled",
    line_items: [
      { price: process.env.STRIPE_SUBSCRIPTION_PRICE_ID, quantity: 1 }
    ],
    mode: "subscription",
    customer_email: email
  });
}
async function retrieveSubscriptionSession(checkout_session_id) {
  let session = await stripe2.checkout.sessions.retrieve(checkout_session_id), customer = await stripe2.customers.retrieve(session.customer);
  return session ? {
    is_session: !0,
    customer
  } : {
    is_session: !1
  };
}
async function getCustomerSubscription(customer_id) {
  return await stripe2.subscriptions.list({
    customer: customer_id
  });
}
async function getCustomerSubscriptionById(subscription_id) {
  return await stripe2.subscriptions.retrieve(
    subscription_id
  );
}
async function cancelCustomerSubscription(subscription_id) {
  return await stripe2.subscriptions.del(subscription_id);
}
async function getSubscriptionStartEndDates(start_time_stamp, end_time_stamp) {
  let start_date = new Date(parseInt(start_time_stamp) * 1e3), subscription_start_date = `${start_date.getFullYear()}-${start_date.getMonth() + 1}-${start_date.getDate()}`, end_date = new Date(parseInt(end_time_stamp) * 1e3), subscription_end_date = `${end_date.getFullYear()}-${end_date.getMonth() + 1}-${end_date.getDate()}`;
  return {
    subscription_start_date,
    subscription_end_date
  };
}
async function getDateAfter30Days() {
  let date = /* @__PURE__ */ new Date();
  return date.setDate(date.getDate() + 31), {
    after_date_30: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  };
}
async function createPaymentSession(checkoutData) {
  return await stripe2.checkout.sessions.create({
    success_url: process.env.SITE_URL + "orders/payment-confirm?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: process.env.SITE_URL + "?subscription_attempt=payment_cancelled",
    line_items: [
      { price: checkoutData.stripe_set_up_price_id, quantity: checkoutData.set_up_quantity },
      { price: checkoutData.stripe_packing_price_id, quantity: checkoutData.packing_quantity },
      { price: checkoutData.stripe_per_page_price_id, quantity: checkoutData.page_quantity }
    ],
    mode: "payment",
    client_reference_id: checkoutData.customer_id
  });
}

// app/routes/orders/payment-confirm.tsx
async function loader16({ request }) {
  let checkoutSessionId = new URL(request.url).searchParams.get("session_id");
  return checkoutSessionId ? (await retrieveSubscriptionSession(checkoutSessionId)).is_session ? (0, import_remix18.redirect)("/orders/confirm-order") : (0, import_remix18.redirect)("/?subscription_attempt=payment_failed") : (0, import_remix18.redirect)("/?subscription_attempt=payment_failed");
}
var meta10 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index4() {
  let data = (0, import_remix18.useLoaderData)();
  return null;
}

// app/routes/projects/deleteproject.ts
var deleteproject_exports = {};
__export(deleteproject_exports, {
  default: () => Index7,
  loader: () => loader17
});
var import_remix19 = __toESM(require_dist());
async function loader17({ request }) {
  let session = await getUserSession(request), projectId2 = new URL(request.url).search.split("=")[1], deleteProject = await printbox_default.deleteProject(projectId2);
  return {
    session,
    deleteProject
  };
}
function Index7() {
  let data = (0, import_remix19.useLoaderData)();
  return console.log("deleteProject: ", data), null;
}

// app/routes/projects/copy-project.ts
var copy_project_exports = {};
__export(copy_project_exports, {
  default: () => Index8,
  loader: () => loader18
});
var import_remix20 = __toESM(require_dist());
async function loader18({ request }) {
  let session = await getUserSession(request), projectId2 = new URL(request.url).searchParams.get("project_id"), copyProject = await printbox_default.copyProject(projectId2);
  return copyProject.number ? (0, import_remix20.redirect)("/products#&step=editor&projectId=" + copyProject.id) : (0, import_remix20.redirect)("/projects/completed?copy=failed");
}
function Index8() {
  let data = (0, import_remix20.useLoaderData)();
  return null;
}

// app/routes/subscription-reminder.tsx
var subscription_reminder_exports = {};
__export(subscription_reminder_exports, {
  default: () => Index9,
  loader: () => loader19
});
var import_remix21 = __toESM(require_dist());
async function loader19({ request }) {
  let dateAfterDays30 = await getDateAfter30Days();
  console.log("dateAfterDays30:", dateAfterDays30);
  let profileResponse = await getSubscriptionReminders(dateAfterDays30.after_date_30);
  console.log("profileResponse:", profileResponse);
  let today = /* @__PURE__ */ new Date(), date = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  console.log("current date-", date);
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log("current time-", time);
  let datetime = date + " " + time;
  if (console.log("datetime", datetime), profileResponse) {
    let data = profileResponse.data;
    if (data.length) {
      var message = "Hi,<br><br>";
      message += "Your subscription is due for renewal in 30 days<br><br>", message += "Regards,<br>Team Pressclub";
      for (var i = 0; i < data.length; i++)
        if (data[i].subscriptions[0]) {
          console.log("data[0]: ", data[i].subscriptions[0]);
          try {
            let subscriptionDetail = await getCustomerSubscriptionById(data[i].subscriptions[0]), getSubscriptionDates = await getSubscriptionStartEndDates(subscriptionDetail.current_period_start, subscriptionDetail.current_period_end), customer = await printbox_default.getCustomer(data[i].printbox_customer_id);
            if (console.log("customer:", customer), customer) {
              let sgMail = require("@sendgrid/mail");
              sgMail.setApiKey(process.env.SENDGRID_API_KEY);
              let msg = {
                to: customer.email,
                from: process.env.FROM_EMAIL,
                //from: 'pressclubdev@gmail.com',     
                subject: "Pressclub - Subscription renewal",
                html: message
              };
              sgMail.send(msg).then(() => console.log("Mail sent successfully to " + customer.email)).catch((error) => console.error(error.toString()));
            }
          } catch (err) {
            console.error(err);
          }
        }
    }
  }
  return {
    dateAfterDays30,
    profileResponse,
    from_email: process.env.FROM_EMAIL
  };
}
function Index9() {
  let data = (0, import_remix21.useLoaderData)();
  return console.log("data:", data), null;
}

// app/routes/auth/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action5,
  default: () => ForgotPassword,
  meta: () => meta11
});
var import_remix22 = __toESM(require_dist()), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/auth.ts
async function signIn(creds) {
  try {
    return await supabase_default.auth.signIn(creds);
  } catch (err) {
    return console.error(err), null;
  }
}
async function register(creds, options = {}) {
  try {
    return await supabase_default.auth.signUp(creds, options);
  } catch (err) {
    return console.error(err), null;
  }
}
async function forgotPassword(creds) {
  try {
    console.log("Cred =========", creds);
    let email = creds.email || "";
    return await supabase_default.auth.api.resetPasswordForEmail(email);
  } catch (err) {
    return console.error(err), null;
  }
}
async function resetPassword(creds) {
  try {
    console.log("Cred =========", creds);
    let new_password = creds.password || "", access_token = creds.access_token || "";
    return await supabase_default.auth.api.updateUser(access_token, { password: new_password });
  } catch (err) {
    return console.error(err), null;
  }
}

// app/routes/auth/forgot-password.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta11 = () => ({
  title: "Forgot password | Pressclub",
  description: "Create Pressclub account"
}), action5 = async ({ request }) => {
  let email = (await request.formData()).get("email"), errors = {};
  if (email || (errors.email = !0), Object.keys(errors).length)
    return errors;
  (0, import_tiny_invariant2.default)(typeof email == "string");
  try {
    let response = await forgotPassword({ email });
    return response.error ? (errors.response = response.error.message, errors) : (errors.response = "Please check your mailbox. If email is valid you will receive a reset password email", errors);
  } catch (err) {
    return console.log(err), errors.response = "Something went wrong", errors;
  }
};
function ForgotPassword() {
  (0, import_remix22.useLoaderData)();
  let errors = (0, import_remix22.useActionData)(), transition = (0, import_remix22.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Forgot Password" }, void 0, !1, {
      fileName: "app/routes/auth/forgot-password.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth/forgot-password.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "my3 red tc", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/auth/forgot-password.tsx",
      lineNumber: 64,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_remix22.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { children: "Email" }, void 0, !1, {
          fileName: "app/routes/auth/forgot-password.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "email", name: "email" }, void 0, !1, {
          fileName: "app/routes/auth/forgot-password.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth/forgot-password.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt1 red", children: "Email required" }, void 0, !1, {
          fileName: "app/routes/auth/forgot-password.tsx",
          lineNumber: 72,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/forgot-password.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Please wait" : "Forgot password" }, void 0, !1, {
        fileName: "app/routes/auth/forgot-password.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth/forgot-password.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth/forgot-password.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth/forgot-password.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/forgot-password.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/orders/confirm-order.tsx
var confirm_order_exports = {};
__export(confirm_order_exports, {
  default: () => index5,
  loader: () => loader20,
  meta: () => meta12
});
var import_remix23 = __toESM(require_dist());
async function loader20({ request }) {
  let data = await getUserSession(request), projectId2 = data.ordered_project_id, quantity = data.ordered_quantity, projectDetail = await printbox_default.getProjectDetail(projectId2);
  if (projectDetail.id == "not_found")
    return (0, import_remix23.redirect)("/");
  if (projectDetail.order) {
    let updateOrder = await printbox_default.setOrderAsPaid(projectDetail.order.number);
    return (0, import_remix23.redirect)("/orders/delivery-details");
  } else {
    let order = await printbox_default.createOrder(data.customer_id, [
      {
        project_id: projectId2,
        quantity
      }
    ]);
    if (console.log("order create response:", order), order.number) {
      let updateOrder = await printbox_default.setOrderAsPaid(order.number), profile = await updateProfile(data.id, {
        orders: [order.number]
      }), priceFormula = await getPriceFormulaByNameCode(data.ordered_name_code), actualPrice = priceFormula.data[0].set_up_price + priceFormula.data[0].packing_price + (projectDetail.page_count + 2) * priceFormula.data[0].per_page_price * data.ordered_quantity, p = Math.pow(10, 2), n = actualPrice * p * (1 + Number.EPSILON), orderAmount = new Intl.NumberFormat("en-gb", { style: "currency", currency: "GBP" }).format(Math.round(n) / p), size = (await printbox_default.getProductdetails(projectId2)).params[0].attribute_values.size, sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      var message = "Hi " + data.school_name + ",<br><br>";
      message += "Your order was successfully placed.<br><br>", message += "Details are provided below:<br>", message += "Order #: " + order.number + "<br>", message += "Quantity: " + data.ordered_quantity + "<br>", message += "Size: " + size + "<br>", message += "Amount: " + orderAmount + "<br><br>", message += "You will receive another email shortly with a link to download the PDF.<br><br>", message += "Regards,<br>Team Pressclub";
      let msg = {
        to: data.email,
        from: process.env.FROM_EMAIL,
        subject: "Pressclub - Stripe payment received",
        html: message
      };
      return console.log("confirm-order-msg", msg), sgMail.send(msg).then(() => console.log("Mail sent successfully to " + data.email)).catch((error) => console.error(error.toString())), (0, import_remix23.redirect)("/orders/delivery-details");
    } else
      return (0, import_remix23.redirect)("/orders/order-failed");
  }
  return data;
}
var meta12 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index5() {
  let data = (0, import_remix23.useLoaderData)();
  return null;
}

// app/routes/projects/lockproject.ts
var lockproject_exports = {};
__export(lockproject_exports, {
  default: () => Index10,
  loader: () => loader21
});
var import_remix24 = __toESM(require_dist());

// app/utils/project.ts
var Project = {
  getLockedProjects: async function(customerId) {
    try {
      return await supabase_default.from("locked_projects").select("*").match({ customer_id: customerId });
    } catch (err) {
      return console.error(err), null;
    }
  },
  getLockedProject: async function(customerId, projectId2, sessionId) {
    try {
      return await supabase_default.from("locked_projects").select("*").match({ customer_id: customerId, project_id: projectId2, session_id: sessionId });
    } catch (err) {
      return console.error(err), null;
    }
  },
  setProjectLocked: async function(customerId, projectId2, sessionId) {
    try {
      return await supabase_default.from("locked_projects").insert([
        { customer_id: customerId, project_id: projectId2, session_id: sessionId }
      ]);
    } catch (err) {
      return console.error(err), null;
    }
  },
  deleteLockedProjects: async function(sessionId) {
    try {
      return await supabase_default.from("locked_projects").delete().eq("session_id", sessionId);
    } catch (err) {
      return console.error(err), null;
    }
  }
}, project_default = Project;

// app/routes/projects/lockproject.ts
async function loader21({ request }) {
  let session = await getUserSession(request), projectId2 = new URL(request.url).search.split("=")[1], projectLocked = await project_default.getLockedProject(session.customer_id, projectId2, session.session_id);
  if (projectLocked && projectLocked.data == 0) {
    let lock_project = project_default.setProjectLocked(session.customer_id, projectId2, session.session_id);
  }
  return session;
}
function Index10() {
  let session = (0, import_remix24.useLoaderData)();
  return null;
}

// app/routes/projects/set-session.tsx
var set_session_exports = {};
__export(set_session_exports, {
  default: () => index6,
  loader: () => loader22,
  meta: () => meta13
});
var import_remix25 = __toESM(require_dist());
async function loader22({ request }) {
  let projectId2 = new URL(request.url).searchParams.get("projectId"), redirectUrl = "", projectDetail = await printbox_default.getProjectDetail(projectId2), current_session = await getUserSession(request);
  return current_session.is_subscribed ? redirectUrl = "/products#&step=editor&projectId=" + projectId2 : redirectUrl = "/demo/freedemoeditor#&step=editor&projectId=" + projectId2, await createUserSession({
    ...current_session,
    edit_product_family_id: projectDetail.family.id
  }, redirectUrl);
}
var meta13 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index6() {
  let data = (0, import_remix25.useLoaderData)();
  return null;
}

// app/routes/subscription-success.tsx
var subscription_success_exports = {};
__export(subscription_success_exports, {
  default: () => SendToPrinters3,
  loader: () => loader23
});
var import_remix26 = __toESM(require_dist());
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function loader23({ request }) {
  var _a, _b;
  let stripe3 = require("stripe")(process.env.STRIPE_SECRET), session = await getUserSession(request), response = await stripe3.customers.list({
    email: session.email
  }), subscriptionId = (_b = (_a = response == null ? void 0 : response.data[0]) == null ? void 0 : _a.subscriptions.data[0]) == null ? void 0 : _b.id;
  return console.log(subscriptionId), subscriptionId ? (await updateProfile(session.id, {
    subscriptions: [subscriptionId]
  }), await createUserSession({
    ...session,
    is_subscribed: !0
  }, "/orders/download-pdf")) : {};
}
function SendToPrinters3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { children: "Yay! You are now subscribed to Pressclub" }, void 0, !1, {
      fileName: "app/routes/subscription-success.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "You can now download your newspaper PDFs." }, void 0, !1, {
      fileName: "app/routes/subscription-success.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("a", { href: "/orders/download-pdf", className: "btn", children: "Download PDFs" }, void 0, !1, {
        fileName: "app/routes/subscription-success.tsx",
        lineNumber: 43,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my1 kingsthings", children: "or" }, void 0, !1, {
        fileName: "app/routes/subscription-success.tsx",
        lineNumber: 44,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_remix26.Link, { to: "/", className: "btn grey", children: "Back to Shop" }, void 0, !1, {
        fileName: "app/routes/subscription-success.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscription-success.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscription-success.tsx",
    lineNumber: 38,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-success.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-success.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscription-success.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/terms-and-conditions.tsx
var terms_and_conditions_exports = {};
__export(terms_and_conditions_exports, {
  default: () => index7
});
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function index7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { children: "Terms and Conditions" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "Press Club" }, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terms-and-conditions.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/terms-and-conditions.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/terms-and-conditions.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/auth/reset-password.tsx
var reset_password_exports = {};
__export(reset_password_exports, {
  action: () => action6,
  default: () => ResetPassword,
  meta: () => meta14
});
var import_remix27 = __toESM(require_dist()), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_react8 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), meta14 = () => ({
  title: "Reset Password | Pressclub",
  description: "Reset Password"
}), action6 = async ({ request }) => {
  let formData = await request.formData(), errors = {}, password = formData.get("password"), rePassword = formData.get("rePassword"), accessToken = formData.get("access_token");
  if (password || (errors.password = !0), rePassword || (errors.rePassword = !0), password !== rePassword && (errors.passwordNotEqual = !0), Object.keys(errors).length)
    return errors;
  (0, import_tiny_invariant3.default)(typeof password == "string"), (0, import_tiny_invariant3.default)(typeof rePassword == "string");
  try {
    console.log("accessToken1", accessToken);
    let response = await resetPassword({ password, access_token: accessToken });
    return console.log("Supabase Reset password1: ", response), response.error ? (errors.response = response.error.message, errors) : (0, import_remix27.redirect)("/auth/signin");
  } catch (err) {
    return console.log("error" + err), errors.response = "Something went wrong", errors;
  }
};
function ResetPassword() {
  let errors = (0, import_remix27.useActionData)(), transition = (0, import_remix27.useTransition)();
  return (0, import_react8.useEffect)(() => {
    let url_parts = window.location.href.split("access_token="), message = "Email link is invalid or has expired. Please try again.", is_redirect = !1;
    if (url_parts[1]) {
      let split_data = url_parts[1].split("&");
      split_data[0] || (is_redirect = !0), document.getElementById("access_token").value = split_data[0];
    } else
      is_redirect = !0;
    is_redirect && (alert(message), location.href = "/auth/forgot-password");
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "Reset Password" }, void 0, !1, {
      fileName: "app/routes/auth/reset-password.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth/reset-password.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "my3 red tc", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/auth/reset-password.tsx",
      lineNumber: 97,
      columnNumber: 30
    }, this),
    (errors == null ? void 0 : errors.passwordNotEqual) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt1 red", children: "Passwords do not match" }, void 0, !1, {
      fileName: "app/routes/auth/reset-password.tsx",
      lineNumber: 98,
      columnNumber: 38
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_remix27.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { children: "Password" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "input",
          {
            type: "password",
            name: "password"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth/reset-password.tsx",
            lineNumber: 103,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt1 red", children: "Password required" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 106,
          columnNumber: 34
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { children: "Re-enter Password" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "input",
          {
            type: "password",
            name: "rePassword"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth/reset-password.tsx",
            lineNumber: 110,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.rePassword) && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt1 red", children: "Re-enter Password required" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 113,
          columnNumber: 36
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/reset-password.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("input", { type: "hidden", id: "access_token", name: "access_token" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Please wait" : "Reset Password" }, void 0, !1, {
          fileName: "app/routes/auth/reset-password.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/reset-password.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth/reset-password.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth/reset-password.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/reset-password.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/cancel-subscription.tsx
var cancel_subscription_exports = {};
__export(cancel_subscription_exports, {
  default: () => index8,
  loader: () => loader24
});
var import_remix28 = __toESM(require_dist());
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
async function loader24({ request }) {
  let session = await getUserSession(request), url = new URL(request.url), encodedCodeF = url.searchParams.get("code_f"), customer_id = Buffer.from(encodedCodeF, "base64").toString("ascii").slice(5).slice(0, -5), encodedCodeS = url.searchParams.get("code_s"), customer_email = Buffer.from(encodedCodeS, "base64").toString("ascii");
  console.log("customer_email: ", customer_email);
  let profile = await getProfile(customer_id), subscription_status = profile.data[0].subscriptions;
  console.log("subscription status", profile.data[0].subscriptions);
  let customer = await printbox_default.getCustomer(customer_id);
  if (subscription_status) {
    console.log("subscribed");
    let result = await cancelCustomerSubscription(profile.data[0].subscriptions[0]);
    if (result && result.status == "canceled") {
      let result2 = await updateProfile(customer_id, {
        subscriptions: null
      }), sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      var message = "Hi,<br><br>";
      message += "Your subscription has been successfully cancelled<br><br>", message += "Regards,<br>Team Pressclub";
      let msg = {
        to: customer_email,
        from: process.env.FROM_EMAIL,
        subject: "Pressclub - Subscription cancelled",
        html: message
      };
      sgMail.send(msg);
      var message = "Hi,<br><br>";
      message += "Customer " + customer_email + " has been cancelled subscription<br><br>", message += "Regards,<br>Team Pressclub";
      let msg2 = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: "Pressclub - Customer Cancelled Subscription",
        html: message
      };
      return sgMail.send(msg2), session ? await createUserSession({
        ...session,
        is_subscribed: !1
      }, "/?subscription_attempt=subscription_cancelled") : (0, import_remix28.redirect)("/?subscription_attempt=subscription_cancelled");
    } else
      return (0, import_remix28.redirect)("/?subscription_attempt=subscription_cancelled_failed");
  } else
    return console.log("not subscribed"), (0, import_remix28.redirect)("/subscription-already-cancelled");
}
function index8() {
  let data = (0, import_remix28.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "tc", children: data ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { children: "Your subscription has been successfully cancelled" }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 95,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 94,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { children: "Your subscription could not be cancelled. Please try again later." }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 97,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 96,
    columnNumber: 23
  }, this) }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/cancel-subscription.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/demo/freedemoeditor.tsx
var freedemoeditor_exports = {};
__export(freedemoeditor_exports, {
  default: () => Index11,
  loader: () => loader25,
  meta: () => meta15
});
var import_remix29 = __toESM(require_dist());

// app/components/printboxdemo.tsx
var import_react9 = require("react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function PrintboxDemoEmbed({ printboxSessionId, productFamilyId }) {
  (0, import_react9.useEffect)(() => {
    console.log({ printboxSessionId, productFamilyId }), initPrintbox();
  }, []);
  function initPrintbox() {
    window.printbox.setEditorConfig({
      projectId: "",
      productFamilyId: (productFamilyId || process.env.PRODUCT_ID_NEWS_PAPER).toString(),
      moduleId: "4",
      storeName: "default_store",
      showPrice: !0,
      currency: "EUR",
      sessionId: printboxSessionId,
      translationsLanguage: "en",
      contentLanguage: "en",
      language: "en",
      locale: "en-GB"
    }), window.printbox.authUserRequest = () => (console.log("authUserRequest"), new Promise((resolve) => {
      resolve(printboxSessionId);
    })), window.printbox.savingFinished = (projectId2) => {
      console.log("savingFinished", projectId2);
      let xhttp = new XMLHttpRequest();
      return xhttp.open("GET", "/projects/lockproject?project_id=" + projectId2, !0), xhttp.send(), new Promise((resolve) => {
        resolve();
      });
    }, window.printbox.beginGoToCart = () => (console.log("beginGoToCart"), new Promise((resolve) => {
      resolve();
    })), window.printbox.showECommerce = () => (console.log("showECommerce"), new Promise((resolve) => {
      resolve();
    })), window.printbox.goToCartFinished = async (projectId2) => (console.log("goToCartFinished", projectId2), location.href = `/orders/success?projectId=${projectId2}`, new Promise(function(resolve) {
      resolve(!0);
    }));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { id: "app", style: { margin: "5vw 0" } }, void 0, !1, {
    fileName: "app/components/printboxdemo.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/demo/freedemoeditor.tsx
var import_react10 = require("react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
async function loader25({ request }) {
  let session = await getUserSession(request);
  console.log("session1:", session);
  let productFamilyId = session && session.edit_product_family_id ? session.edit_product_family_id : process.env.PRODUCT_ID_DEMO;
  return { ...session, productFamilyId };
}
var meta15 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index11() {
  let session = (0, import_remix29.useLoaderData)();
  return console.log("new productFamilyId", session.productFamilyId), (0, import_react10.useEffect)(() => {
    var editorBackButtonInterval = null;
    function redirectToProductList() {
      var category = "", categoryPath = "", productId = "", size = "", split_data = "", url = window.location.href, url_parts = url.split("&");
      for (var i in url_parts)
        split_data = url_parts[i].split("="), split_data[0] == "category" ? category = split_data[1] : split_data[0] == "categoryPath" ? categoryPath = split_data[1] : split_data[0] == "productId" ? productId = split_data[1] : split_data[0] == "size" && (size = split_data[1]);
      var redirect_url = "/products/redirect-product-card?category=" + category + "&categoryPath=" + categoryPath + "&productId=" + productId + "&size=" + size + "&demo=1";
      window.location.href = redirect_url;
    }
    function setEditorBackButton() {
      var iframe = document.getElementById("app_iframe");
      if (iframe) {
        var span_elemnts = iframe.contentWindow.document.getElementsByClassName("ModalsHeaderTitle");
        if (span_elemnts.length) {
          var title = span_elemnts[0].innerHTML;
          if (title == "Do you want to leave this site?") {
            var button_elemnts = iframe.contentWindow.document.querySelectorAll('[data-sid="confirmationOk"]');
            button_elemnts.length && button_elemnts.forEach((userItem) => {
              var old_element = userItem, new_element = old_element.cloneNode(!0);
              old_element.parentNode.replaceChild(new_element, old_element), new_element.addEventListener("click", redirectToProductList);
            });
          }
        }
      }
    }
    editorBackButtonInterval = setInterval(setEditorBackButton, 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(PrintboxDemoEmbed, { printboxSessionId: session ? session.session_id : null, productFamilyId: session.productFamilyId }, void 0, !1, {
    fileName: "app/routes/demo/freedemoeditor.tsx",
    lineNumber: 81,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/freedemoeditor.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/freedemoeditor.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/myaccount/myaccount.tsx
var myaccount_exports = {};
__export(myaccount_exports, {
  action: () => action7,
  default: () => Myaccount,
  loader: () => loader26,
  meta: () => meta16
});
var import_remix30 = __toESM(require_dist()), import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// app/render.ts
async function getRenders(orderId) {
  try {
    return await supabase_default.from("renders").select("*").match({ order_id: orderId });
  } catch (err) {
    return console.error(err), null;
  }
}

// app/routes/myaccount/myaccount.tsx
var import_react11 = require("react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
async function loader26({ request }) {
  var _a, _b, _c, _d;
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.id)
    return session;
  let profile = await getProfile(session.id);
  if (console.log("PROFILE: ", profile), !((_b = (_a = profile.data[0]) == null ? void 0 : _a.orders) != null && _b.length))
    return session;
  let order = await printbox_default.getOrder((_c = profile.data[0]) == null ? void 0 : _c.orders[0]);
  console.log(order);
  let renders = await getRenders((_d = profile.data[0]) == null ? void 0 : _d.orders[0]);
  console.log(renders);
  let delete_locked_projects = await project_default.deleteLockedProjects(session.session_id);
  return {
    ...session,
    order,
    pdfs: renders.data
  };
}
var meta16 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action7 = async ({ request }) => {
  let userId = (await request.formData()).get("userId");
  (0, import_tiny_invariant4.default)(typeof userId == "string");
};
function Myaccount() {
  let data = (0, import_remix30.useLoaderData)(), [openModal, setopenModal] = (0, import_react11.useState)(!1), checkEdit = (event) => {
    event.preventDefault(), setopenModal(!0), setProjectId(projectId);
  }, confirm2 = (projectId2) => {
    setopenModal(!1), location.href = "/myaccount/send-cancel-subscription";
  }, cancel = (projectId2) => {
    setopenModal(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Modal, { isOpen: openModal, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { children: "Do you want to cancel the subscription?" }, void 0, !1, {
        fileName: "app/routes/myaccount/myaccount.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { children: "We will send you an email to confirm the cancellation." }, void 0, !1, {
        fileName: "app/routes/myaccount/myaccount.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { onClick: () => confirm2(), children: "OK" }, void 0, !1, {
          fileName: "app/routes/myaccount/myaccount.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { onClick: () => cancel(), children: "Cancel" }, void 0, !1, {
          fileName: "app/routes/myaccount/myaccount.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/myaccount/myaccount.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "mc", children: "My Account" }, void 0, !1, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 96,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "kingsthings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_remix30.Link, { to: "/myaccount/update-school-details", children: "Update school details" }, void 0, !1, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 98,
      columnNumber: 22
    }, this) }, void 0, !1, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 97,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "kingsthings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_remix30.Link, { to: "/myaccount/change-password", children: "Change password" }, void 0, !1, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 104,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/myaccount/myaccount.tsx",
      lineNumber: 103,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/myaccount/myaccount.tsx",
    lineNumber: 84,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/myaccount.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/myaccount/myaccount.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/orders/download-pdf.tsx
var download_pdf_exports = {};
__export(download_pdf_exports, {
  action: () => action8,
  default: () => DownloadPDF,
  loader: () => loader27,
  meta: () => meta17
});
var import_remix31 = __toESM(require_dist()), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
async function loader27({ request }) {
  var _a, _b, _c;
  let url = new URL(request.url), projectId2 = url.searchParams.get("projectId"), isCompleted = url.searchParams.get("isCompleted"), user_id = "", to_email = "", not_order_reason = "", CATEGORY_PATH_DEMO = process.env.CATEGORY_PATH_DEMO, projectDetail = await printbox_default.getProjectDetail(projectId2);
  if (projectDetail.id == "not_found")
    return redirect("/");
  let session = await getUserSession(request);
  if (session && session.id && (user_id = session.customer_id, to_email = session.email), projectDetail.customer && projectDetail.customer.id && (user_id = projectDetail.customer.id), console.log("user_id:", user_id), !user_id) {
    for (var chars = "abcdefghijklmnopqrstuvwxyz1234567890", string = "", ii = 0; ii < 15; ii++)
      string += chars[Math.floor(Math.random() * chars.length)];
    let email = string + "@gmail.com", password = string, school_name = string + "school", school_postcode = string, school_address_line_1 = string + "school_address", school_address_line_2 = "", school_city = string + "school_city", school = {
      name: school_name,
      postcode: school_postcode,
      address_line_1: school_address_line_1,
      address_line_2: school_address_line_2,
      city: school_city,
      county: "uk"
    }, response = await register({ email, password }, { data: { school } }), schoolResponse = await supabase_default.from("schools").insert([school]), profileResponse = await supabase_default.from("profiles").update({ school: schoolResponse.data[0].id }).match({ id: response.user.id }), printboxResponse = await printbox_default.createCustomer(
      response.user.id,
      email
    ), result = await updateProfile(response.user.id, {
      printbox_customer_id: printboxResponse.customer_id
    }), userResponse = await printbox_default.updateProjectUserid(
      projectId2,
      printboxResponse.customer_id
    );
    user_id = printboxResponse.customer_id;
  }
  if (!projectDetail.order) {
    let order = await printbox_default.createOrder(user_id, [
      {
        project_id: projectId2,
        quantity: 1,
        item_price_net: 0
      }
    ]);
    if (order.number) {
      let updateOrder = await printbox_default.setOrderAsPaid(order.number);
    }
  }
  let profile = await getProfileByPrintboxCustomerId(user_id);
  projectDetail = await printbox_default.getProjectDetail(projectId2);
  let orderNumber = projectDetail.order.number ? [projectDetail.order.number] : null, profileData = await updateProfile(profile.data[0].id, {
    orders: orderNumber
  });
  profile = await getProfileByPrintboxCustomerId(user_id);
  let orderDetail = await printbox_default.getOrder((_a = profile.data[0]) == null ? void 0 : _a.orders[0]);
  orderDetail.id && orderDetail.id == "not_found" && (not_order_reason = projectDetail.is_not_orderable_reason);
  let renders = await getRenders((_b = profile.data[0]) == null ? void 0 : _b.orders[0]);
  return console.log("renders--", (_c = renders.data) == null ? void 0 : _c.length), {
    ...session,
    orderDetail,
    pdfs: renders.data,
    projectId: projectId2,
    not_order_reason,
    isCompleted,
    CATEGORY_PATH_DEMO
  };
}
var meta17 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
}), action8 = async ({ request }) => {
  let userId = (await request.formData()).get("userId");
  (0, import_tiny_invariant5.default)(typeof userId == "string");
};
function DownloadPDF() {
  var _a, _b;
  let data = (0, import_remix31.useLoaderData)();
  console.log("data-", data);
  let backUrl = data.isCompleted ? "/projects/completed" : "/orders/success?projectId=" + data.projectId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "tc", children: data.orderDetail.number ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h2", { children: "Download PDF" }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 166,
      columnNumber: 13
    }, this),
    (!data.pdfs || ((_a = data.pdfs) == null ? void 0 : _a.length) === 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: [
      "Your newspaper is still being prepared. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 168,
        columnNumber: 58
      }, this),
      "To see your PDF, refresh this page in 5-10 minutes."
    ] }, void 0, !0, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 168,
      columnNumber: 15
    }, this),
    ((_b = data.pdfs) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: "Your PDF is ready to download!" }, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 173,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "df justify-content-center my3 b p2 br2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "my1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { className: "btn my1", style: { display: "block" }, href: data.pdfs[0].render_url, target: "_blank", rel: "noopener noreferrer", children: "Download Page" }, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 176,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 175,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 174,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 172,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { href: backUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("button", { type: "submit", className: "btn grey", style: { width: "150px" }, children: "Back" }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 184,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 183,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 182,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/download-pdf.tsx",
    lineNumber: 165,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { children: [
      "Your order cannot be placed right now. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 188,
        columnNumber: 57
      }, this),
      "Please try again later. ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/routes/orders/download-pdf.tsx",
        lineNumber: 188,
        columnNumber: 87
      }, this),
      "Reason: ",
      data.not_order_reason
    ] }, void 0, !0, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 188,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "my3", children: data.session && data.session.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_remix31.Link, { to: `/products#&step=editor&projectId=${data.projectId}`, className: "btn grey", children: "Go Back To Editor" }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 192,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 191,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_remix31.Link, { to: `/demo/freedemoeditor#step=product_list&categoryPath=${data.CATEGORY_PATH_DEMO}`, className: "btn grey", children: "Go Back To Products" }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 194,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 193,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/download-pdf.tsx",
      lineNumber: 189,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/download-pdf.tsx",
    lineNumber: 187,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/download-pdf.tsx",
    lineNumber: 163,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/download-pdf.tsx",
    lineNumber: 162,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/download-pdf.tsx",
    lineNumber: 161,
    columnNumber: 5
  }, this);
}

// app/routes/orders/order-failed.tsx
var order_failed_exports = {};
__export(order_failed_exports, {
  default: () => OrderSuccess,
  loader: () => loader28,
  meta: () => meta18
});
var import_remix32 = __toESM(require_dist());
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
async function loader28({ request }) {
  let data = await getUserSession(request);
  return console.log("SESSION: ", data), {
    ...data
  };
}
var meta18 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function OrderSuccess() {
  let data = (0, import_remix32.useLoaderData)();
  return console.log("data:-", data), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { children: [
    "Sorry, your order could not be placed.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/orders/order-failed.tsx",
      lineNumber: 27,
      columnNumber: 52
    }, this),
    "Please contact our help desk."
  ] }, void 0, !0, {
    fileName: "app/routes/orders/order-failed.tsx",
    lineNumber: 27,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/order-failed.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/order-failed.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/order-failed.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/orders/set-checkout.tsx
var set_checkout_exports = {};
__export(set_checkout_exports, {
  default: () => index9,
  loader: () => loader29,
  meta: () => meta19
});
var import_remix33 = __toESM(require_dist());
var import_stripe_js = require("@stripe/stripe-js");
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
async function loader29({ request }) {
  let session = await getUserSession(request), stripe_value = process.env.STRIPE_PUBLIC_KEY, productDetail = await printbox_default.getProductdetails(session.ordered_project_id), priceFormula = await getPriceFormulaByNameCode(session.ordered_name_code), checkoutSession = "";
  if (session && session.session_id) {
    let checkoutData = {
      stripe_set_up_price_id: priceFormula.data[0].stripe_set_up_price_id,
      set_up_quantity: 1,
      stripe_packing_price_id: priceFormula.data[0].stripe_packing_price_id,
      packing_quantity: 1,
      stripe_per_page_price_id: priceFormula.data[0].stripe_per_page_price_id,
      page_quantity: productDetail.page_count * session.ordered_quantity,
      customer_id: session.customer_id
    };
    checkoutSession = await createPaymentSession(checkoutData);
  }
  return {
    session,
    checkout_session: checkoutSession,
    stripe_value
  };
}
var meta19 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index9() {
  let data = (0, import_remix33.useLoaderData)();
  return data && (async (checkoutSessionId) => {
    console.log("stripe_value", data.stripe_value);
    let stripe3 = await (0, import_stripe_js.loadStripe)(data.stripe_value);
    if (!stripe3 || !checkoutSessionId)
      return;
    stripe3.redirectToCheckout({ sessionId: checkoutSessionId.id }).error && alert("Sorry, please try again later");
  })(data.checkout_session), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "df justify-content-center my3 b p2 br2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("p", { children: "Redirecting to stripe..." }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 85,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 84,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 83,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 82,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/set-checkout.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

// app/routes/orders/set-session.tsx
var set_session_exports2 = {};
__export(set_session_exports2, {
  default: () => index10,
  loader: () => loader30,
  meta: () => meta20
});
var import_remix34 = __toESM(require_dist());
async function loader30({ request }) {
  let url = new URL(request.url), projectId2 = url.searchParams.get("project_id"), quantity = url.searchParams.get("quantity"), name_code = url.searchParams.get("name_code"), current_session = await getUserSession(request);
  return await createUserSession({
    ...current_session,
    ordered_project_id: projectId2,
    ordered_quantity: quantity,
    ordered_name_code: name_code
  }, "/orders/set-checkout");
}
var meta20 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index10() {
  let data = (0, import_remix34.useLoaderData)();
  return null;
}

// app/routes/projects/completed.tsx
var completed_exports = {};
__export(completed_exports, {
  default: () => Index12,
  loader: () => loader31,
  meta: () => meta21
});
var import_remix35 = __toESM(require_dist());
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
async function loader31({ request }) {
  let session = await getUserSession(request);
  console.log("SESSION: ", session);
  let copyStatus = new URL(request.url).searchParams.get("copy");
  if (!session.customer_id)
    return session;
  let all_projects = await printbox_default.getProjectsCompleted(session.customer_id), projects = [], projects_ids = [];
  if (all_projects) {
    var projects_data = all_projects.results;
    for (var i in projects_data)
      projects_data[i].is_saved && projects.push(projects_data[i]);
  }
  return {
    session,
    projects,
    copyStatus
  };
}
var meta21 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index12() {
  let data = (0, import_remix35.useLoaderData)(), copyStatusMessage = "";
  data.copyStatus == "failed" && (copyStatusMessage = "Sorry, could not copied the project.<br>Please try again later.");
  let showDownload = (event, projectId2, projectName, is_subscribed) => {
    event.preventDefault(), location.href = "/orders/download-pdf?projectId=" + projectId2 + "&isCompleted=1";
  }, checkDelete = async (event, projectId2, projectName) => {
    if (event.preventDefault(), confirm("Are you sure to delete the project '" + projectName + "'?")) {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/projects/deleteproject?project_id=" + projectId2, !0), xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let element = document.getElementById(projectId2);
          element && element.remove();
        }
      }, xhttp.send();
    }
  }, copyProject = async (event, projectId2, projectName, is_subscribed) => {
    event.preventDefault(), confirm("Are you sure to copy the project '" + projectName + "'?") && (is_subscribed ? location.href = "/projects/copy-project?project_id=" + projectId2 : location.href = "/projects/copy-project-free-user?project_id=" + projectId2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { dangerouslySetInnerHTML: { __html: copyStatusMessage } }, void 0, !1, {
      fileName: "app/routes/projects/completed.tsx",
      lineNumber: 94,
      columnNumber: 15
    }, this),
    data.projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "Completed projects" }, void 0, !1, {
        fileName: "app/routes/projects/completed.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: "In order to edit a completed project, or to\xA0order more copies from our printers, please duplicate the project first." }, void 0, !1, {
        fileName: "app/routes/projects/completed.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "project_list_flex my3", children: data.projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "project_list_wrapper", id: project.id, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("a", { href: "#", onClick: (event) => showDownload(event, project.id, project.name, data.session.is_subscribed), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "product-list-image", src: project.thumbnail_url, alt: "Printing Press Newspaper - pp_newspaper_stack" }, void 0, !1, {
            fileName: "app/routes/projects/completed.tsx",
            lineNumber: 107,
            columnNumber: 27
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/completed.tsx",
            lineNumber: 106,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: project.name }, void 0, !1, {
            fileName: "app/routes/projects/completed.tsx",
            lineNumber: 109,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects/completed.tsx",
          lineNumber: 105,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "product-list-icon-copy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("a", { href: "/", "data-tip": !0, "data-for": "copy_completed", onClick: (event) => copyProject(event, project.id, project.name, data.session.is_subscribed), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("button", { type: "submit", className: "btn teal btn-home-page", style: { width: "350px" }, children: "Duplicate project" }, void 0, !1, {
          fileName: "app/routes/projects/completed.tsx",
          lineNumber: 116,
          columnNumber: 31
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/completed.tsx",
          lineNumber: 115,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/completed.tsx",
          lineNumber: 114,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/projects/completed.tsx",
          lineNumber: 113,
          columnNumber: 23
        }, this)
      ] }, project.number, !0, {
        fileName: "app/routes/projects/completed.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/routes/projects/completed.tsx",
        lineNumber: 102,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/projects/completed.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/completed.tsx",
      lineNumber: 96,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("h2", { children: "You have no completed projects" }, void 0, !1, {
      fileName: "app/routes/projects/completed.tsx",
      lineNumber: 128,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/projects/completed.tsx",
      lineNumber: 127,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/completed.tsx",
    lineNumber: 93,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/completed.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/completed.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

// app/routes/orders/success.tsx
var success_exports = {};
__export(success_exports, {
  default: () => OrderSuccess2,
  loader: () => loader32,
  meta: () => meta22
});
var import_remix36 = __toESM(require_dist());
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
async function loader32({ request }) {
  let projectId2 = new URL(request.url).searchParams.get("projectId"), data = await getUserSession(request);
  console.log("SESSION: ", data);
  let projectDetail = await printbox_default.getProjectDetail(projectId2);
  if (console.log("projectDetail: ", projectDetail), projectDetail.id == "not_found")
    return (0, import_remix36.redirect)("/");
  let product = await printbox_default.getProductdetails(projectId2), prod = product.params, OrderedProduct = await printbox_default.getProduct(product.product.id), categoryDetail = await getCategory(OrderedProduct.categories[0]), isPriceFormula = !1;
  return categoryDetail.data[0] && (isPriceFormula = !0), {
    ...data,
    projectId: projectId2,
    isPriceFormula
  };
}
var meta22 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function OrderSuccess2() {
  let data = (0, import_remix36.useLoaderData)();
  console.log("data:-", data);
  let confirmOrder = async (event, projectId2, which) => {
    event.preventDefault();
    let message2 = "";
    which == "printer" ? message2 = "Please note that you could not edit the project anymore after making the payment. Are you sure to continue?" : message2 = "Please keep in mind that you will no longer be able to edit the project. Are you sure to continue?", confirm(message2) && (which == "printer" ? location.href = "/orders/send-to-printers?projectId=" + projectId2 : location.href = "/orders/download-pdf?projectId=" + projectId2);
  }, confirmdemoOrder = async (event, projectId2, which) => {
    event.preventDefault(), which == "printer" ? location.href = "/orders/send-to-printers?projectId=" + projectId2 : location.href = "/orders/download-pdf?projectId=" + projectId2;
  }, message = "";
  return data.is_subscribed && data.isPriceFormula ? message = "What would you like to do with your newspaper?" : message = "This is a demo newspaper.<br>Demo newspaper is not printable and could only download as PDF.", /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "tc", children: [
    data != null && data.is_subscribed ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { children: "Newspaper order successful!" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { dangerouslySetInnerHTML: { __html: message } }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h2", { className: "kingsthings", children: "What would you like to do with your project?" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "kingsthings", children: "Sending to printers is only available to subscribers" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    data != null && data.is_subscribed ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "my3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_remix36.Link, { to: "/", onClick: (event) => confirmOrder(event, data.projectId, "printer"), className: `${data.is_subscribed && data.isPriceFormula ? "btn green" : "btn grey disabled-link"}`, children: "Send to printers" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "my1 kingsthings", children: "or" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_remix36.Link, { to: "/", onClick: (event) => confirmOrder(event, data.projectId, "pdf"), className: "btn teal", children: "Download as PDF" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "my3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_remix36.Link, { to: "/", onClick: (event) => confirmdemoOrder(event, data.projectId, "printer"), className: `${data.is_subscribed ? "btn green" : "btn grey disabled-link"}`, children: "Send to printers" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "my1 kingsthings", children: "or" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_remix36.Link, { to: "/", onClick: (event) => confirmdemoOrder(event, data.projectId, "pdf"), className: "btn teal", children: "Download as PDF" }, void 0, !1, {
        fileName: "app/routes/orders/success.tsx",
        lineNumber: 116,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/orders/success.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders/success.tsx",
    lineNumber: 87,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/success.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders/success.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => index11
});
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function index11() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { children: "Privacy Policy" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 6,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: "Press Club" }, void 0, !1, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 7,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 5,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 3,
    columnNumber: 7
  }, this);
}

// app/routes/products/index.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Index13,
  loader: () => loader33,
  meta: () => meta23
});
var import_remix37 = __toESM(require_dist());
var import_react12 = require("react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function loader33({ request }) {
  let session = await getUserSession(request);
  if (!session || !session.is_subscribed)
    return (0, import_remix37.redirect)("/demo/redirect-product-list?step=product_list&categoryPath=" + process.env.CATEGORY_PATH_DEMO);
  let productFamilyId = session.edit_product_family_id ? session.edit_product_family_id : process.env.PRODUCT_ID_NEWS_PAPER;
  return { ...session, productFamilyId };
}
var meta23 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index13() {
  let session = (0, import_remix37.useLoaderData)();
  return (0, import_react12.useEffect)(() => {
    var editorBackButtonInterval = null;
    function redirectToProductList() {
      var category = "", categoryPath = "", productId = "", size = "", split_data = "", url = window.location.href, url_parts = url.split("&");
      for (var i in url_parts)
        split_data = url_parts[i].split("="), split_data[0] == "category" ? category = split_data[1] : split_data[0] == "categoryPath" ? categoryPath = split_data[1] : split_data[0] == "productId" ? productId = split_data[1] : split_data[0] == "size" && (size = split_data[1]);
      var redirect_url = "/products/redirect-product-card?category=" + category + "&categoryPath=" + categoryPath + "&productId=" + productId + "&size=" + size + "&demo=0";
      window.location.href = redirect_url;
    }
    function setEditorBackButton() {
      var iframe = document.getElementById("app_iframe");
      if (iframe) {
        var span_elemnts = iframe.contentWindow.document.getElementsByClassName("ModalsHeaderTitle");
        if (span_elemnts.length) {
          var title = span_elemnts[0].innerHTML;
          if (title == "Do you want to leave this site?") {
            var button_elemnts = iframe.contentWindow.document.querySelectorAll('[data-sid="confirmationOk"]');
            button_elemnts.length && button_elemnts.forEach((userItem) => {
              var old_element = userItem, new_element = old_element.cloneNode(!0);
              old_element.parentNode.replaceChild(new_element, old_element), new_element.addEventListener("click", redirectToProductList);
            });
          }
        }
      }
    }
    editorBackButtonInterval = setInterval(setEditorBackButton, 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PrintboxEmbed, { printboxSessionId: session == null ? void 0 : session.session_id, productFamilyId: session.productFamilyId }, void 0, !1, {
    fileName: "app/routes/products/index.tsx",
    lineNumber: 86,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/products/index.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/products/index.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Index14,
  loader: () => loader34,
  meta: () => meta24
});
var import_remix38 = __toESM(require_dist());
var import_react13 = require("react"), import_react_tooltip2 = __toESM(require("react-tooltip")), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
async function loader34({ request }) {
  let session = await getUserSession(request);
  if (console.log("SESSION: ", session), !session.customer_id)
    return session;
  let delete_locked_projects = await project_default.deleteLockedProjects(session.session_id), all_projects = await printbox_default.getProjects(session.customer_id), locked_projects = await project_default.getLockedProjects(session.customer_id), projects = [], projects_ids = [];
  if (all_projects) {
    var projects_data = all_projects.results;
    for (var i in projects_data)
      projects_data[i].is_saved && projects.push(projects_data[i]);
  }
  let locked_projects_ids = [];
  if (locked_projects) {
    var locked_projects_data = locked_projects.data;
    for (var i in locked_projects_data)
      locked_projects_ids.push(locked_projects_data[i].project_id);
  }
  return {
    session,
    projects,
    locked_projects,
    locked_projects_ids
  };
}
var meta24 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index14() {
  let data = (0, import_remix38.useLoaderData)(), [openModal, setopenModal] = (0, import_react13.useState)(!1), [projectName, setProjectName] = (0, import_react13.useState)(""), [projectId2, setProjectId2] = (0, import_react13.useState)(""), checkEdit = (event, projectId3, projectName2, is_subscribed) => {
    event.preventDefault(), data.locked_projects_ids.includes(projectId3) ? (setopenModal(!0), setProjectName(projectName2), setProjectId2(projectId3)) : confirmEdit(projectId3, is_subscribed);
  }, confirmEdit = (projectId3, is_subscribed) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/projects/lockproject?project_id=" + projectId3, !0), xhttp.onreadystatechange = function() {
      this.readyState == 4 && this.status == 200 && (location.href = "/projects/set-session?projectId=" + projectId3);
    }, xhttp.send();
  }, checkDelete = async (event, projectId3, projectName2) => {
    if (confirm("Are you sure to delete the project '" + projectName2 + "'?")) {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/projects/deleteproject?project_id=" + projectId3, !0), xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let element = document.getElementById(projectId3);
          element && element.remove();
        }
      }, xhttp.send();
    }
    event.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "tc", children: data.projects.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { children: "Choose a project to edit" }, void 0, !1, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 109,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "my3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Modal, { isOpen: openModal, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { children: "Warning!" }, void 0, !1, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { children: [
          "This project ",
          projectName,
          " is being edited by somebody else. If you continue, they lose all of their edits."
        ] }, void 0, !0, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { onClick: () => setopenModal(!1), className: "grid-child", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { children: [
            "Cancel ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 116,
              columnNumber: 36
            }, this),
            " Take me back"
          ] }, void 0, !0, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 116,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 115,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { onClick: () => confirmEdit(projectId2, data.session.is_subscribed), className: "grid-child", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h3", { children: [
            "Continue ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 119,
              columnNumber: 38
            }, this),
            " I understand the risk"
          ] }, void 0, !0, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 118,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 114,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 111,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "project_list_flex my3", children: data.projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "project_list_wrapper", id: project.id, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("a", { href: "#", onClick: (event) => checkEdit(event, project.id, project.name, data.session.is_subscribed), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { className: "product-list-image", src: project.thumbnail_url, alt: "Printing Press Newspaper - pp_newspaper_stack" }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 128,
            columnNumber: 27
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 127,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { children: project.name }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 130,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 126,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "product-list-icon-wrapper", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "product-list-icon-lock", children: data.locked_projects_ids.includes(project.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { className: "product-list-lock", "data-tip": !0, "data-for": "lock", src: "/images/lock.svg" }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 138,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_tooltip2.default, { id: "lock", type: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { children: "Locked" }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 140,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 139,
              columnNumber: 31
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 137,
            columnNumber: 29
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { className: "product-list-lock", "data-tip": !0, "data-for": "unlock", src: "/images/unlock.svg" }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 143,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_tooltip2.default, { id: "unlock", type: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { children: "Unlocked" }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 145,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/projects/index.tsx",
              lineNumber: 144,
              columnNumber: 31
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 142,
            columnNumber: 35
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 135,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "product-list-icon-delete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("a", { href: "#", "data-tip": !0, "data-for": "delete", onClick: (event) => checkDelete(event, project.id, project.name), children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("img", { className: "product-list-delete", src: "/images/delete.png" }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 152,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 151,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 150,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_tooltip2.default, { id: "delete", type: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { children: "Delete the project" }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 156,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/projects/index.tsx",
            lineNumber: 155,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/projects/index.tsx",
          lineNumber: 134,
          columnNumber: 23
        }, this)
      ] }, project.number, !0, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 125,
        columnNumber: 21
      }, this)) }, void 0, !1, {
        fileName: "app/routes/projects/index.tsx",
        lineNumber: 123,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/projects/index.tsx",
      lineNumber: 110,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 108,
    columnNumber: 15
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_jsx_dev_runtime31.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h2", { children: "You don't currently have any projects underway." }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 164,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 163,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 106,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 105,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/projects/index.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}

// app/routes/auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action9,
  default: () => Register,
  loader: () => loader35,
  meta: () => meta25
});
var import_remix39 = __toESM(require_dist()), import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
async function loader35({ request }) {
  return getUserSession(request);
}
var action9 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), school_name = formData.get("school_name"), school_postcode = formData.get("school_postcode"), school_address_line_1 = formData.get("school_address_line_1"), school_address_line_2 = formData.get("school_address_line_2"), school_city = formData.get("school_city"), school_county = formData.get("school_county"), errors = {};
  if (email || (errors.email = !0), password || (errors.password = !0), school_name || (errors.school_name = !0), school_postcode || (errors.school_postcode = !0), school_address_line_1 || (errors.school_address_line_1 = !0), school_city || (errors.school_city = !0), Object.keys(errors).length)
    return errors;
  (0, import_tiny_invariant6.default)(typeof email == "string"), (0, import_tiny_invariant6.default)(typeof password == "string"), (0, import_tiny_invariant6.default)(typeof school_name == "string"), (0, import_tiny_invariant6.default)(typeof school_postcode == "string"), (0, import_tiny_invariant6.default)(typeof school_address_line_1 == "string"), (0, import_tiny_invariant6.default)(typeof school_city == "string");
  let school = {
    name: school_name,
    postcode: school_postcode,
    address_line_1: school_address_line_1,
    address_line_2: school_address_line_2,
    city: school_city,
    county: school_county
  }, response = await register({ email, password }, { data: { school } });
  if (console.log("Supabase Sign up: ", response), response.error)
    return errors.response = response.error.message, errors;
  let schoolResponse = await supabase_default.from("schools").insert([school]);
  console.log(schoolResponse);
  let profileResponse = await supabase_default.from("profiles").update({ school: schoolResponse.data[0].id }).match({ id: response.user.id });
  console.log(profileResponse);
  let printboxResponse = await printbox_default.createCustomer(
    response.user.id,
    email
  );
  if (console.log("Printbox createCustomer: ", printboxResponse), response.user.id) {
    let result = await updateProfile(response.user.id, {
      printbox_customer_id: printboxResponse.customer_id
    }), sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let site_url = process.env.SITE_URL;
    var message = "Hi " + school_name + ",<br><br>";
    message += "Congratulations, you have free access to Pressclub until the end of the year.<br><br>", message += '<a href="' + site_url + '">Visit Pressclub</a><br><br>', message += "Regards,<br>Team Pressclub";
    let msg = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "Welcome to Pressclub",
      html: message
    };
    console.log("register-msg", msg), sgMail.send(msg);
  }
  return await createUserSession({
    id: response.user.id,
    ...printboxResponse,
    is_subscribed: !0,
    school_name
  }, "/");
}, meta25 = () => ({
  title: "Create account | Pressclub",
  description: "Create Pressclub account"
});
function Register() {
  (0, import_remix39.useLoaderData)();
  let errors = (0, import_remix39.useActionData)(), transition = (0, import_remix39.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h2", { children: "Subscribe - create an account" }, void 0, !1, {
      fileName: "app/routes/auth/register.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth/register.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "my3 red", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/auth/register.tsx",
      lineNumber: 152,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_remix39.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Email" }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "email", name: "email" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Email required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 159,
            columnNumber: 36
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/register.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Password" }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Password required" }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 167,
          columnNumber: 34
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/register.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("fieldset", { className: "my3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("legend", { children: "School" }, void 0, !1, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Name" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_name" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_name) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Name required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 176,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Postcode" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_postcode" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_postcode) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Postcode required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 183,
            columnNumber: 43
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Address Line 1" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_address_line_1" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 188,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_address_line_1) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Address Line 1 required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 190,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Address Line 2 (optional)" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_address_line_2" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "Town/City" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_city" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_city) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "Town/City required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 203,
            columnNumber: 39
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("label", { children: "County (if applicable)" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "text", name: "school_county" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this),
          (errors == null ? void 0 : errors.school_county) && /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mt1 red", children: "County required" }, void 0, !1, {
            fileName: "app/routes/auth/register.tsx",
            lineNumber: 210,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth/register.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/register.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Creating account" : "Create account" }, void 0, !1, {
        fileName: "app/routes/auth/register.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth/register.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth/register.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth/register.tsx",
    lineNumber: 147,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/register.tsx",
    lineNumber: 146,
    columnNumber: 5
  }, this);
}

// app/routes/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action10
});
var action10 = async ({
  request
}) => destroyUserSession(request);

// app/routes/auth/signin.tsx
var signin_exports = {};
__export(signin_exports, {
  action: () => action11,
  default: () => SignIn,
  loader: () => loader36,
  meta: () => meta26
});
var import_remix40 = __toESM(require_dist()), import_tiny_invariant7 = __toESM(require("tiny-invariant")), import_react14 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
async function loader36({ request }) {
  let url = new URL(request.url);
  console.log("url =======", url);
  let access_token = url.searchParams.get("access_token");
  console.log("access_token =======", access_token);
  let categoryPath_demo = process.env.CATEGORY_PATH_DEMO, user_session = "";
  return access_token ? user_session = await createUserSession({
    access_token
  }, "/auth/reset-password") : user_session = getUserSession(request), {
    usersession: user_session,
    categoryPath_demo
  };
}
var action11 = async ({ request }) => {
  var _a, _b, _c, _d;
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), errors = {};
  if (email || (errors.email = !0), password || (errors.password = !0), Object.keys(errors).length)
    return errors;
  (0, import_tiny_invariant7.default)(typeof email == "string"), (0, import_tiny_invariant7.default)(typeof password == "string");
  try {
    let response = await signIn({ email, password });
    if (console.log("Supabase Sign in: ", response), response.error)
      return errors.response = response.error.message, errors;
    let profileResponse = await getProfile(response.user.id);
    console.log("profileResponse:", profileResponse);
    let school_name = "";
    if (profileResponse && profileResponse.data && profileResponse.data[0] && ((_a = profileResponse.data[0]) != null && _a.school)) {
      let school = await getSchoolData((_b = profileResponse.data[0]) == null ? void 0 : _b.school);
      console.log("school:", school), school_name = school && school.data && school.data[0] && school.data[0].name ? school.data[0].name : "";
    }
    let printboxResponse = await printbox_default.getCustomerByEmail(response.user.email);
    return console.log("Printbox getCustomerByEmail: ", printboxResponse), printboxResponse.id === "not_found" ? (printboxResponse = await printbox_default.createCustomer(response.user.id, email), console.log("Printbox createCustomer: ", printboxResponse), createUserSession({
      id: response.user.id,
      ...printboxResponse.results[0],
      is_subscribed: ((_d = (_c = profileResponse.data[0]) == null ? void 0 : _c.subscriptions) == null ? void 0 : _d.length) > 0,
      ordered_project_id: null,
      ordered_quantity: null,
      school_name
    })) : printboxResponse.results[0] ? (printboxResponse = await printbox_default.loginCustomer(printboxResponse.results[0].customer_id), console.log("Printbox loginCustomer: ", printboxResponse), createUserSession({
      id: response.user.id,
      ...printboxResponse,
      is_subscribed: !0,
      ordered_project_id: null,
      ordered_quantity: null,
      school_name
    })) : (errors.response = "Unable to find Printbox user", errors);
  } catch (err) {
    return console.log(err), errors.response = "Something went wrong", errors;
  }
}, meta26 = () => ({
  title: "Sign in | Pressclub",
  description: "Sign in to Pressclub"
});
function SignIn() {
  (0, import_react14.useEffect)(() => {
    redirectToResetPasswordPage();
  }, []);
  let data = (0, import_remix40.useLoaderData)(), errors = (0, import_remix40.useActionData)(), transition = (0, import_remix40.useTransition)(), demo_url = "/demo/redirect-product-list?step=product_list&categoryPath=" + data.categoryPath_demo;
  async function redirectToResetPasswordPage() {
    let currentURL = window.location.href.replace(/#/g, "&"), params = new URLSearchParams(currentURL);
    params.has("type") && params.get("type") === "recovery" && (window.location.href = `/auth/signin?redirectTo=%2F&access_token=${params.get("access_token")}`);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "w100 mw25", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "tc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h2", { children: "Sign in" }, void 0, !1, {
      fileName: "app/routes/auth/signin.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth/signin.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this),
    (errors == null ? void 0 : errors.response) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "my3 red tc", children: errors == null ? void 0 : errors.response }, void 0, !1, {
      fileName: "app/routes/auth/signin.tsx",
      lineNumber: 162,
      columnNumber: 30
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_remix40.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mb1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("label", { children: "Email" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "email", name: "email" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt1 red", children: "Email required" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 170,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/signin.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mb3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("label", { children: "Password" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("input", { type: "password", name: "password" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 174,
          columnNumber: 13
        }, this),
        (errors == null ? void 0 : errors.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mt1 red", children: "Password required" }, void 0, !1, {
          fileName: "app/routes/auth/signin.tsx",
          lineNumber: 177,
          columnNumber: 34
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth/signin.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "mb3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("button", { type: "submit", disabled: Boolean(transition.submission), children: transition.submission ? "Signing in" : "Sign in" }, void 0, !1, {
        fileName: "app/routes/auth/signin.tsx",
        lineNumber: 180,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth/signin.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth/signin.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_remix40.Link, { className: "kingsthings tc red", to: "/auth/forgot-password", children: "Forgot password?" }, void 0, !1, {
      fileName: "app/routes/auth/signin.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth/signin.tsx",
    lineNumber: 153,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth/signin.tsx",
    lineNumber: 152,
    columnNumber: 5
  }, this);
}

// app/routes/demo/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => Index15,
  loader: () => loader37,
  meta: () => meta27
});
var import_remix41 = __toESM(require_dist());
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
async function loader37({ request }) {
  let session = await getUserSession(request), productFamilyId = process.env.PRODUCT_ID_DEMO;
  return { ...session, productFamilyId };
}
var meta27 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index15() {
  let session = (0, import_remix41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("script", { crossOrigin: "anonymous", src: "/js/demo.js" }, void 0, !1, {
      fileName: "app/routes/demo/editor.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(PrintboxDemoEmbed, { printboxSessionId: session == null ? void 0 : session.session_id, productFamilyId: session.productFamilyId }, void 0, !1, {
      fileName: "app/routes/demo/editor.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/editor.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/editor.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/demo/index.tsx
var demo_exports = {};
__export(demo_exports, {
  default: () => Index16,
  loader: () => loader38,
  meta: () => meta28
});
var import_remix42 = __toESM(require_dist());

// app/utils/product.ts
var Product = {
  getDemoProducts: async function() {
    try {
      return await supabase_default.from("demo_products").select("*");
    } catch (err) {
      return console.error(err), null;
    }
  }
}, product_default = Product;

// app/routes/demo/index.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
async function loader38({ request }) {
  let session = await getUserSession(request), demo_products = await product_default.getDemoProducts(), products = [];
  if (demo_products) {
    var products_data = demo_products.data;
    for (var i in products_data)
      products.push(products_data[i]);
  }
  return {
    session,
    products
  };
}
var meta28 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index16() {
  let data = (0, import_remix42.useLoaderData)(), products = data.products, createProject = (event, productId) => {
    location.href = "/demo/editor#&step=product_card&productId=" + productId + "&category=null", event.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "tc", children: data.products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { children: "Choose a product to edit" }, void 0, !1, {
      fileName: "app/routes/demo/index.tsx",
      lineNumber: 47,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "project_list_flex my3", children: data.products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "project_list_wrapper", id: product.product_id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("a", { href: "#", onClick: (event) => createProject(event, product.product_id), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("img", { className: "product-list-image", src: product.product_image, alt: "Printing Press Newspaper - pp_newspaper_stack" }, void 0, !1, {
        fileName: "app/routes/demo/index.tsx",
        lineNumber: 54,
        columnNumber: 27
      }, this) }, void 0, !1, {
        fileName: "app/routes/demo/index.tsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: product.product_name }, void 0, !1, {
        fileName: "app/routes/demo/index.tsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/demo/index.tsx",
      lineNumber: 52,
      columnNumber: 23
    }, this) }, product.id, !1, {
      fileName: "app/routes/demo/index.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/demo/index.tsx",
      lineNumber: 49,
      columnNumber: 19
    }, this) }, void 0, !1, {
      fileName: "app/routes/demo/index.tsx",
      lineNumber: 48,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 46,
    columnNumber: 15
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("h2", { children: "No demo products available" }, void 0, !1, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 65,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 64,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/demo/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/subscribe.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  default: () => index12,
  loader: () => loader39,
  meta: () => meta29
});
var import_remix43 = __toESM(require_dist());
var import_stripe_js2 = require("@stripe/stripe-js"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
async function loader39({ request }) {
  let session = await getUserSession(request), stripe_value = process.env.STRIPE_PUBLIC_KEY, checkoutSession = "", url = new URL(request.url);
  console.log("url =====", url);
  let signUpValue = url.searchParams.get("signup");
  return console.log("signUpValue =====", signUpValue), session && session.session_id && (checkoutSession = await createSubscriptionSession(session.email)), {
    signUpValue,
    session,
    checkout_session: checkoutSession,
    stripe_value
  };
}
var meta29 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function index12() {
  let data = (0, import_remix43.useLoaderData)(), setSubscription = async (checkoutSessionId) => {
    console.log("stripe_value", data.stripe_value);
    let stripe3 = await (0, import_stripe_js2.loadStripe)(data.stripe_value);
    if (!stripe3 || !checkoutSessionId)
      return;
    stripe3.redirectToCheckout({ sessionId: checkoutSessionId.id }).error && alert("Sorry, please try again later");
  };
  return data && data.signUpValue && setSubscription(data.checkout_session), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "df justify-content-center my3", children: data.checkout_session && !data.signUpValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w100 mw25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "df justify-content-center my3 b p2 br2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w100 mw25", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { children: "Pressclub Subscription" }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { children: "A Pressclub subscription is required to access this feature. Join now for just \xA350 per year." }, void 0, !1, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "my3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("a", { href: "javascript:void(0);", onClick: () => setSubscription(data.checkout_session), className: "btn", children: "Subscribe now" }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "f1 grey-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { children: [
          "You will be redirected to our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/subscribe.tsx",
            lineNumber: 85,
            columnNumber: 54
          }, this),
          "payments provider Stripe."
        ] }, void 0, !0, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/subscribe.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/subscribe.tsx",
        lineNumber: 82,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 78,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_remix43.Link, { to: "/", className: "btn grey", children: "Back" }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/subscribe.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 75,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this) : null }, void 0, !1, {
    fileName: "app/routes/subscribe.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index17,
  loader: () => loader40,
  meta: () => meta30
});
var import_remix44 = __toESM(require_dist());
var import_react_tooltip3 = __toESM(require("react-tooltip")), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
async function loader40({ request }) {
  var _a;
  let session = await getUserSession(request);
  console.log("session: ", session);
  let user_categoryPath = process.env.CATEGORY_PATH_USER, url = new URL(request.url), checkoutSessionId = url.searchParams.get("session_id"), subscriptionAttempt = url.searchParams.get("subscription_attempt"), customer = await printbox_default.getCustomer(session.customer_id);
  console.log("customer: ", customer);
  let profile = await getProfile(session.id);
  console.log("PROFILE: ", profile);
  let school = await getSchoolData((_a = profile.data[0]) == null ? void 0 : _a.school);
  console.log("SCHOOL--:", school.data[0]);
  let completed_list = (await printbox_default.getProjectsCompleted(session.customer_id)).count, all_projects = await printbox_default.getProjects(session.customer_id), projects = [], projects_ids = [];
  if (all_projects) {
    var projects_data = all_projects.results;
    for (var i in projects_data)
      projects_data[i].is_saved && projects.push(projects_data[i]);
  }
  let edit_list = projects.length;
  if (session && session.session_id) {
    let delete_locked_projects = await project_default.deleteLockedProjects(session.session_id);
    if (checkoutSessionId) {
      let retreiveSession = await retrieveSubscriptionSession(checkoutSessionId);
      if (retreiveSession.is_session && retreiveSession.customer.email == session.email) {
        let getSubscription = await getCustomerSubscription(retreiveSession.customer.id);
        if (getSubscription.data[0].id) {
          let subscriptionDetail = await getCustomerSubscriptionById(getSubscription.data[0].id), getSubscriptionDates = await getSubscriptionStartEndDates(subscriptionDetail.current_period_start, subscriptionDetail.current_period_end), result = await updateProfile(session.id, {
            subscriptions: [getSubscription.data[0].id],
            subscription_start_date: getSubscriptionDates.subscription_start_date,
            subscription_end_date: getSubscriptionDates.subscription_end_date
          });
          console.log("result: ", result);
          let sgMail = require("@sendgrid/mail");
          sgMail.setApiKey(process.env.SENDGRID_API_KEY);
          let site_url = process.env.SITE_URL, school_name_new = school.data[0].name;
          console.log("school_name", school_name_new);
          var message = "Hi " + school_name_new + ",<br><br>";
          message += "You have successfully subscribed with Pressclub.<br><br>", message += '<a href="' + site_url + '">Visit Pressclub</a><br><br>', message += "Regards,<br>Team Pressclub";
          let msg = {
            to: session.email,
            from: process.env.FROM_EMAIL,
            subject: "Welcome to Pressclub",
            html: message
          };
          return console.log("dddddddddddddddddddd-", msg), sgMail.send(msg), await createUserSession({
            ...session,
            is_subscribed: !0
          }, "/?subscription_attempt=success");
        }
      } else
        retreiveSession.is_session || (subscriptionAttempt = "failed");
    }
  }
  return {
    session,
    checkout_session_id: checkoutSessionId,
    subscriptionAttempt,
    completed_list,
    edit_list,
    user_categoryPath
  };
}
var meta30 = () => ({
  title: "Pressclub",
  description: "Welcome to Pressclub"
});
function Index17() {
  let data = (0, import_remix44.useLoaderData)();
  console.log("SESSION--", data);
  let subscriptionStatus = "";
  return data.subscriptionAttempt == "success" ? subscriptionStatus = "Thanks for you subscription!<br>Check your email for confirmation" : data.subscriptionAttempt == "failed" ? subscriptionStatus = "Sorry, your subscription attempt failed.<br>Please try again later" : data.subscriptionAttempt == "cancelled" ? subscriptionStatus = "You have cancelled your subscription attempt.<br>Please try again later" : data.subscriptionAttempt == "subscription_cancelled" ? subscriptionStatus = "You have cancelled your subscription" : data.subscriptionAttempt == "subscription_cancelled_failed" ? subscriptionStatus = "Your subscription could not be cancelled.<br>Please try again later" : data.subscriptionAttempt == "payment_failed" ? subscriptionStatus = "Your payment failed.<br>Please try again later" : data.subscriptionAttempt == "payment_cancelled" && (subscriptionStatus = "You have cancelled your payment"), /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "df justify-content-center my3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "tc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h2", { dangerouslySetInnerHTML: { __html: subscriptionStatus } }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 176,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h2", { children: "What would you like to do?" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 177,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "my3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("a", { href: "/products/redirect-product-list?step=product_list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { type: "submit", className: "btn green btn-home-page", style: { width: "450px" }, children: "Start new project" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 180,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "my1 kingsthings margin-bottom" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("a", { href: `${data.edit_list > 0 ? "/projects" : "#"}`, "data-tip": !0, "data-for": "edit_list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { type: "submit", className: `${data.edit_list > 0 ? "btn teal btn-home-page" : "btn grey btn-home-page "}`, style: { width: "450px" }, children: "Edit project" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 184,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this),
      data.edit_list <= 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react_tooltip3.default, { id: "edit_list", type: "warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { children: "You don't currently have any projects underway" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 189,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 188,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 187,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 190,
        columnNumber: 34
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "my1 kingsthings margin-bottom" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("a", { href: `${data.completed_list > 0 ? "/projects/completed" : "#"}`, "data-tip": !0, "data-for": "completed_list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("button", { type: "submit", className: `${data.completed_list > 0 ? "btn teal btn-home-page" : "btn grey btn-home-page "}`, style: { width: "450px" }, children: "View completed projects" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 195,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this),
      data.completed_list <= 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react_tooltip3.default, { id: "completed_list", type: "warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { children: "You have no completed projects." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 200,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 199,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 198,
        columnNumber: 15
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_jsx_dev_runtime37.Fragment, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 201,
        columnNumber: 34
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 175,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 174,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this);
}

// app/routes/pay.tsx
var pay_exports = {};
__export(pay_exports, {
  default: () => Payments,
  loader: () => loader41
});
var import_remix45 = __toESM(require_dist()), import_react_stripe_js = require("@stripe/react-stripe-js"), import_stripe_js3 = require("@stripe/stripe-js");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), stripePromise = (0, import_stripe_js3.loadStripe)("pk_test_51LPsvMG5fV8tIkqhXvn9NPMJgkir7WDU3DZc6gO5WWngUYUaLdMSJiU0mg7k6BydG3DFNS42xcb0RbFPmo2JykwT00wsPxQoOG"), loader41 = async ({ request }) => {
  let url = new URL(request.url), projectId2 = url.searchParams.get("project_id"), product = await printbox_default.getProductdetails(projectId2), totalQty = url.searchParams.get("quantity"), amount = JSON.parse(totalQty) * Math.round(product.price_gross);
  return await createPaymentIntent(amount);
};
function Payments() {
  let options = {
    // passing the client secret obtained from the server
    clientSecret: (0, import_remix45.useLoaderData)().client_secret
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { style: { padding: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_react_stripe_js.Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_remix45.Outlet, {}, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/pay.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/routes/pay/success.tsx
var success_exports2 = {};
__export(success_exports2, {
  default: () => Success,
  loader: () => loader42
});
var import_remix46 = __toESM(require_dist());
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), loader42 = async ({ request }) => {
  let paymentIntentId = new URL(request.url).searchParams.get("payment_intent");
  return await retrievePaymentIntent(paymentIntentId);
};
function Success() {
  let paymentIntent = (0, import_remix46.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { children: "Success" }, void 0, !1, {
      fileName: "app/routes/pay/success.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { children: "You have successfully paid for your order. Thank you for your purchase." }, void 0, !1, {
      fileName: "app/routes/pay/success.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { children: [
      "PaymenIntent: ",
      paymentIntent.status
    ] }, void 0, !0, {
      fileName: "app/routes/pay/success.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pay/success.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/pay/index.tsx
var pay_exports2 = {};
__export(pay_exports2, {
  action: () => action12,
  default: () => PayForm,
  loader: () => loader43
});
var import_remix47 = __toESM(require_dist()), import_react_stripe_js2 = require("@stripe/react-stripe-js");
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
async function loader43({ request }) {
  let url = new URL(request.url), projectId2 = url.searchParams.get("project_id"), quantity = url.searchParams.get("quantity"), redirect_url = "https://pressclub1-pressclub.vercel.app/orders/confirm-payment", current_session2 = await getUserSession(request);
  return console.log("current_session2: ", current_session2), (await printbox_default.getProjectDetail(projectId2)).id == "not_found" ? (0, import_remix47.redirect)("/") : { projectId: projectId2, quantity, redirect_url };
}
var action12 = async ({ request }) => {
  let formData = await request.formData();
  return console.log(formData), await confirmPayment(formData), (0, import_remix47.redirect)("/pay/success");
};
function PayForm() {
  let submit = (0, import_remix47.useSubmit)(), stripe3 = (0, import_react_stripe_js2.useStripe)(), elements = (0, import_react_stripe_js2.useElements)(), data = (0, import_remix47.useLoaderData)();
  return console.log("yyyyyyyyyy-", data), /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_remix47.Form, { method: "post", onSubmit: async (event) => {
    if (event.preventDefault(), !stripe3 || !elements) {
      console.log("Stripe or elements not loaded");
      return;
    }
    let result = await stripe3.confirmPayment({
      elements,
      confirmParams: {
        return_url: data.redirect_url
      }
    });
    if (console.log("stripe result: ", result), result.error) {
      alert(result.error.message);
      let projectId2 = "/pay?project_id=" + data.projectId, quantity = "&quantity=" + data.quantity;
      location.href = projectId2 + quantity;
    }
    submit(event.currentTarget, { replace: !0 });
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("h1", { children: "Pay" }, void 0, !1, {
      fileName: "app/routes/pay/index.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_react_stripe_js2.PaymentElement, {}, void 0, !1, {
      fileName: "app/routes/pay/index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("button", { type: "submit", children: "Pay" }, void 0, !1, {
      fileName: "app/routes/pay/index.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/pay/index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pay/index.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b320c769", entry: { module: "/build/entry.client-5WZB7EK6.js", imports: ["/build/_shared/chunk-PBO3TKO5.js", "/build/_shared/chunk-RIGN3EGJ.js", "/build/_shared/chunk-5G3I4224.js", "/build/_shared/chunk-D7FMVHBA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WK7WPNDB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/auth/email-confirmation": { id: "routes/auth/email-confirmation", parentId: "root", path: "auth/email-confirmation", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/email-confirmation-SZBB3D55.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/forgot-password": { id: "routes/auth/forgot-password", parentId: "root", path: "auth/forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/forgot-password-EWOC6W3Y.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/logout": { id: "routes/auth/logout", parentId: "root", path: "auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/logout-RAX2HUSS.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/register": { id: "routes/auth/register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/register-7HJCVRWL.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/reset-password": { id: "routes/auth/reset-password", parentId: "root", path: "auth/reset-password", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/reset-password-TXTJXPMC.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/signin": { id: "routes/auth/signin", parentId: "root", path: "auth/signin", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/signin-ZJMGUNIY.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cancel-subscription": { id: "routes/cancel-subscription", parentId: "root", path: "cancel-subscription", index: void 0, caseSensitive: void 0, module: "/build/routes/cancel-subscription-AYY6P7IP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/editor": { id: "routes/demo/editor", parentId: "root", path: "demo/editor", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/editor-CZQLYQYT.js", imports: ["/build/_shared/chunk-G5H4QHXX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/freedemoeditor": { id: "routes/demo/freedemoeditor", parentId: "root", path: "demo/freedemoeditor", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/freedemoeditor-4RJI3DXK.js", imports: ["/build/_shared/chunk-G5H4QHXX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/index": { id: "routes/demo/index", parentId: "root", path: "demo", index: !0, caseSensitive: void 0, module: "/build/routes/demo/index-AXVTFKZC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo/redirect-product-list": { id: "routes/demo/redirect-product-list", parentId: "root", path: "demo/redirect-product-list", index: void 0, caseSensitive: void 0, module: "/build/routes/demo/redirect-product-list-WAAZ5CHQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-H2XNVB4T.js", imports: ["/build/_shared/chunk-Y3OFAMGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index.$productFamilyId": { id: "routes/index.$productFamilyId", parentId: "root", path: ":productFamilyId", index: void 0, caseSensitive: void 0, module: "/build/routes/index.$productFamilyId-RZUTHRTQ.js", imports: ["/build/_shared/chunk-IIX5AW6F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/myaccount/change-password": { id: "routes/myaccount/change-password", parentId: "root", path: "myaccount/change-password", index: void 0, caseSensitive: void 0, module: "/build/routes/myaccount/change-password-GYWQYOE4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/myaccount/myaccount": { id: "routes/myaccount/myaccount", parentId: "root", path: "myaccount/myaccount", index: void 0, caseSensitive: void 0, module: "/build/routes/myaccount/myaccount-EINZAMD4.js", imports: ["/build/_shared/chunk-YIAUFWGL.js", "/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/myaccount/send-cancel-subscription": { id: "routes/myaccount/send-cancel-subscription", parentId: "root", path: "myaccount/send-cancel-subscription", index: void 0, caseSensitive: void 0, module: "/build/routes/myaccount/send-cancel-subscription-742FDIGW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/myaccount/update-school-details": { id: "routes/myaccount/update-school-details", parentId: "root", path: "myaccount/update-school-details", index: void 0, caseSensitive: void 0, module: "/build/routes/myaccount/update-school-details-5ZCS5QSZ.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/newspapers-print-success": { id: "routes/newspapers-print-success", parentId: "root", path: "newspapers-print-success", index: void 0, caseSensitive: void 0, module: "/build/routes/newspapers-print-success-V7SPM5RF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/confirm-order": { id: "routes/orders/confirm-order", parentId: "root", path: "orders/confirm-order", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/confirm-order-SI6WWLQH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/confirm-payment": { id: "routes/orders/confirm-payment", parentId: "root", path: "orders/confirm-payment", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/confirm-payment-A75S2MGK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/delivery-details": { id: "routes/orders/delivery-details", parentId: "root", path: "orders/delivery-details", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/delivery-details-NTZJ276I.js", imports: ["/build/_shared/chunk-Y3OFAMGI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/delivery-success": { id: "routes/orders/delivery-success", parentId: "root", path: "orders/delivery-success", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/delivery-success-LZN2MG7S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/download-pdf": { id: "routes/orders/download-pdf", parentId: "root", path: "orders/download-pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/download-pdf-QUA47O4I.js", imports: ["/build/_shared/chunk-KE7J5HSE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/order-failed": { id: "routes/orders/order-failed", parentId: "root", path: "orders/order-failed", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/order-failed-REZTQODV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/payment-confirm": { id: "routes/orders/payment-confirm", parentId: "root", path: "orders/payment-confirm", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/payment-confirm-PUWU77OJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/send-to-printers": { id: "routes/orders/send-to-printers", parentId: "root", path: "orders/send-to-printers", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/send-to-printers-AL2AMQWX.js", imports: ["/build/_shared/chunk-YIAUFWGL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/send-to-printers-old": { id: "routes/orders/send-to-printers-old", parentId: "root", path: "orders/send-to-printers-old", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/send-to-printers-old-SNTI6BXG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/set-checkout": { id: "routes/orders/set-checkout", parentId: "root", path: "orders/set-checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/set-checkout-NG2IWQ3Z.js", imports: ["/build/_shared/chunk-66QGG753.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/set-session": { id: "routes/orders/set-session", parentId: "root", path: "orders/set-session", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/set-session-ZKS7WNZ5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/orders/success": { id: "routes/orders/success", parentId: "root", path: "orders/success", index: void 0, caseSensitive: void 0, module: "/build/routes/orders/success-HUA7MBUT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pay": { id: "routes/pay", parentId: "root", path: "pay", index: void 0, caseSensitive: void 0, module: "/build/routes/pay-LMD2C5PG.js", imports: ["/build/_shared/chunk-5RCFWWSJ.js", "/build/_shared/chunk-66QGG753.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pay/index": { id: "routes/pay/index", parentId: "routes/pay", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/pay/index-3JCB4UUY.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pay/success": { id: "routes/pay/success", parentId: "routes/pay", path: "success", index: void 0, caseSensitive: void 0, module: "/build/routes/pay/success-WOZHTOQB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-MHPUI3YS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/index": { id: "routes/products/index", parentId: "root", path: "products", index: !0, caseSensitive: void 0, module: "/build/routes/products/index-QRHCZU5A.js", imports: ["/build/_shared/chunk-IIX5AW6F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/redirect-product-card": { id: "routes/products/redirect-product-card", parentId: "root", path: "products/redirect-product-card", index: void 0, caseSensitive: void 0, module: "/build/routes/products/redirect-product-card-CQRJFVY6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/redirect-product-list": { id: "routes/products/redirect-product-list", parentId: "root", path: "products/redirect-product-list", index: void 0, caseSensitive: void 0, module: "/build/routes/products/redirect-product-list-PKC2SMZT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/completed": { id: "routes/projects/completed", parentId: "root", path: "projects/completed", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/completed-IOZLVNZC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/copy-project": { id: "routes/projects/copy-project", parentId: "root", path: "projects/copy-project", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/copy-project-QR2VB6ID.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/copy-project-free-user": { id: "routes/projects/copy-project-free-user", parentId: "root", path: "projects/copy-project-free-user", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/copy-project-free-user-YAMQJFRS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/deleteproject": { id: "routes/projects/deleteproject", parentId: "root", path: "projects/deleteproject", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/deleteproject-JMFL4DDZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/index": { id: "routes/projects/index", parentId: "root", path: "projects", index: !0, caseSensitive: void 0, module: "/build/routes/projects/index-T3Z2OHZK.js", imports: ["/build/_shared/chunk-Y3OFAMGI.js", "/build/_shared/chunk-YIAUFWGL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/lockproject": { id: "routes/projects/lockproject", parentId: "root", path: "projects/lockproject", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/lockproject-F2GSL3DY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects/set-session": { id: "routes/projects/set-session", parentId: "root", path: "projects/set-session", index: void 0, caseSensitive: void 0, module: "/build/routes/projects/set-session-ONQTTKHE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-RRB5RJYN.js", imports: ["/build/_shared/chunk-66QGG753.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscription-already-cancelled": { id: "routes/subscription-already-cancelled", parentId: "root", path: "subscription-already-cancelled", index: void 0, caseSensitive: void 0, module: "/build/routes/subscription-already-cancelled-7UWCHEGR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscription-reminder": { id: "routes/subscription-reminder", parentId: "root", path: "subscription-reminder", index: void 0, caseSensitive: void 0, module: "/build/routes/subscription-reminder-4HDM5SYU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscription-success": { id: "routes/subscription-success", parentId: "root", path: "subscription-success", index: void 0, caseSensitive: void 0, module: "/build/routes/subscription-success-LTHLU4WE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms-and-conditions": { id: "routes/terms-and-conditions", parentId: "root", path: "terms-and-conditions", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-and-conditions-T7GE5DYF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-B320C769.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/myaccount/send-cancel-subscription": {
    id: "routes/myaccount/send-cancel-subscription",
    parentId: "root",
    path: "myaccount/send-cancel-subscription",
    index: void 0,
    caseSensitive: void 0,
    module: send_cancel_subscription_exports
  },
  "routes/myaccount/update-school-details": {
    id: "routes/myaccount/update-school-details",
    parentId: "root",
    path: "myaccount/update-school-details",
    index: void 0,
    caseSensitive: void 0,
    module: update_school_details_exports
  },
  "routes/projects/copy-project-free-user": {
    id: "routes/projects/copy-project-free-user",
    parentId: "root",
    path: "projects/copy-project-free-user",
    index: void 0,
    caseSensitive: void 0,
    module: copy_project_free_user_exports
  },
  "routes/products/redirect-product-card": {
    id: "routes/products/redirect-product-card",
    parentId: "root",
    path: "products/redirect-product-card",
    index: void 0,
    caseSensitive: void 0,
    module: redirect_product_card_exports
  },
  "routes/products/redirect-product-list": {
    id: "routes/products/redirect-product-list",
    parentId: "root",
    path: "products/redirect-product-list",
    index: void 0,
    caseSensitive: void 0,
    module: redirect_product_list_exports
  },
  "routes/subscription-already-cancelled": {
    id: "routes/subscription-already-cancelled",
    parentId: "root",
    path: "subscription-already-cancelled",
    index: void 0,
    caseSensitive: void 0,
    module: subscription_already_cancelled_exports
  },
  "routes/orders/send-to-printers-old": {
    id: "routes/orders/send-to-printers-old",
    parentId: "root",
    path: "orders/send-to-printers-old",
    index: void 0,
    caseSensitive: void 0,
    module: send_to_printers_old_exports
  },
  "routes/demo/redirect-product-list": {
    id: "routes/demo/redirect-product-list",
    parentId: "root",
    path: "demo/redirect-product-list",
    index: void 0,
    caseSensitive: void 0,
    module: redirect_product_list_exports2
  },
  "routes/myaccount/change-password": {
    id: "routes/myaccount/change-password",
    parentId: "root",
    path: "myaccount/change-password",
    index: void 0,
    caseSensitive: void 0,
    module: change_password_exports
  },
  "routes/newspapers-print-success": {
    id: "routes/newspapers-print-success",
    parentId: "root",
    path: "newspapers-print-success",
    index: void 0,
    caseSensitive: void 0,
    module: newspapers_print_success_exports
  },
  "routes/auth/email-confirmation": {
    id: "routes/auth/email-confirmation",
    parentId: "root",
    path: "auth/email-confirmation",
    index: void 0,
    caseSensitive: void 0,
    module: email_confirmation_exports
  },
  "routes/orders/delivery-details": {
    id: "routes/orders/delivery-details",
    parentId: "root",
    path: "orders/delivery-details",
    index: void 0,
    caseSensitive: void 0,
    module: delivery_details_exports
  },
  "routes/orders/delivery-success": {
    id: "routes/orders/delivery-success",
    parentId: "root",
    path: "orders/delivery-success",
    index: void 0,
    caseSensitive: void 0,
    module: delivery_success_exports
  },
  "routes/orders/send-to-printers": {
    id: "routes/orders/send-to-printers",
    parentId: "root",
    path: "orders/send-to-printers",
    index: void 0,
    caseSensitive: void 0,
    module: send_to_printers_exports
  },
  "routes/index.$productFamilyId": {
    id: "routes/index.$productFamilyId",
    parentId: "root",
    path: ":productFamilyId",
    index: void 0,
    caseSensitive: void 0,
    module: index_productFamilyId_exports
  },
  "routes/orders/confirm-payment": {
    id: "routes/orders/confirm-payment",
    parentId: "root",
    path: "orders/confirm-payment",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_payment_exports
  },
  "routes/orders/payment-confirm": {
    id: "routes/orders/payment-confirm",
    parentId: "root",
    path: "orders/payment-confirm",
    index: void 0,
    caseSensitive: void 0,
    module: payment_confirm_exports
  },
  "routes/projects/deleteproject": {
    id: "routes/projects/deleteproject",
    parentId: "root",
    path: "projects/deleteproject",
    index: void 0,
    caseSensitive: void 0,
    module: deleteproject_exports
  },
  "routes/projects/copy-project": {
    id: "routes/projects/copy-project",
    parentId: "root",
    path: "projects/copy-project",
    index: void 0,
    caseSensitive: void 0,
    module: copy_project_exports
  },
  "routes/subscription-reminder": {
    id: "routes/subscription-reminder",
    parentId: "root",
    path: "subscription-reminder",
    index: void 0,
    caseSensitive: void 0,
    module: subscription_reminder_exports
  },
  "routes/auth/forgot-password": {
    id: "routes/auth/forgot-password",
    parentId: "root",
    path: "auth/forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/orders/confirm-order": {
    id: "routes/orders/confirm-order",
    parentId: "root",
    path: "orders/confirm-order",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_order_exports
  },
  "routes/projects/lockproject": {
    id: "routes/projects/lockproject",
    parentId: "root",
    path: "projects/lockproject",
    index: void 0,
    caseSensitive: void 0,
    module: lockproject_exports
  },
  "routes/projects/set-session": {
    id: "routes/projects/set-session",
    parentId: "root",
    path: "projects/set-session",
    index: void 0,
    caseSensitive: void 0,
    module: set_session_exports
  },
  "routes/subscription-success": {
    id: "routes/subscription-success",
    parentId: "root",
    path: "subscription-success",
    index: void 0,
    caseSensitive: void 0,
    module: subscription_success_exports
  },
  "routes/terms-and-conditions": {
    id: "routes/terms-and-conditions",
    parentId: "root",
    path: "terms-and-conditions",
    index: void 0,
    caseSensitive: void 0,
    module: terms_and_conditions_exports
  },
  "routes/auth/reset-password": {
    id: "routes/auth/reset-password",
    parentId: "root",
    path: "auth/reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: reset_password_exports
  },
  "routes/cancel-subscription": {
    id: "routes/cancel-subscription",
    parentId: "root",
    path: "cancel-subscription",
    index: void 0,
    caseSensitive: void 0,
    module: cancel_subscription_exports
  },
  "routes/demo/freedemoeditor": {
    id: "routes/demo/freedemoeditor",
    parentId: "root",
    path: "demo/freedemoeditor",
    index: void 0,
    caseSensitive: void 0,
    module: freedemoeditor_exports
  },
  "routes/myaccount/myaccount": {
    id: "routes/myaccount/myaccount",
    parentId: "root",
    path: "myaccount/myaccount",
    index: void 0,
    caseSensitive: void 0,
    module: myaccount_exports
  },
  "routes/orders/download-pdf": {
    id: "routes/orders/download-pdf",
    parentId: "root",
    path: "orders/download-pdf",
    index: void 0,
    caseSensitive: void 0,
    module: download_pdf_exports
  },
  "routes/orders/order-failed": {
    id: "routes/orders/order-failed",
    parentId: "root",
    path: "orders/order-failed",
    index: void 0,
    caseSensitive: void 0,
    module: order_failed_exports
  },
  "routes/orders/set-checkout": {
    id: "routes/orders/set-checkout",
    parentId: "root",
    path: "orders/set-checkout",
    index: void 0,
    caseSensitive: void 0,
    module: set_checkout_exports
  },
  "routes/orders/set-session": {
    id: "routes/orders/set-session",
    parentId: "root",
    path: "orders/set-session",
    index: void 0,
    caseSensitive: void 0,
    module: set_session_exports2
  },
  "routes/projects/completed": {
    id: "routes/projects/completed",
    parentId: "root",
    path: "projects/completed",
    index: void 0,
    caseSensitive: void 0,
    module: completed_exports
  },
  "routes/orders/success": {
    id: "routes/orders/success",
    parentId: "root",
    path: "orders/success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/products/index": {
    id: "routes/products/index",
    parentId: "root",
    path: "products",
    index: !0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: !0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/signin": {
    id: "routes/auth/signin",
    parentId: "root",
    path: "auth/signin",
    index: void 0,
    caseSensitive: void 0,
    module: signin_exports
  },
  "routes/demo/editor": {
    id: "routes/demo/editor",
    parentId: "root",
    path: "demo/editor",
    index: void 0,
    caseSensitive: void 0,
    module: editor_exports
  },
  "routes/demo/index": {
    id: "routes/demo/index",
    parentId: "root",
    path: "demo",
    index: !0,
    caseSensitive: void 0,
    module: demo_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/pay": {
    id: "routes/pay",
    parentId: "root",
    path: "pay",
    index: void 0,
    caseSensitive: void 0,
    module: pay_exports
  },
  "routes/pay/success": {
    id: "routes/pay/success",
    parentId: "routes/pay",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports2
  },
  "routes/pay/index": {
    id: "routes/pay/index",
    parentId: "routes/pay",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: pay_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

remix/dist/index.js:
  (**
   * @remix-run/node v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/server-runtime v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
  (**
   * @remix-run/react v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
