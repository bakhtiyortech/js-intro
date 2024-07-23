/* ----- 1 ----- */

function stringIndexMultiplier(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].length * i;
  }
  return sum;
}
stringIndexMultiplier(["Hello", "world", "!"]);

/* ----- 2 ----- */

function divisibilityFilter(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
      array.push(arr[i]);
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
      array.push(arr[i]);
    }
  }
  return array;
}
divisibilityFilter([3, 5, 15, 18, 20, 30]); // Outputs [3, 5, 18, 20]

/* ----- 3 ----- */

function singleDigitSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) < 10) {
      sum += arr[i];
    }
  }
  return sum;
}
singleDigitSum([-10, 1, -2, 30, 6, -7]); // Outputs -2

/* ----- 4 ----- */

function binaryCounter(arr) {
  var array = [];
  var countZero = 0;
  var countOne = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else {
      countOne++;
    }
  }
  return array.push(countZero, countOne);
}
binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]); // Outputs [4, 4]

/* ----- 5 ----- */

function uniqueStringFilter(str) {
  var uniqueStr = [];
  for (var i = 0; i < str.length; i++) {
    if (
      !str[i].includes(str[i].toLowerCase()) &&
      !str[i].includes(str[i][1].toUpperCase())
    ) {
      uniqueStr.push(str[i]);
    }
  }
  return uniqueStr;
}
uniqueStringFilter([
  "Hello",
  "hello",
  "World",
  "world",
  "WORLD",
  "hello",
  "HELLO",
  "Test",
]); // Outputs ["Hello", "World", "Test"]

/* ----- 6 ----- */

function oddNumberSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Outputs 25

/* ----- 7 ----- */

function reverseString(arr) {
  var newReversArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newReversArr.push(arr[i]);
  }
  return newReversArr;
}
reverseString(["H", "e", "l", "l", "o"]); // Outputs [ 'o', 'l', 'l', 'e', 'H' ]
reverseString([]); // Outputs []
reverseString(["a"]); // Outputs [];

/* ----- 8 ----- */

function arrayElementMultiplier(arr) {
  var arrayMultiplier = [];
  for (var i = 0; i < arr.length; i++) {
    arrayMultiplier.push(arr[i] * 2);
  }
  return arrayMultiplier;
}
arrayElementMultiplier([1, 2, 3, 4, 5]); // Outputs [2, 4, 6, 8, 10]
arrayElementMultiplier([]); // Outputs []

/* ----- 9 ----- */

function evenIndexSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i += 2) {
    sum += arr[i];
  }
  console.log(sum);
}
evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Outputs 25
evenIndexSum([10, 20, 30, 40, 50]); // Outputs 90
evenIndexSum([]); // Outputs 0
evenIndexSum([100]); // Outputs 100
