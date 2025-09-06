var fs = require("fs");
console.log("fs module loaded");
let data = "This is a sample text to be written to a file.";
// writeFile
// takes 3 parameter 
// 1. file name
// 2. data to be written
// 3. callback function which will be called after writing is done
// line 10 to 16 is asynchronous
fs.writeFile("sample.txt",data,(error)=> {
    if(error){
        console.log("Error in writing file",error);
    }else {
        console.log("File written successfully");
    }
});
console.log("1st Task done");
console.log("2rd Task done");
console.log("3rd Task done");