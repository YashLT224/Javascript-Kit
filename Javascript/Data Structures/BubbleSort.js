const sort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    let max = i;
    for (let j = 0; j < arr.length - i-1 ; j++) {
				if(arr[j]>arr[j+1]){
         let temp=arr[j];
          arr[j]=arr[j+1]
          arr[j+1]=temp;
        }
    }
  }
  return arr;
}




const arr = [4, 2, 7, 5, 8, 3, 4, 5];
const sortedArray = sort(arr);
console.log(sortedArray);
