Ques: Reverse words of string

const reverseWords = (sampleString) => {

  let reverseSentence = '';
  let word = '';


  for (let i = 0; i < sampleString.length; i++) {
		if(sampleString[i]!=' '){
    word+=sampleString[i];
    }
    else{
    reverseSentence= word+' '+reverseSentence;
    word='';
    }
  }
 reverseSentence= word+' '+reverseSentence;
 return reverseSentence
}





console.log(reverseWords("ChatGPT is awesome")); //"awesome is ChatGPT"







//ay 2


const reverseWords = (sampleString) => {

   let arr= sampleString.split(' ');
   
   arr=arr.reverse();
   return arr.join(' ')
}





console.log(reverseWords("ChatGPT is awesome")); //"awesome is ChatGPT"
