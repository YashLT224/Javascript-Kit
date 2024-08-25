const printSequentially = (arr) => {
  const executeIteration = (index) => {
    if (index >= arr.length) return; // Base case: exit if all iterations are done

    setTimeout(() => {
      console.log(index + 1);
      executeIteration(index + 1); // Recursively call the next iteration
    }, arr[index] * 1000);
  };

  executeIteration(0); // Start the first iteration
};

let arr = [1, 2, 3, 14, 3];
printSequentially(arr);
