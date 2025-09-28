let mongoose = require("mongoose");
mongoose.pluralize(null);           // it doesn't follow pluralize rule 
// provide schema details 
let loginSchema  = new mongoose.Schema({
    emailId: {
        type:String,
        required:[true,"EmailId is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    typeOfUser: {
        type:String,
        enum:["customer","admin"],
        required:[true,"Type of user required"]
    }
})

let loginModel = mongoose.model("Login",loginSchema)
module.exports= loginModel;