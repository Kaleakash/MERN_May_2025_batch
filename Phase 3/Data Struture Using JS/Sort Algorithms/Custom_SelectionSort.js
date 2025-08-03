
function selectionSortAsc(num){
        let len = num.length;

        for(let i=0;i<len-1;i++){
            // Assume the current index i is the minimum element 
            let minIndex = i;
            // find the minimum element in the unsorted part of the array 
            for(let j=i+1;j<len;j++){
                if(num[j]<num[minIndex]){
                    minIndex=j;
                }
            }

            // swap the minimum element with first element of the sorted part 
            if(minIndex !==i){
                let temp = num[i];
                num[i]=num[minIndex];
                num[minIndex]=temp;
            }
        }
}

function selectionSortDesc(num){
        let len = num.length;

        for(let i=0;i<len-1;i++){
            // Assume the current index i is the minimum element 
            let minIndex = i;
            // find the minimum element in the unsorted part of the array 
            for(let j=i+1;j<len;j++){
                if(num[j]>num[minIndex]){
                    minIndex=j;
                }
            }

            // swap the minimum element with first element of the sorted part 
            if(minIndex !==i){
                let temp = num[i];
                num[i]=num[minIndex];
                num[minIndex]=temp;
            }
        }
}

let num = [29,10,14,37,14];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
selectionSortAsc(num);
console.log("After Sort - Ascending order")
for(let n of num){
    console.log(n)
}
selectionSortDesc(num);
console.log("After Sort - Descending order")
for(let n of num){
    console.log(n)
}