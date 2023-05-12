import { ActionFunction, LoaderFunction, redirect, useLoaderData } from "remix";
import { destroyUserSession } from "~/sessions";

export const action: ActionFunction = async ({
  request
}) => {
  return destroyUserSession(request);
};
