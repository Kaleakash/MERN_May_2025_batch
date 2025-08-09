function binarySearch(num,target){
    let left = 0;
    let right = num.length - 1;
    while(left <=right){
        let mid = Math.floor((left + right) / 2);
        if(num[mid] === target){
            return mid;
        }
        if(num[mid] < target){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1; // Target not found
}
let num = [4,8,1,3,9,6,2,7];
num.sort();
console.log("Sorted array: " + num);
let target = 6;
let result = binarySearch(num, target);
if(result !== -1){
    console.log("Target found at index: " + result);
}else {
    console.log("Target not found");
}