function findSecondLargest(arr) {
  if (arr.length < 2) {
    return 'no second largest found'
  }

  let largest = -Infinity;
  let secondlargest = -Infinity;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;
      largest = arr[i];
    }
     else if(arr[i]>secondlargest&&arr[i]<largest){
     secondlargest=arr[i];
     }
  }
  return secondlargest;
}








const arr = [10, 5, 20, 8, 12];
console.log(findSecondLargest(arr));
