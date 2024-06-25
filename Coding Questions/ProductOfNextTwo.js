function productOfNextTwo(arr) {
    const result = [];
    const len = arr.length;
    console.log(arr.length);

    for (let i = 0; i < len; i++) {
        const nextIndex1 = (i + 1) % len;
        const nextIndex2 = (i + 2) % len;
        result.push(arr[nextIndex1] * arr[nextIndex2]);
    }

    return result;
}

// Example usage:
const inputArray = [3, 4, 5,6];
const outputArray = productOfNextTwo(inputArray);
console.log(outputArray); // Output: [20, 15, 12]
