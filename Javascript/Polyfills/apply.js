if (!Function.prototype.apply) {
  Function.prototype.apply = function(thisArg, argsArray) {
    // If no argsArray is provided, set it to an empty array
    if (argsArray === undefined) {
      argsArray = [];
    }

    // Create a unique key to avoid name collisions
    const uniqueKey = Symbol('apply');
    thisArg[uniqueKey] = this;

    // Call the function with `thisArg` as `this`, and apply the argsArray as the function's arguments
    const result = thisArg[uniqueKey](...argsArray);

    // Delete the temporary key to avoid side effects
    delete thisArg[uniqueKey];

    return result;
  };
}
