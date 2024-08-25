//Write the polyfill for the groupBy() method that accepts a collection and iteratee as arguments and returns the object that has grouped the collection values using iteratee as the key.

Input:
groupBy([6.1, 4.2, 6.3], Math.floor);
groupBy(["one", "two", "three"], "length");

Output:
// { 6: [6.1, 6.3], 4: [4.2] }
// { 3: ['one', 'two'], 5: ['three'] }

const groupBy = (values, keyFinder) => {
    // using reduce to aggregate values
    return values.reduce((a, b) => {
      // depending upon the type of keyFinder
      // if it is function, pass the value to it
      // if it is a property, access the property
      const key = typeof keyFinder === 'function' ? keyFinder(b) : b.toString()[keyFinder];
      
      // aggregate values based on the keys
      if(!a[key]){
        a[key] = [b];
      }else{
        a[key] = [...a[key], b];
      }
      
      return a;
    }, {});
  };