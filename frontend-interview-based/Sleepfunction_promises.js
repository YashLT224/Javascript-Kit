const sleep=(ms)=> new Promise((resolve)=>setTimeout(resolve,ms));
const printSequentially = async(arr) => {
  
  for(let i=0;i<arr.length;i++){
 await sleep(arr[i]*1000);
  console.log(arr[i]);
  }
};

let arr = [1, 2, 3, 14, 3];
printSequentially(arr);
