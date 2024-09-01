//math.js
export default function add(x, y) {
    return x + y;
  }
  
  export function multiply(x) {
    return x * 2;
  }
  
  export function subtract(x, y) {
    return x - y;
  }
  
  export function square(x) {
    return x * x;
  }



  //index.js
  import add, { multiply, subtract, square } from "./math.js";

add(7, 8);
multiply(8, 9);
subtract(10, 3);
square(3);