/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {


    return arr.map((item,index)=> {
        return fn(item,index)
    })
    
};
