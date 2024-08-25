const stringToObject = (str, value) => {
  let arr = str.split('.');
  let result = {};
  let current = result;

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    current[key] = (i === arr.length - 1) ? value : {};
    current = current[key];
  }

  return result;
}

const output = stringToObject("a.b.c", "someValue");
console.log(JSON.stringify(output)); // Output: {a: {b: {c: "someValue"}}}
