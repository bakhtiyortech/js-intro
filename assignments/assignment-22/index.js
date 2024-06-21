/* ----- 1 ----- */

function combineArrays(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
}
combineArrays([1, 2, 3], [4, 5, 6]);  // Output: [1, 2, 3, 4, 5, 6]

/* ----- 2 ----- */

function reverseOrder(arr) {
    var result = arr.reverse();
    return result;
}
reverseOrder([1, 2, 3]);  // Output: [3, 2, 1]

/* ----- 3 ----- */

function checkValue(arr) {
    var result = arr.includes(2);
    return result;
}
checkValue([1, 2, 3], 2);  // Output: true
checkValue(['apple', 'banana', 'cherry'], 'apple');  // Output: true

/* ----- 4 ----- */

function isArray(arr) {
    var result = Array.isArray(arr);
    return result;
}
isArray([1, 2, 3]);  // Output: true
isArray('not an array');  // Output: false

/* ----- 5 ----- */

function arraySlice(arr) {
    var result = arr.slice(1, 4);
    return result;
}
arraySlice([1, 2, 3, 4, 5], 1, 4);  // Output: [2, 3, 4]
arraySlice(['a', 'b', 'c', 'd', 'e'], 0, 3);  // Output: ['a', 'b', 'c']