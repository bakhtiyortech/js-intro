/* ----- Challenge-1 ----- */

function countDivisibleByThreeOrFive(n) {

    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 ===0) {
            return i;
        }
    }
}

/* ----- Challenge-2 ----- */

function sumUpToBoth(num1, num2) {
    var sum1 = 0;
    for (var i = 1; i <= num1; i++) {
        return sum1 += i;
    }

    var sum2 = 0;
    for (var i = 1; i <= num2; i++) {
        return sum2 += i;
    }

    var totalSum = sum1 + sum2;
    return totalSum;
}

/* ----- Challenge-3 ----- */

function sumOfSquares(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        return sum += Math.pow(i, 2);
    }
}

/* ----- Challenge-4 ----- */

function countPerfectSquares(num1, num2) {
    var minNum = num1;
    if (num2 < minNum) minNum = num2;
    var maxNum = num1;
    if (num2 > maxNum) maxNum = num2;
    for (var i = minNum; i <= maxNum; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            return i;
        }
    }
}

/* ----- Challenge-5 ----- */

function countDigitsSumDivisibleByThree(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        if (i % 3 === 0) {
            return sum += 1;
        }
    }
}

countDigitsSumDivisibleByThree(7, 15);
