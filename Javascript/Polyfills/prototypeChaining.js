// Define a constructor function for a parent class
function Animal(name) {
  this.name = name;
}

// Add a method to Animal's prototype
Animal.prototype.sayHello = function() {
  console.log(`${this.name} says hello!`);
};

// Define a constructor function for a child class
function Dog(name, breed) {
  Animal.call(this, name);  // Inherit properties from Animal
  this.breed = breed;
}

// Set Dog's prototype to be an instance of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Set the constructor back to Dog

// Add a method to Dog's prototype
Dog.prototype.bark = function() {
  console.log(`${this.name} barks!`);
};

// Create an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");

myDog.sayHello(); // "Buddy says hello!" (inherited from Animal)
myDog.bark();     // "Buddy barks!" (defined in Dog)







//Prototype chaining refers to the way JavaScript objects and their prototypes are linked in a chain. When you try to access a property or method of an object, and the object doesn't have that property or method, JavaScript looks up the prototype chain to find it.
//Each object in JavaScript has a __proto__ property (or prototype in the case of constructor functions and classes) that refers to its prototype. If a property isn't found on the object itself, JavaScript will look for it on the object's prototype, then the prototype's prototype, and so on, until it reaches Object.prototype (the root object).
//Key Points:
//Chain of prototypes: When an object doesn't have a property, JavaScript will search its prototype and then search the prototype of the prototype, and so on (forming a chain).
//End of the chain: The chain ends at Object.prototype, and after that, it reaches null.




console.log(myDog.hasOwnProperty("name"));   // true (property on dog)
console.log(myDog.hasOwnProperty("sayHello")); // false (method on Animal.prototype)
console.log(myDog.__proto__.hasOwnProperty("sayHello")); // true (method on Animal.prototype)