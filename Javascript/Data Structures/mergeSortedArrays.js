//Merge two Sorted arrays 
//Input [2,4,6], [1,3,5]
//output [1,2,3,4,5,6]

function mergeArrays(arr1,arr2){
    let res=[];
    let i=0;j=0;
    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
         i++;
        }
        else{
            res.push(arr2[j]);
            j++;
        }
    }
    let output=res.concat(arr1.slice(i)).concat(arr2.slice(j));
     return output;
}
console.log(mergeArrays([2,4,6], [1,3,5]));
