import {useState} from 'react';
function ProductOperation() {
let [products,setProducts]=useState([]);
let [product,setProduct]=useState({
    id:"",
    name:"",
    price:"",
    quantity:""
})
let addProduct = () => {
    console.log(product)
    setProducts([...products,product]); // ...products hold existing products and product added new product 
    setProduct({id:"",name:"",price:"",quantity:""}); 
}
return (
    <div>
        <h4>Product Operation</h4>
        <span>Number of Products: {products.length}</span>
        <form>
            <label>PId</label>
    <input type="number" name="id" onChange={(event)=>setProduct({...product,"id":event.target.value})}
    value={product.id}/><br/>
            <label>PName</label>
            <input type="text" name="name" onChange={(event)=>setProduct({...product,"name":event.target.value})}
            value={product.name}/><br/>
            <label>Price</label>
            <input type="number" name="price" onChange={(event)=>setProduct({...product,"price":event.target.value})}
            value={product.price}/><br/>
            <label>Qty</label>
            <input type="number" name="quantity" onChange={(event)=>setProduct({...product,"quantity":event.target.value})}
            value={product.quantity}/><br/>
            <input type="button" value="Add Product" onClick = {addProduct}/>
        </form>
        <hr/>
        <table border="1">
            <thead>
                <tr>
                    <th>PId</th>
                    <th>PName</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product,index)=>
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
)
}

export default ProductOperation;