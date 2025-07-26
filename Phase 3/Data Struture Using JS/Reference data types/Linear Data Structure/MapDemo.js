let mm = new Map();
    mm.set(100,"Ravi");
mm.set(104,"Ramesh");
mm.set(102,"John");
mm.set(105,"Leena");
console.log(mm)
console.log("Value "+mm.get(100))
console.log("Value "+mm.get(1000))
console.log("remove information using key "+mm.delete(102));
console.log("remove information using key "+mm.delete(1000));
console.log(mm)
    mm.set(100,"Steven");//if same key present it replace by new value or override  
mm.set(106,"Leena"); // value can be duplicate 
console.log(mm)
if(mm.has(1000)){
    console.log("key present")
}else {
    console.log("key not present")
    // here we can set 
}