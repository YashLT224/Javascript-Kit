// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same. (Effecient)
// Inputs and outputs:
// =============
// 1,2,3,4,1,9  true
// 1,2,3,1,9  false
// 1,2,1,4,4,1  false (must be same frequency)





const isSameFrequency = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let arr1freq = {};
    let arr2freq = {};
    for (let item of arr1) {
      arr1freq[item] = (arr1freq[item] || 0) + 1;
    }
    for (let item of arr2) {
      arr2freq[item] = (arr2freq[item] || 0) + 1;
    }
    for (let key in arr1freq) {
      if (!key * key in arr2freq) return false;
      if (arr1freq[key] !== arr2freq[key * key]) {
        return false;
      }
    }
  
    return true;
  }
  
  
  
  
  console.log(isSameFrequency([1, 2, 5], [25, 4, 1])) // true
  