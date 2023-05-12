import supabase from "./utils/supabase";

export async function getRenders(orderId: string) {
  try {
    const response = await supabase
      .from("renders")
      .select("*")
      .match({ order_id: orderId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}
