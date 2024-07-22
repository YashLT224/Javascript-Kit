/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    console.log(this.nums)
    return this.nums.reduce((acc, curr) => {
        console.log(curr)
        return acc = acc + curr;
    }, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    console.log(this.nums)
    return `[${String(this.nums)}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 3+7 = 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"


 Explanation of Operations
Addition (obj1 + obj2):

When obj1 + obj2 is executed, JavaScript tries to convert both objects to primitive values.
It calls the valueOf method on both obj1 and obj2, which returns 3 and 7 respectively.
The result of 3 + 7 is 10.
String Conversion (String(obj1) and String(obj2)):

When String(obj1) is called, JavaScript calls the toString method on obj1, which returns "[1,2]".
Similarly, String(obj2) calls the toString method on obj2, which returns "[3,4]".

 */
