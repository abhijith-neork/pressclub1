//const { createRequestHandler } = require("@remix-run/vercel");
//import { createRequestHandler } from "@remix-run/vercel";
import  createRequestHandler   from '@remix-run/node';

const createRequestHandler  = createRequestHandler;
module.exports = createRequestHandler({
  build: require("./_build")
});
//import { createRequestHandler } from "@remix-run/vercel";
