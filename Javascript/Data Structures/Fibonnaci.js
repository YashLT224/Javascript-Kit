const fibonnaciSequence=(numTerms)=>{
	if(numTerms<=0){
  return [0];
  }
   let sequence=[0,1];
    for(let i=2;i<numTerms;i++){
    let nextfibonnaci= sequence[i-1]+sequence[i-2];
    sequence.push(nextfibonnaci);
    }
    return sequence;
  
}



const numberOfTerms=10;
const fibonacciSeries=fibonnaciSequence(numberOfTerms);
console.log(fibonacciSeries);
