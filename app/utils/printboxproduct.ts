import moment from "dayjs";
const crypto = require("crypto");

const baseUri = process.env.PRINTBOX_URL;
const apiKey = process.env.PRINTBOX_API_KEY;
const secret = process.env.PRINTBOX_SECRET;
const version = process.env.PRINTBOX_VERSION;

const PrintboxProduct = { 
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
  },

  getPhoto: async function (uuid: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "GET";
    const endpoint = `/api/ec/photos/${uuid}/`;

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

  createProject: async function (name: string, family: string, store: string, product: string, customer: string) {
    const version = "v3";
    const datetime = moment(new Date()).format("YYYY-MM-DDTHH:mm:ssZ");

    const method = "POST";
    const endpoint = "/api/ec/projects/";

    const params = {
        'cover_workspace': {
            'name' : 'Tabloid',
        }
    };
    const payload = JSON.stringify({
      name,
      family,
      store,
      product,
      params,
      customer
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
  }
};

export default PrintboxProduct;
