function customAssign(target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
  
    // Convert target to an object (to handle cases where it's a primitive type)
    let to = Object(target);
  
    // Iterate over each source object
    for (let i = 0; i < sources.length; i++) {
      let nextSource = sources[i];
  
      // If the source is null or undefined, skip it
      if (nextSource != null) {
        // Iterate over all enumerable own properties of the source object
        for (let key in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, key)) {
            to[key] = nextSource[key];
          }
        }
  
        // Handle Symbol properties as well
        let symbols = Object.getOwnPropertySymbols(nextSource);
        for (let j = 0; j < symbols.length; j++) {
          let symbol = symbols[j];
          if (Object.prototype.propertyIsEnumerable.call(nextSource, symbol)) {
            to[symbol] = nextSource[symbol];
          }
        }
      }
    }
  
    return to;
  }
  
  // Example usage
  const target = { a: 1 };
  const source1 = { b: 2 };
  const source2 = { c: 3, d: 4 };
  
  const result = customAssign(target, source1, source2);
  console.log(result); // { a: 1, b: 2, c: 3, d: 4 }
  