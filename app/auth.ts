import { UserCredentials } from "@supabase/gotrue-js/src/lib/types";
import supabase from "./utils/supabase";

export async function signIn(creds: UserCredentials) {
  try {
    const response = await supabase.auth.signIn(creds);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function register(
  creds: UserCredentials,
  options: {
    redirectTo?: string;
    data?: any;
  } = {}
) {
  try {
    const response: any = await supabase.auth.signUp(creds, options);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function signOut() {
  try {
    await supabase.auth.signOut();
    return true;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function forgotPassword(
  creds: {
    email?: string
  }
) {
  try {
    console.log("Cred =========", creds)
    let email = creds.email  || ""
    const response: any = await supabase.auth.api.resetPasswordForEmail(email);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function resetPassword(
  creds: {
    password?: string
    access_token?: string
  }
) {
  try {
    console.log("Cred =========", creds)
    let new_password = creds.password  || ""
    let access_token = creds.access_token  || ""
    const response: any = await supabase.auth.api.updateUser(access_token, { password : new_password })
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}