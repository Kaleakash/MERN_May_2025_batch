// sorting in asc and desc 1 digit number 
// let num1=[3,1,6,1,8,5,4,2,9,2];
// console.log(num1)
// console.log("Before sort display element one by one")
// for(let n of num1){
//     console.log(n)
// }
// num1.sort();        // ascending order 
// console.log("After sort display element one by one - Ascending")
// for(let n of num1){
//     console.log(n)
// }
// num1.reverse(); // descending order 
// console.log("After sort display element one by one - Descending")
// for(let n of num1){
//     console.log(n)
// }


// sorting in asc and desc more than one digit number 
let num1=[3,1,6,10];
console.log(num1)
console.log("Before sort display element one by one")
for(let n of num1){
    console.log(n)
}
num1.sort((a,b)=>{
    console.log("a="+a+" b="+b)
    return a-b
});        
//num1.sort((a,b)=>a-b);        // ascending order
console.log("After sort display element one by one - Ascending")
for(let n of num1){
    console.log(n)
}
num1.sort((a,b)=>b-a);        // descending order
console.log("After sort display element one by one - Descending")
for(let n of num1){
    console.log(n)
}