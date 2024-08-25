function deepClone(obj) {
    // Handle null or undefined
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // Handle Date
    if (obj instanceof Date) {
      return new Date(obj);
    }
  
    // Handle Array
    if (Array.isArray(obj)) {
      const arrCopy = [];
      for (let i = 0; i < obj.length; i++) {
        arrCopy[i] = deepClone(obj[i]);
      }
      return arrCopy;
    }
  
    // Handle Object
    if (obj instanceof Object) {
      const objCopy = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          objCopy[key] = deepClone(obj[key]);
        }
      }
      return objCopy;
    }
  
    // Handle other types like functions, and non-iterables
    throw new Error('Unsupported data type');
  }
  
  // Example usage
  const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
      city: "Wonderland",
      zip: 12345
    },
    birthDate: new Date('1990-01-01')
  };
  
  const cloned = deepClone(original);
  
  console.log(cloned); // Deep clone of the original object
  console.log(cloned === original); // false
  console.log(cloned.address === original.address); // false
  console.log(cloned.hobbies === original.hobbies); // false
  console.log(cloned.birthDate === original.birthDate); // false
  