/* ----- Challenge-1 ----- */

function sumUp(number1, number2, number3, number4, number5){
    var sum = 0;
    if (number1 % 2 === 0){
        return sum += number1;
    }
    if (number2 % 2 === 0){
        return sum += number2;
    }
    if (number3 % 2 === 0){
        return sum += number3;
    }
    if (number4 % 2 === 0){
        return sum += number4;
    }
    if (number5 % 2 === 0){
        return sum += number5;
    }
    return sum
}
sumUp(2, 4, 5, 7, 8);

/* ----- Challenge-2 ----- */

// max

function max(number1, number2, number3) {
    if (number1 === number2 && number1 === number3 && number3 === number2) {
        return (number1 + ", " + number2 + ", " + number3);
    } else if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3){
        return number2;
    } else {
        return number3;
    }
}

// min 

function max(number1, number2, number3) {
    if (number1 === number2 && number1 === number3) {
        return (number1 + ", " + number2 + ", " + number3);
    } else if (number1 < number2 && number1 < number3) {
        return number1;
    } else if (number2 < number1 && number2 < number3){
        return number2;
    } else {
        return number3;
    }
}

/* ----- Challenge-3 ----- */

// Longest string

function longestString(string1, string2, string3){
    if (string1.length === string2.length && string1.length === string3.length){
        return string1 + string2 + string3;
    } else if (string1.length > string2.length && string1.length > string3){
        return string1;
    } else if (string2.length > string1.length && string2.length > string3){
        return string2;
    } else {
        return string3;
    }
}

// Shortest string

function longestString(string1, string2, string3){
    if (string1.length === string2.length && string1.length === string3.length && string2.length === string3.length){
        return string1 + string2 + string3;
    } else if (string1.length < string2.length && string1.length < string3){
        return string1;
    } else if (string2.length < string1.length && string2.length < string3){
        return string2;
    } else {
        return string3;
    }
}
