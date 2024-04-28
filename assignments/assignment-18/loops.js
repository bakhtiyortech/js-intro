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
