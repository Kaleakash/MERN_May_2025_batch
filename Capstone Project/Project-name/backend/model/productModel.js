let mongoose = require("mongoose");
mongoose.pluralize(null);           // it doesn't follow pluralize rule 
// provide schema details 
let productSchema  = new mongoose.Schema({
    pid: {
        type:Number,
        required:[true,"Product Id is required"],
        unique:true
    },
    pname:{
        type:String,
        required:[true,"PName is required"],
    },
    price: {
        type:Number,
        required:[true,"Price is required"],
    },
    imageUrl: {
        type:String,
        required:[true,"Image is required"],
    },
})

let productModel = mongoose.model("Product",productSchema)
module.exports= productModel;