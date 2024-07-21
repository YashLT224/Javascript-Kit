/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
 
 
    let entries = {};
    console.log( arr1.concat(arr2))
    for (a of arr1.concat(arr2)) {
        let exsisting = entries[a.id] ? entries[a.id] : {}
        entries[a.id] = {...exsisting, ...a}
    }
    console.log(entries);
    return Object.values(entries)

   
};
