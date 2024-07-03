function f(x) {
    x = "x-" + x; // Step 1: Modify x
    return function(y) {
        y = "y-" + x; // Step 2: Modify y
        return function(z) {
            return "z-" + y; // Step 3: Return modified string
        }
    }
}

// Calling the function chain
let g = f("a")("b")("c");
console.log(g); // Use console.log instead of print  // "z-y-x-a"
