let num=[10,20,30,40,50,60,70,80,90,100];
// document.writeln(num) 
// document.writeln("<br/>")
// document.writeln("Retrieve element using for loop<br/") 
// for(let i=2;i<num.length;i=i+2){
//     document.writeln("<br/> Value is "+num[i]+" at index "+i);
// }
// document.writeln("<br/> Retrieve using for in loop")
// for(let i in num){
//     document.writeln("<br/> Value is "+num[i]+" at index "+i);
// }
// document.writeln("<br/> Retrieve using of  loop")
// for(let n of num){
//     document.writeln("<br/> Value is "+n);
// }
document.writeln("<br>/> Retrieve using forEach loop with callback <br/>")
num.forEach(displayValue)
function displayValue(value,index){
    document.writeln("<br/> Value is "+value+"idex is "+index);
}
document.writeln("<br>/> Retrieve using forEach loop with callback with expression style <br/>")
num.forEach(function(value,index){
    document.writeln("<br/> Value is "+value+"idex is "+index);
})
document.writeln("<br>/> Retrieve using forEach loop with callback with expression style <br/>")
num.forEach((value,index)=>document.writeln("<br/> Value is "+value+"idex is "+index));





