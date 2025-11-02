import axios from "axios";

let PRODUCT_BASE_URL = "http://localhost:9090/product";

export let storeProductInDb = async (product)=> {
    let result = await axios.post(PRODUCT_BASE_URL+"/store",product)
    return result.data;
}

export let findProduct = async ()=> {
    let result = await axios.get(PRODUCT_BASE_URL+"/find")
    return result.data;
}

