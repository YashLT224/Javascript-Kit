/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const toBe=(value)=>{
        if(value===val){
            return  true;
        } 
        else{
                throw new Error('Not Equal')
        }
    }
     const notToBe=(value)=>{
        if(value!==val){
            return  true;
        } 
        else{
                throw new Error('Equal')
        }
    }
    return {toBe,notToBe};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
