function memoize(fn){
    const result={}
    
    return function(...args){
        const key=JSON.stringify(args);
        if(!result[key]){
            result[key]=fn(...args);
            console.log('cache miss')
        }
        else{
            console.log('cache hit');
        }
        return result[key];
    }
}


function slowFunction(x, y) {
  // Simulate a time-consuming calculation
  console.log('Performing a slow calculation...');
  return x + y;
}

// Create a memoized version of slowFunction
const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(1, 2));  // Cache miss, calculation occurs
console.log(memoizedFunction(1, 2));  // Cache hit, result returned from cache
console.log(memoizedFunction(2, 3));  // Cache miss, calculation occurs
