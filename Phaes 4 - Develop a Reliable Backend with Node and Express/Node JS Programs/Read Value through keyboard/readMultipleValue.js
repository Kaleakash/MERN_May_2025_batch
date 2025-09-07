let obj = require("readline");
let readline = obj.createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter the id: ",(id)=>{
    

    readline.question("Enter the fname: ",(fname)=>{

        readline.question("Enter the salary: ",(salary)=>{
        
            console.log("Id: "+id);
            console.log("Fname: "+fname);
            console.log("Salary: "+salary);
            
            readline.close();
        })

    })

})



