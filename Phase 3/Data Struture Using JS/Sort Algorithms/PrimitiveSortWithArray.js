let num1=[3,1,6,8,5,4,9,2];
console.log(num1)
console.log("Before sort display element one by one")
for(let n of num1){
    console.log(n)
}
num1.sort();        // ascending order 
console.log("After sort display element one by one - Ascending")
for(let n of num1){
    console.log(n)
}
num1.reverse(); // descending order 
console.log("After sort display element one by one - Descending")
for(let n of num1){
    console.log(n)
}