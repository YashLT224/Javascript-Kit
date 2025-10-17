if (!Function.prototype.bind) {
  Function.prototype.bind = function(thisArg, ...boundArgs) {
    if (typeof this !== 'function') {
      throw new TypeError('Bind must be called on a function');
    }
    
    // Save the original function
    const func = this;

    // Return a new function
    return function(...args) {
      // Use `thisArg` for `this`, and combine the pre-defined arguments with the ones passed to the function
      return func.apply(thisArg, [...boundArgs, ...args]);
    };
  };
}
