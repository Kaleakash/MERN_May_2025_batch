
function insertionSortAsc(num){
        let len = num.length;
        for(i=1;i<len;i++){
            let current = num[i];       // 29, 10, 14, 37, 14
            let j = i-1;    // j hold 0 at first, 1, 2, 3, etc 
            while(j >=0 && num[j]> current){
                num[j+1] = num[j];
                j--;
            }
            num[j+1] = current; // insert the current element at the correct position
        }
}

function insertionSortDesc(num){
       let len = num.length;
        for(i=1;i<len;i++){
            let current = num[i];       // 29, 10, 14, 37, 14
            let j = i-1;    // j hold 0 at first, 1, 2, 3, etc 
            while(j >=0 && num[j] < current){
                num[j+1] = num[j];
                j--;
            }
            num[j+1] = current; // insert the current element at the correct position
        }
}

let num = [29,10,14,37,14];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
insertionSortAsc(num);
console.log("After Sort - Ascending order")
for(let n of num){
    console.log(n)
}
insertionSortDesc(num);
console.log("After Sort - Descending order")
for(let n of num){
    console.log(n)
}