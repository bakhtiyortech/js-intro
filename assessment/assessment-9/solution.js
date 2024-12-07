function generateAlmostDivisibleBy13(num) {
    var sum = 0;
    var array = [];
    for (var i = 1; i < num; i++) {
        if ((i + 1) % 13 === 0 || (i - 1) % 13 === 0) {
            sum++;
        }
    }
    return array.push(sum);
}