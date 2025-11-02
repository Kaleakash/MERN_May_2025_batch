import { useEffect, useState } from "react";
import { findProduct } from "../service/productApiService";

function CustomerViewProduct() {
let [products,setProducts]=useState([]);

useEffect(()=> {
    let loadData = async()=> {
        let result = await findProduct()
        //console.log(result);
        setProducts(result);
    }
    loadData();
    
},[])
    return(
        <div>
            <h2>Customer View Product</h2>
            <div>
            {
                products.map((product,index)=>
    <span key={index} style={{"display":"inline-block","border":"2px solid red","margin":"10px","padding":"10px","borderRadius":"30px"}}>
                <img src={product.imageUrl} width="100px" height="100px" />
                <b>{product.pname} {product.price}</b>   
                </span>
                )
            }               
            </div>
        </div>
    )
}

export default CustomerViewProduct;