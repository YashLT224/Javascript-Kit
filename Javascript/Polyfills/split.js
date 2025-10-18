//way 1. using regex

if (!String.prototype.mysplit) {
  String.prototype.mysplit = function (separator, limit) {
    // If separator is not provided, treat it as splitting by each character
    if (separator === undefined || separator === null) {
      separator = '';
    }

    // If the separator is not a regular expression, convert it to a string
    if (typeof separator !== 'string' && !(separator instanceof RegExp)) {
      throw new TypeError('The separator must be a string or a regular expression.');
    }

    let result = [];
    let current = '';
    let count = 0;

    // Handle splitting by each character (if separator is an empty string)
    if (separator === '') {
      for (let i = 0; i < this.length; i++) {
        result.push(this.charAt(i)); // Push individual characters
      }
      return result.slice(0, limit); // Respect the limit (if provided)
    }

    // Regular expression case
    let regex = separator instanceof RegExp ? separator : new RegExp(separator, 'g');

    let match;
    let lastIndex = 0;

    // Loop over the string and extract substrings based on the separator
    while ((match = regex.exec(this)) !== null) {
        console.log(match)
      let substring = this.slice(lastIndex, match.index);
      if (substring !== '') {
        result.push(substring);
      }
      lastIndex = regex.lastIndex;
      count++;

      // If the limit is reached, stop adding further substrings
      if (limit !== undefined && count >= limit) {
        break;
      }
    }

    // If there is any remaining substring after the last match, push it
    if (lastIndex < this.length) {
      result.push(this.slice(lastIndex));
    }

    return result;
  };
}




let str = 'apple,banana,cherry';
let result = str.mysplit(',');
console.log(result); // Output: ["apple", "banana", "cherry"]





//way2
// Polyfill of Split

const split = (string, delimiter) => {
    const res = []
    if (delimiter === '') return Array.from(string)
    const startSplit = (str, i) => {
        if (i >= string.length) return
        const index = str.indexOf(delimiter)
        if (index >= 0) {
            res.push(str.substring(0, index))
            startSplit(str.substring(index + delimiter.length), index + delimiter.length)
        } else {
            res.push(str)
        }
    }
    startSplit(string, 0)
    return res
}

console.log(split('The quick the fox jumps the lazy dog.', 'the'))
// [ 'The quick ', ' fox jumps ', ' lazy dog.' ]