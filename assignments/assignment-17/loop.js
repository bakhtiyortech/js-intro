/* ----- Challenge-1 ----- */

function sumExclusiveRange(minNum, maxNum) {
    var sum = 0;
    for (var i = minNum; i < maxNum; i++) {
        return sum += i;
    }
    if (minNum > maxNum) return "Not valid range";
}

/* ----- Challenge-2 ----- */

function sumEvenNumbers(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if (i % 2 === 0) return sum += i;
    }
}

/* ----- Challenge-3 ----- */

function factorial(num) {
    var product = 1;
    for (var i = num; i > 0; i--){
        return product *= i;
    }
}

/* ----- Challenge-4 ----- */

function sumUpToMax(num1, num2, num3) {
    var sum = 0;
    var maxNum = num1;
    if (num2 > maxNum) maxNum = num2;
    if (num3 > maxNum) maxNum = num3;
    for (var i = 1; i < maxNum; i++) {
        return sum += i;
    }
    if (maxNum < 0) return 0;
}

/* ----- Challenge-5 ----- */

function sumDivisibleByFour(num1, num2) {
    var sum = 0;
    var maxNum = num1;
    if (num2 > maxNum) maxNum = num2;
    var minNum = num1;
    if (num2 < minNum) minNum = num2;
    for (var i = minNum; i < maxNum; i++) {
        if (i % 4 === 0) return sum += i;
    }
}




