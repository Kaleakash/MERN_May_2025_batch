// custom promise example
let obj = new Promise((resolve,rejected)=> {
    //resolve("Hello, this is a custom promise example!"),
    rejected("This is an error message from the custom promise example! Error generated intentionally.");
})


obj.then(data=>console.log("then called "+data)).catch(error=>console.log("error called "+error));

console.log("hello");
console.log("hi");
console.log("how r you");