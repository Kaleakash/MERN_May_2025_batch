// all names must be in upper case or lower case 
// let names = ["steven","ram","raj","lex","raju","ajay","leena","veena"];
// console.log("name before sort")
// for(let name of names){
//     console.log(name);
// }
// names.sort();
// console.log("name after sort - Ascending order")
// for(let name of names){
//     console.log(name);
// }
// names.reverse();
// console.log("name after sort - Descending order")
// for(let name of names){
//     console.log(name);
// }


// all names may be in mixed case  1st option 

// let names = ["steven","ram","raj","lex","Raju","Ajay","leena","Veena"];
// console.log("Before sort")
// names.forEach(name=>console.log(name))
// console.log("After sort in Ascending order ")
// names.map(name=>name.toLowerCase()).sort().forEach(name=>console.log(name))
// console.log("After sort in Ascending order ")
// names.map(name=>name.toLowerCase()).sort().reverse().forEach(name=>console.log(name))


// all names may be in mixed case 2nd option  
// let fname="Akash";
// let lname = "Kale";
// console.log(lname.localeCompare(fname))
console.log()
let names = ["steven","ram","raj","lex","Raju","Ajay","leena","Veena"];
console.log("Names before Sort")
for(let name of names){
    console.log(name)
}
names.sort((name1,name2)=>name1.toLowerCase().localeCompare(name2.toLowerCase()))
console.log("Names after Sort - ascending order")
for(let name of names){
    console.log(name)
}
names.sort((name1,name2)=>name2.toLowerCase().localeCompare(name1.toLowerCase()))
console.log("Names after Sort - descending order")
for(let name of names){
    console.log(name)
}