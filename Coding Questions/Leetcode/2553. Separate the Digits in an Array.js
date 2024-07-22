/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function numberToDigits(number) {
    return number.toString().split('').map(Number);
}
var separateDigits = function(nums) {
   let result=[];
    for(let i=0;i<nums.length;i++){
        let separated=numberToDigits(nums[i]);
        for(let k of separated){
            result.push(k);
        }
    } 
    return result;
};


 
