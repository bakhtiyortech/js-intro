/* ----- Challenge-1 ----- */

function countDivisibleByThreeOrFive(n) {

    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 ===0) {
            return i;
        }
    }
}
