function once(cb){
    isCalled=false;
    let result;
    return function(...args){
        if(!isCalled){
            result=cb(...args)
            isCalled=true;
        }
         return result;
    }
}


// Example function that logs something
function greet(name) {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

// Create a function that can only be called once
const onceGreet = once(greet);

// Calling the function multiple times
onceGreet("Alice"); // Output: "Hello, Alice!"
onceGreet("Bob");   // No output, because `greet` was already called once
onceGreet("Charlie"); // Still no output

// You can also check the return value, it returns the result of the first call
const result = onceGreet("Alice");
console.log(result); // "Hello, Alice!"
