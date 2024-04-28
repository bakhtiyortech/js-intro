/* ----- Challenge-1 ----- */

function sumExclusiveRange(minNum, maxNum) {
    var sum = 0;
    for (var i = minNum; i < maxNum; i++) {
        console.log(sum += i);
    }
    if (minNum > maxNum) console.log("Not valid range");
}
