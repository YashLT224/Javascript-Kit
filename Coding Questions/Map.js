const map = new Map();

// Adding key-value pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set('city', 'New York');

// Retrieving values
console.log(map.get('name')); // Output: Alice

// Checking for keys
console.log(map.has('age')); // Output: true

// Iterating over the map
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// age: 25
// city: New York

// Removing a key-value pair
map.delete('city');
console.log(map.has('city')); // Output: false

// Getting the size of the map
console.log(map.size); // Output: 2

// Clearing the map
map.clear();
console.log(map.size); // Output: 0
