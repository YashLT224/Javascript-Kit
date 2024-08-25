function sum(val1) {
  return function(val2) {
    if (!val2) {
      return val1;
    }
    return sum(val1 + val2);
  }
}


console.log(sum(10)(20)(30)(40)());
