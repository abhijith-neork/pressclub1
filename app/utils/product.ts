import supabase from "../utils/supabase";

const Product = { 
    getDemoProducts : async function () {
        try {
            const response = await supabase
            .from("demo_products")
            .select("*");

            return response;
        } catch (err) {
            console.error(err);
            return null;
        }
    }
};

export default Product;