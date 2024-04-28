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
