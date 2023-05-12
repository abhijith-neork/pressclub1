import moment from "dayjs";
const crypto = require("crypto");

const baseUri = process.env.PRINTBOX_URL;
const apiKey = process.env.PRINTBOX_API_KEY;
const secret = process.env.PRINTBOX_SECRET;
const version = process.env.PRINTBOX_VERSION;

const Printbox = {
  getCustomer: async function (customerID: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/customers/${customerID}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getCustomerByEmail: async function (email: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/customers/`;
    const query = `email=${encodeURIComponent(email)}`;

    const payload = "";

    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  createCustomer: async function (username: string, email: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = "/api/ec/customers/";

    const payload = JSON.stringify({
      username,
      email,
    });
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  loginCustomer: async function (username: string, email?: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = `/api/ec/customers/${username}/login/`;

    const payload = JSON.stringify({
      username,
      email,
    });
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  createOrder: async function (customer: any, projects: any) {
    const number = Math.random().toString().substring(10);

    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = `/api/ec/orders/`;

    const payload = JSON.stringify({
      number,
      projects,
      customer,
    });
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  setOrderAsPaid: async function (orderNumber: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = `/api/ec/orders/${orderNumber}/paid/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getOrder: async function (orderNumber: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/orders/${orderNumber}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getProductdetails: async function (uuid: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/projects/${uuid}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  updateproject: async function (uuid: any, price_gross: any, page_count:any) {
    const number = Math.random().toString().substring(10);

    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = `/api/ec/projects/${uuid}/`;

    const order_status = "paid";

    const payload = JSON.stringify({
      price_gross,
      page_count,
      uuid,
      order_status
    });
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getProjects: async function (customerID: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/projects/`;
    const query = `customer_id=${encodeURIComponent(customerID)}&is_ordered=false`;

    const payload = "";

    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));    
  },

  deleteProject: async function (uuid: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "DELETE";
    const endpoint = `/api/ec/projects/${uuid}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getProjectDetail: async function (projectID: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/projects/${projectID}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err)); 
  },

  getProjectsCompleted: async function (customerID: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/projects/`;
    const query = `customer_id=${encodeURIComponent(customerID)}&is_ordered=true`;

    const payload = "";

    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}
${query}
date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}?${query}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));    
  },

  copyProject: async function (projectID: string) {
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = `/api/ec/projects/${projectID}/duplicate/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err)); 
  },

  updateProjectUserid: async function (uuid: any, customer_id: any) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "PUT";
    const endpoint = `/api/ec/projects/${uuid}/`;

    const payload = JSON.stringify({
      customer_id
    });  console.log(payload);
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  },

  getProduct: async function (id: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/products/${id}/`;

    const payload = "";
    const hashedPayload = crypto
      .createHash("sha256")
      .update(payload)
      .digest("hex");

    const stringToSign = `${method}
${endpoint}

date:${datetime}
x-version:${version}

date;x-version
${hashedPayload}`;

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(stringToSign)
      .digest("base64");

    return fetch(`${baseUri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Version": version,
        Date: datetime,
        Authorization: `Signature ApiKey="${apiKey}", Algorithm="hmac-sha256", SignedHeaders="date;x-version", Signature="${generatedSignature}"`,
      },
      // body: payload,
    })
      .then((response) => response.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  }
};

export default Printbox;
