class Calculate {
  constructor(initiaValue = 0) {
    this.result = initiaValue;
  }
  add(value) {
    this.result += value;
    return this;

  }
    subtract(value) {
    this.result -= value;
    return this; // Return the object itself for chaining
  }

  multiply(value) {
    this.result *= value;
    return this; // Return the object itself for chaining
  }

  value() {
    return this.result; // Return the final result
  }
}


const obj = new Calculate();
let result = obj.add(10).subtract(4).multiply(2).value();
console.log(result);
