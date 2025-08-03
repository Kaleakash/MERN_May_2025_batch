// sort using bubble sort algorithms
function bubbleSortAsc(num){
    let len = num.length;       //len = 5;
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<len-1;i++){
            if(num[i]>num[i+1]){        // asc
                    let temp = num[i];
                    num[i]=num[i+1];
                    num[i+1]=temp;
                    swapped=true;
            }
        }
    }while(swapped);
}
function bubbleSortDesc(num){
    let len = num.length;       //len = 5;
    let swapped;

    do{
        swapped=false;
        for(let i=0;i<len-1;i++){
            if(num[i]<num[i+1]){        // desc
                    let temp = num[i];
                    num[i]=num[i+1];
                    num[i+1]=temp;
                    swapped=true;
            }
        }
    }while(swapped);
}
let num = [29,10,14,37,14];
console.log("Before Sort")
for(let n of num){
    console.log(n)
}
bubbleSortAsc(num);
console.log("After Sort - Ascending order")
for(let n of num){
    console.log(n)
}
bubbleSortDesc(num);
console.log("After Sort - Descending order")
for(let n of num){
    console.log(n)
}
