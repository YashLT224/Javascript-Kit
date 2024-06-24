
const sort = (arr) => {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
			if(arr[j]<arr[minIndex]){
      minIndex=j;
      }
    }
    
    
    let temp=arr[minIndex];
     arr[minIndex]=arr[i];
      arr[i]=temp;
  }
  return arr;
}




const arr = [4, 2, 7, 5, 8, 3, 4, 5];
const sortedArray = sort(arr);
console.log(sortedArray);
