var a=10;           // int a=10;     in C or Java
console.log(a)
a=20;       // re-initialization 
console.log(a)      // a=20;        in C or Java 
var a=30;       // re-declaration   // int a=10;
console.log(a);
let b=10;
console.log(b)
b=20;
console.log(b)
//let b=30;            // this variable already declared. 

for(var i=0;i<1000;i++){

}
console.log("value of i is "+i)
for(let j=0;j<1000;j++){

}
//console.log("value of j is "+j)   // we can't access outside for loop because block scope 
const c=100;
c=200;