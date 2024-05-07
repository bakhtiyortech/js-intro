/* ----- Challenge-1 ----- */

function extractFirstAndLast(num) {
    var arr = [];
    arr.unshift(num[0]);
    arr.push(num[num.length - 1]);
    return arr;
}

/* ----- Challenge-2 ----- */

function extractOddSpecialElements(arr) {
    var array = [];
    if (arr.length <= 1) {
        arr;
    }
    if (arr.length > 1) {
        array.push(arr[0]);
    }
    if (arr.length % 2 !== 0) {
        var middleChar = Math.floor(arr.length / 2);
        array.push(arr[middleChar]);
    }
    if (arr.length > 1) {
        array.push(arr[arr.length - 1]);
    }
    return array;
}

/* ----- Challenge-3 ----- */

function sumStringNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
}

/* ----- Challenge-4 ----- */

function findLongestOfFour(arr) {
    var maxArrLen = arr[0].length;
    if (maxArrLen < arr[1].length) maxArrLen = arr[1];
    if (maxArrLen < arr[2].length) maxArrLen = arr[2];
    if (maxArrLen < arr[3].length) maxArrLen = arr[3];
    return maxArrLen;
}

/* ----- Challenge-5 ----- */

function sumSelectedWordLengths(arr) {
    var sum;
    if (arr.length % 2 === 0) {
        var evenNum1 = arr[0].length;
        var evenNum2 = arr[arr.length - 1].length;
        sum = evenNum1 + evenNum2;
    }
    if (arr.length % 2 !== 0) {
        var middleChar = Math.floor(arr.length / 2);
        var oddNum1 = arr[0].length;
        var oddNum2 = arr[middleChar].length;
        var oddNum3 = arr[arr.length - 1].length;
        sum = oddNum1 + oddNum2 + oddNum3;
    }

        return sum;
}
