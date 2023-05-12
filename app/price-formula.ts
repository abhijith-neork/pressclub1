import supabase from "./utils/supabase";

export async function getPriceFormulaByNameCode(nameCode: string) {
  try {
    const response = await supabase
      .from("price_formula")
      .select("*")
      .match({ name_code: nameCode });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getCategory(categoryId: string) {
  try {
    const response = await supabase
      .from("category_price")
      .select("*")
      .match({ printbox_category_id: categoryId });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getQuantitiesByNameCode(nameCode: string) {
  try {
    const response = await supabase
      .from("category_quantity")
      .select("*")
      .match({ price_formula_name_code: nameCode });

    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}