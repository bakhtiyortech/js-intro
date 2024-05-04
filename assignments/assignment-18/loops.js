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

    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            sum++;
        }
    }
    console.log(sum);
}

/* ----- Challenge-5 ----- */

function countDigitsSumDivisibleByThree(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        console.log(i);
        if (i % 3 === 0) {
             sum++;
        }
    }
    return sum;
}

/* ----- Challenge-6 ----- */

function multiplyAllDigits(num1, num2) {
    var numToStr1 = num1.toString();
    var numToStr2 = num2.toString();
    var product = 1;
    for (var i = 0; i < numToStr1.length; i++) {
        var digit = parseInt(numToStr1[i]);
        console.log(digit);
        if (digit !== 0) {
            product *= digit;
        }
    }

    for (var i = 0; i < numToStr2.length; i++) {
        var digit = parseInt(numToStr2[i]);
        if (digit !== 0) {
            product *= digit;
        }
    }

    return product;
}