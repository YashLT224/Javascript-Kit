const isStringCreated = (s1, s2) => {
    if (s1.length !== s2.length) {
      return false;
  
    }
  
    let freq = {}
    let freq2 = {}
  
    for (let val of s1) {
      freq[val] = (freq[val] || 0) + 1;
      console.log(val);
    }
  
  
    for (let val of s2) {
      freq2[val] = (freq2[val] || 0) + 1;
      console.log(val);
    }
    if (Object.entries(freq).length !== Object.entries(freq2).length) {
      return false;
    }
    console.log(Object.entries(freq).length)
    for (let key in freq) {
      if (freq[key] !== freq2[key]) {
        return false;
      }
    }
  
    return true;
  
  
  }
  
  console.log(isStringCreated('anagram', 'nagaram'))
  