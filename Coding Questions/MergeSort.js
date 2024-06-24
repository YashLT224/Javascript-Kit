const sort = (arr) => {

  return divide(arr, 0, arr.length - 1);
}

const divide = (arr, start, end) => {
  if (start == end) {
    return [arr[start]];
  }

  let mid = Math.floor(start + (end-start) / 2);
  let left = divide(arr, start, mid);
  let right = divide(arr, mid + 1, end);
  return merge(left, right);
}


const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}




const arr = [4, 2, 7, 5, 8, 3, 4, 5];
const sortedArray = sort(arr);
console.log(sortedArray);
