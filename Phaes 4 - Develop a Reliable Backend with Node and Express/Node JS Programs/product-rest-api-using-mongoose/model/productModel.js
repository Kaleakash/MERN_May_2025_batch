let mongoose = require("mongoose");
mongoose.pluralize(null);           // it doesn't follow pluralize rule 

let productSchema  = new mongoose.Schema({
    pid: {
        type:Number,
        required:[true,"Product Id required"],
        unique:true
    },
    pname:{
        type:String,
        required:[true,"Product Name required"],
        minLength:[5,"Product Name must be contains min 5 character"],
        maxLength:[10,"Product Name must be contains max 10 character"],
    },
    price: {
        type:Number,
        required:[true,"Product Price required"],
        min:[1000,"Price must be >=1000"],
        max:[50000,"Price must be <=50000"]
    }
})
// by default collection create with name as products
let productModel = mongoose.model("ProductDetails",productSchema)
module.exports= productModel;