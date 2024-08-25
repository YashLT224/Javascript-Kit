/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let result={}
    return function(...args) {
         const key = JSON.stringify(args);
         if(key in result){
            return result[key];
         }
         else{
            const res = fn.apply(this, args);
            result[key]=res;
            return res;
         }
        
    }
}
