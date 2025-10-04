let bcryptjs = require("bcryptjs");
let originalPassword = "steven@123";
let wrongPassword = "steven@12345";

bcryptjs.genSalt(10,(err,salt)=> {
    if(err){
        console.log("error generated "+err.message)
    }else {
        bcryptjs.hash(originalPassword,salt).then(hashPassword=>{
            console.log(hashPassword)
            console.log(originalPassword)
            console.log("check hash password correct or not")   
            bcryptjs.compare(wrongPassword,hashPassword,(err1,result)=>{
                if(err1){
                    console.log("error generated while comparing "+err1.message)
                }else {
                    //console.log("correct ")
                    console.log(result)
                }
            })
        }).catch(error=>{
            console.log(error.message)
        })
    }
})