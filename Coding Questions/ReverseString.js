const findReverse=(str)=>{
    let reverseString='';
     let len=str.length;
     for(let i=len-1;i>=0;i--){
     reverseString+=str[i];
     }
     return reverseString;
    }
    
    
    
    
    console.log(findReverse("Hello Iam Saikrishna Ui Developer"));