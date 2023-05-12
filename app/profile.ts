import supabase from "./utils/supabase";

export async function getProfile(userId: string) {
  try {
    const response = await supabase
      .from("profiles")
      .select("*")
      .match({ id: userId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getSchoolData(userId: any) {
  try {
    const response = await supabase
      .from("schools")
      .select("*")
      .match({ id: userId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateSchoolData(data: any) { console.log(data);
  try {

    const response = await supabase
        .from("schools")
        .upsert(data)

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProfile(userId: string, data: any) {
  try {
    const response = await supabase
      .from("profiles")
      .update(data)
      .match({ id: userId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getCurrentPassword(current_plain_password: any, new_plain_password: any, user_email: any) { 
   console.log('cp',current_plain_password); console.log('user_email', user_email);
  try {
    
      let response = await supabase
          .rpc('update_user_password', {
            new_plain_password, 
            current_plain_password,
            user_email
          })

     return response;

  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getSubscriptionReminders(date) {
  try {
    const response = await supabase
      .from("profiles")
      .select("*")
      .eq('subscription_end_date', date)

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getProfileByPrintboxCustomerId(customerId: string) {
  try {
    const response = await supabase
      .from("profiles")
      .select("*")
      .match({ printbox_customer_id: customerId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}
