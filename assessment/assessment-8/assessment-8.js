/* ----- Challenge-1 ----- */

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }  
    return true;    
}
// console.log(isPrime(2));

/* ----- Challenge-2 ----- */

function listPrimes(num) {
    var num = isPrime(num);
    for (i = 1; i <= num; i++) {
       console.log(i)
    }
}

listPrimes(10);