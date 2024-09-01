// Mixin
const mixin = {
    sayHello() {
      console.log(`Hello, ${this.name}`);
    },
  };
  
  // Class
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Applying the Mixin
  Object.assign(Person.prototype, mixin);
  
  const person = new Person('Alice');
  person.sayHello(); // Hello, Alice        