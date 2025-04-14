//Two Sum
//Input [2,7,11,15] ,  target=11
//output 2

function binarySearch(arr,target) {
    let left=0;
    let right= arr.length-1;
     // Sorting the array to make binary search work
     arr.sort((a, b) => a - b);
   while(left<=right){
     let mid= Math.floor((left+right)/2);
     if(arr[mid]===target) return mid;
     if(arr[mid]<target){
       left=mid+1;
     }
     else{
       right=mid-1;
     }
   
   
   }
     return -1;
   }
   console.log(binarySearch([2,7,11,15],15));
   