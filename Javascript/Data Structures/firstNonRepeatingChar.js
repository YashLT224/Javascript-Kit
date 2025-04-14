//Two Sum
//Input loveleetcode
//output ='v'

function firstNonRepeating(str) {
    let map={};
    for( let char of str){
      map[char]=(map[char]||0)+1;
    }
    for(let i=0;i<str.length;i++){
      if(map[str[i]]===1)return str[i]
    }
  }
  console.log(firstNonRepeating('loveleetcode'));
  