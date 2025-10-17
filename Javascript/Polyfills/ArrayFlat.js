let arr=[1,2,3,[5,6,7],8,[9,10,[11]]]

const customFlat=(arr,depth=1)=>{
    let result=[];
    arr.forEach((item)=>{
        if(depth>0&& Array.isArray(item)){
            
            result.push(...customFlat(item,depth-1));
        }
        else{
              result.push(item)
        }
    })
    return result;
}

console.log(customFlat(arr,1))
