const getUniqueObjects=(arr)=>{
    let result=[];
    let seen={};
     for(let i=0;i<arr.length;i++){
      const currentitem= arr[i].name;
      if(!seen[currentitem]){
      result.push(arr[i]);
      seen[currentitem]=true;
      }
     }
     return result;
    }
    
    let arr=[{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
    let result= getUniqueObjects(arr);
     for(let k of result){
     console.log(k);
     }