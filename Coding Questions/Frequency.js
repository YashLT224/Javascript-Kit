const countCharacters = (str) => {
  let frequency = {};


  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;

}



const result = countCharacters("helaalo");
console.log(result); // Output: { h: 1, e: 1, l: 2, o: 1 }
