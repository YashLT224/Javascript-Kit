//way1

function createConstPolyfill(globalScope = typeof window !== 'undefined' ? window : globalThis) {
  const constantStore = new WeakMap();

  function deepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
        deepFreeze(obj[key]);
      }
    });
    return obj;
  }

  return function defineConstant(name, value) {
    let constants = constantStore.get(globalScope) || {};

    if (constants[name]) {
      throw new Error(`Cannot redeclare constant: ${name}`);
    }

    // Mark this constant as defined
    constants[name] = true;
    constantStore.set(globalScope, constants);

    const finalValue = (typeof value === 'object' && value !== null)
      ? deepFreeze(value)
      : value;

    Object.defineProperty(globalScope, name, {
      value: finalValue,
      writable: false,
      configurable: false,
      enumerable: true
    });
  };
}

// ✅ Works in Node.js or Browser
const defineConst = createConstPolyfill();

defineConst('CONFIG', { 
  maxSize: 100,
  settings: { theme: 'dark' }
});

console.log(CONFIG.maxSize);        // 100 ✅
CONFIG.maxSize = 200;               // ❌ No effect
CONFIG.settings.theme = 'light';    // ❌ No effect
// defineConst('CONFIG', {});       // ❌ Error: Cannot redeclare constant




//way2
// Basic polyfill for const
(function() {
   const constants = {};
   
   Object.defineProperty(window, 'defineConstant', {
       value: function(name, value) {
           if(name in constants) {
               throw new Error(`Cannot redeclare constant: ${name}`);
           }
           
           constants[name] = value;
           
           Object.defineProperty(window, name, {
               enumerable: true,
               configurable: false,
              value:  constants[name],
              writable: false,
               get: function() {
                   return constants[name];
               },
               set: function() {
                   throw new Error(`Cannot reassign constant: ${name}`);
               }
           });
       }
   });
})();

// Usage:
defineConstant('MAX_SIZE', 100);
console.log(MAX_SIZE); // 100
MAX_SIZE = 200; // Error: Cannot reassign constant
defineConstant('MAX_SIZE', 300); // Error: Cannot redeclare constant







//way3
function defineConst(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    writable: false,      // Prevents reassignment
    configurable: false,  // Prevents property deletion or redefinition
    enumerable: true
  });
}

// Usage Example
var myConstants = {};
defineConst(myConstants, 'PI', 3.14159);
console.log(myConstants.PI); // Outputs: 3.14159

// Attempting to reassign
myConstants.PI = 3; // Fails silently or throws an error in strict mode
console.log(myConstants.PI); // Still outputs: 3.14159


