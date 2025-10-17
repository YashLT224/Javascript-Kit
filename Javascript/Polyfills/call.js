if (!Function.prototype.call) {
  Function.prototype.call = function(thisArg, ...args) {
  // If context is null or undefined, set it to global object
     thisArg = thisArg || globalThis;
    
    

    // Create a unique key to avoid name collisions
    const uniqueKey = Symbol('call');
    thisArg[uniqueKey] = this;

    // Call the function with `thisArg` as `this`, and apply the argsArray as the function's arguments
    const result = thisArg[uniqueKey](...args);

    // Delete the temporary key to avoid side effects
    delete thisArg[uniqueKey];

    return result;
  };
}
