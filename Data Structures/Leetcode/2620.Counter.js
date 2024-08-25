/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let finalValue=n;

    return function() {
        return finalValue++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
