//Valid parenthesis
//Input {}()[]
//output true

function validParenthesis(s) {
    let stack=[];
    let map={
      '(':')',
      '{':'}',
      '[':']'
    }
    for(let char of s){
      if(map[char]){
        stack.push(char);
      }
      else{
        let lastElement= stack.pop();
        if(map[lastElement]!==char){
          return false;
        }
      }
    }
    return stack.length===0;
  }
  console.log(validParenthesis('{}[()][()]'));
  