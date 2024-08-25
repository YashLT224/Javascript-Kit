
const sort = (arr) => {

   quicksort(arr, 0, arr.length - 1);
}

const quicksort = (arr, start, end) => {
  if (start < end) {
    let mid = partitiion(arr, start, end);
    quicksort(arr, start, mid - 1);
    quicksort(arr, mid, end);
  }
}

const partitiion = (arr, low, high) => {
   let index = Math.floor((low + high) / 2);
  let pivot = arr[index];
  while (low <= high) {
    while (arr[low] < pivot) {
			low++;
    }
    while(arr[high]>pivot){
     high--;
    }
    if(low<=high){
     let temp=arr[low];
      arr[low]=arr[high];
       arr[high]=temp;
       low++;
       high--;
    }
  }
  return low;
 
}






const arr = [4, 2, 7, 5, 8, 3, 4, 5];
 sort(arr);
console.log(arr);
