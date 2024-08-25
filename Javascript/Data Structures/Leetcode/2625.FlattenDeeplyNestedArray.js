/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */ 

var flat = function (arr, n) {
    let result=[];
    arr.forEach((item)=>{
        console.log(item);
        if(Array.isArray(item)&&n>0){
            result.push(...flat(item,n-1));
        }
        else{
            result.push(item);
        }
    })
    return result;
};
