//Two Sum
//Input [2,7,11,15] ,  target=9
//output 0,1

function TwoSum(arr,target) {

    let map=new Map()
    for(let i=0;i<arr.length;i++){
      const complement= target-arr[i];
      if(map.has(complement)){
        return [map.get(complement),i];
      }
      else{
        map.set(arr[i],i);
      }
    }
    return '-'
  }
  console.log(TwoSum([2,15,11,7],9));
  