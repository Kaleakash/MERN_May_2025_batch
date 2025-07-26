let ss = new Set();
ss.add(100);
ss.add(200);
ss.add(400);
ss.add(300);
ss.add(100);
console.log(ss)
console.log("100 present "+ss.has(100))
console.log("1000 present "+ss.has(1000))
console.log("delete 100 "+ss.delete(100))
console.log("delete 1000 "+ss.delete(1000))
console.log(ss)
ss.clear();
console.log(ss)