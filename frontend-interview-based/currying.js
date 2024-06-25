function sum(val1) {
  return function(val2) {
    return val1 + val2;
  }
}


console.log(sum(10)(20)());
