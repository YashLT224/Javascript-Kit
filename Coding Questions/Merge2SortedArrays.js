const sortedData = (arr1, arr2) => {
    let i = 0;
    let  j = 0;
    
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
    if (i < arr1.length) {
      while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
      }
    }
      if (j < arr2.length) {
      while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
      }
    }
    return result;
  }
  
  
  
  let result = sortedData([1, 3, 4, 5], [2, 6, 8, 9])
  
  for(let k of result){
  console.log(k);
  }