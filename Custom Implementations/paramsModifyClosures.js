function ab(a) {
  a = 20;
  return function(c) {
    return a + c;
  }


}

let re= ab(10)(11);
console.log(re); //31
