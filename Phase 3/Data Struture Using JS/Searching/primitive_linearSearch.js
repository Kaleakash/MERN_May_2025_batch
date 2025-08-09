function linearSearch(num,target){
    for(let i=0;i<num.length;i++){
        if(num[i] === target){
            return i; // Return the index of the target element
        }
    }
    return -1;// Return -1 if the target element is not found
}


let num=[4,1,7,9,5,3,2,6];
let resultElementIndex = linearSearch(num, 10);
if(resultElementIndex !== -1) {
    console.log("Element found at index position as "+resultElementIndex)
}else {
    console.log("Element not found in the array");
}