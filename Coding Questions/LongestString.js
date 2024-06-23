const longestWord = (sentence) => {
    let arr = sentence.split(' ');
    let longestword = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestword.length) {
        longestword = arr[i];
  
      }
    }
    return longestword;
  }
  
  
  
  console.log(longestWord('Hi Iam Saikrishna Iam a UI Developer')) //Saikrishna
  