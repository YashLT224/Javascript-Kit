function findLargestElement(arr) {
    let max = Number.NEGATIVE_INFINITY; // Initialize max to
    // Helper function to traverse nested arrays
    function traverse(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          // If element is an array, recursively call t
          traverse(arr[i]);
        } else {
          // If element is not an array, update max if
          if (arr[i] > max) {
            max = arr[i];
          }
        }
      }
    }
    // Start traversing the input array
    traverse(arr);
    return max;
  }
  
  
   
  // Example usage:
  const nestedArray = [
    [3, 4, 58],
    [709, 8, 9, [10, 11]],
    [111, 16]
  ];
  console.log("Largest element:", findLargestElement(nestedArray));
  