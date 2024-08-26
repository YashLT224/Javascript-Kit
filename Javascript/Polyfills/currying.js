function sum(val1) {
  return function(val2) {
    return val1 + val2;
  }
}


console.log(sum(10)(20)());







//way1
function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

function currySum(...initialArgs) {
  let accumulatedArgs = [...initialArgs];

  function curried(...args) {
    if (args.length === 0) {
    
    let argstotal=accumulatedArgs
    accumulatedArgs=[];
      return sum(...argstotal);
    } else {
      accumulatedArgs = [...accumulatedArgs, ...args];
      return curried;
    }
  }

  return curried;
}

// Usage
const curriedSum = currySum();

console.log(curriedSum(1)(2)(3)(4)()); // Output: 10
console.log(curriedSum(1, 2, 3)(4)()); // Output: 10
console.log(curriedSum(1, 2)(3)(4)(5)()); // Output: 15
console.log(curriedSum(5, 5, 5, 10)()); // Output: 25









//way2
function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  const curried = (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
  return curried;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4));     // Output: 10
console.log(curriedSum(1, 2, 3)(4));     // Output: 10
console.log(curriedSum(1, 2)(3)(4));     // Output: 10
console.log(curriedSum(1)(2, 3, 4));     // Output: 10