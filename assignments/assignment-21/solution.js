/* ----- 1 ----- */

function generateNumbersUpTo(num) {
    var sums = [];
    for (var i = 1; i <= num; i++){
        sums.push(i);
    }
    return sums;
}
generateNumbersUpTo(5); // Returns: [1, 2, 3, 4, 5]
generateNumbersUpTo(3); // Returns: [1, 2, 3]

/* ----- 2 ----- */

function generateNumbersDownTo(num) {
    var sums = [];
    for (var i = num; i > 0; i--){
        if(i % 2 === 0){
           sums.unshift(i);
        }
    }
        return sums;
}
generateNumbersDownTo(5); // Returns: [4, 2]
generateNumbersDownTo(3); // Returns: [2]

/* ----- 3 ----- */

function findPrimesUpTo(num) {
    var sums = [];
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sums.push(i);
        }
    }
    return sums;  
}
findPrimesUpTo(10); // Returns: [2, 3, 5, 7]
findPrimesUpTo(20); // Returns: [2, 3, 5, 7, 11, 13, 17, 19]

/* ----- 4 ----- */

function rotateLastToFront(arr) {
    var removeLastItem = arr.pop();
    arr.unshift(removeLastItem);
    return arr;
}
rotateLastToFront([1, 2, 3, 4]); // Returns: [4, 1, 2, 3]
rotateLastToFront(['apple', 'banana', 'cherry']); // Returns: ['cherry', 'apple', 'banana']


/* ----- 5 ----- */

function rotateFrontToEnd(arr) {
    var removeFirstItem= arr.shift();
    arr.push(removeFirstItem)
    return arr;
}
rotateFrontToEnd([1, 2, 3, 4]); // Returns: [2, 3, 4, 1]
rotateFrontToEnd(['apple', 'banana', 'cherry']); // Returns: ['banana', 'cherry', 'apple']
