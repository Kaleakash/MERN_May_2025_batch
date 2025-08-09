function mergeSortAsc(num){
    if(num.length<=1){
        return num;
    }
    console.log("Array Elements "+num)
    // divide the array into halves
    let mid = Math.ceil(num.length / 2);
    //console.log(mid)
    let leftHalf = num.slice(0, mid);
    let rightHalf = num.slice(mid);
    console.log("Mid position "+mid)
    console.log("left Array "+leftHalf);
    console.log("right Array "+rightHalf);
    console.log("--------------------------")
    let leftSortedArray = mergeSortAsc(leftHalf);
    console.log("--------------------------")
    let rightSortedArray = mergeSortAsc(rightHalf);
    console.log("Left Sorted Array "+leftSortedArray);
    console.log("Right Sorted Array "+rightSortedArray);
    console.log("--------------------------")
    if(leftSortedArray==undefined || rightSortedArray==undefined){
        return [];
    }
    return merge(leftSortedArray, rightSortedArray);
}

function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    console.log();
    console.log();
    console.log("Merging all the elements");
    while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if(leftArray[leftIndex] < rightArray[rightIndex]) {
            console.log("true condition ")
            console.log(leftArray[leftIndex] + " < " + rightArray[rightIndex]);
            result.push(leftArray[leftIndex]);
            console.log("Left Array Element in true "+leftArray[leftIndex]);
            leftIndex++;
            console.log("left index position "+leftIndex);
        }else {
            console.log("false condition ")
            console.log(leftArray[leftIndex] + " > " + rightArray[rightIndex]);
            result.push(rightArray[rightIndex]);
            console.log("right Array Element in true "+rightArray[leftIndex]);
            rightIndex++;
            console.log("right index position "+rightIndex);
        }
        console.log("Result Array "+result);
    }
    // If there are remaining elements in the left array
    while(leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex]);
        console.log("Left Array Element in false "+leftArray[leftIndex]);
        leftIndex++;
        console.log("left index position "+leftIndex);
    }
    // // If there are remaining elements in the right array
    while(rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex]);
        console.log("right Array Element in false "+rightArray[rightIndex]);
        rightIndex++;
        console.log("right index position "+rightIndex);
    }
    console.log("Final Result Array "+result);
    return result;
}





let num = [2,1,3];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
let finalResult = mergeSortAsc(num);
console.log("After Sort - Ascending order")
for(let n of finalResult){
    console.log(n)
}





