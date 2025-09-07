let obj = require("readline");
let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter a value: ",(data)=>{
    console.log("You entered: "+data);
    readline.close();
})