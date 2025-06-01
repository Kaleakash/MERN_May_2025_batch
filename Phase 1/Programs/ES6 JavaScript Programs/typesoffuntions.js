// normal style functions   JS hosting 
display1();

function display1() {
    console.log("normal style function")
}
display1();
// expression style function 
//display2();             // it doesn't support JS hosting features 
let display2 = function() {
    console.log("Expression style function")
}
display2();
// arrow function       ES6 features 
let display3 = ()=>console.log("arrow functions")
display3();

let addNumber1 = function(a,b){
    //var sum = a+b;
    return a+b;
}
console.log("Sum of two number using expression style "+addNumber1(10,20));
let addNumber2 = (a,b)=>a+b
console.log("Sum of two number using arrow style "+addNumber2(20,40))