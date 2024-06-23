const findConsecutive = (arr) => {

    let maxCount = 0;
    let currentConsCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) {
        currentConsCount += 1;
        maxCount=Math.max(maxCount,currentConsCount);
      }
      else{
      currentConsCount=0;
      }
    }
  
  return maxCount;
  }
  
  
  console.log(findConsecutive([1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1])); //3
  