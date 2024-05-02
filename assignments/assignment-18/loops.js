/* ----- Challenge-1 ----- */

function countDivisibleByThreeOrFive(n) {
        var sum = 0;
    for (var i = 1; i < n; i++) {
        if ((i % 3 === 0 || i % 5 ===0) && !(i % 3 === 0 && i % 5 ===0)) {
            sum += i;
        }
        return sum;
    }
}

/* ----- Challenge-2 ----- */

function sumUpToBoth(num1, num2) {
    var sum1 = 0;
    for (var i = 1; i <= num1; i++) {
        sum1 += i;
    }

    var sum2 = 0;
    for (var i = 1; i <= num2; i++) {
        sum2 += i;
    }

    var totalSum = sum1 + sum2;
    return totalSum;
}

/* ----- Challenge-3 ----- */

function sumOfSquares(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
         sum += Math.pow(i, 2);
    }
    return sum;
}

/* ----- Challenge-4 ----- */

function countPerfectSquares(num1, num2) {

    for (var i = num1; i < num2; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            i++;
        }
    }
    return i;
}

/* ----- Challenge-5 ----- */

function countDigitsSumDivisibleByThree(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        if (i % 3 === 0) {
             sum += 1;
        }
    }
    return sum;
}

