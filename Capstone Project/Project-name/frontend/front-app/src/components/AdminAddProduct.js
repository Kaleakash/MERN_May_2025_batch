import { useState } from "react";
import {storeProductInDb}  from "../service/productApiService";

function AdminAddProduct() {
let [pid,setPid]=useState("");
let [pname,setPName]=useState("");
let [price,setPrice]=useState("");
let [imageUrl,setImageUrl]=useState("");
let [msg,setMessage]=useState("");

let storeProduct= async (event)=> {
    event.preventDefault();
    let product = {pid,pname,price,imageUrl}
    console.log(product)
    let result = await storeProductInDb(product);
    console.log(result.msg)
    setMessage(result.msg);
    setPid("");
    setPName("");
    setPrice("");
    setImageUrl("")
}
    return(
        <div>
            <h2>Admin Add Product</h2>
            <span style={{"color":"red"}}>{msg}</span>
            <form onSubmit={storeProduct}>
                <label>PId</label>
                <input type="number" name="pid" value={pid} 
                onChange={(event)=>setPid(event.target.value)}/><br/>

                <label>PName</label>
                <input type="text" name="pname" value={pname} 
                onChange={(event)=>setPName(event.target.value)}/><br/>

                <label>Price</label>
                <input type="number" name="price" value={price} 
                onChange={(event)=>setPrice(event.target.value)}/><br/>

                <label>Image URL</label>
                <input type="url" name="imageUrl" value={imageUrl} 
                onChange={(event)=>setImageUrl(event.target.value)}/><br/>

                <input type="submit" value="Store Product"/>
                <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default AdminAddProduct;