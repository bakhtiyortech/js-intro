/* ----- Challenge-1 ----- */

// isOdd

function isOdd(number){
    var result = number % 2 !== 0;
    console.log(result);
}

// isEven

function isEven(number){
    var result = number % 2 === 0;
    console.log(result);
}

/* ----- Challenge-2 ----- */

function isIncludes(mainString, targetString){
    var lowerTargetString = targetString.toLowerCase();
    var result = mainString.includes(lowerTargetString);
    console.log(result);
}

/* ----- Challenge-3 ----- */

// minValue

function minValue(number1, number2){
    if (number1 === number2){
        console.log(number1 + "," + number2);
    } else if (number1 > number2){ 
        console.log(number2);
    } else {
        console.log(number1);
    }
}

// maxValue

function maxValue(number1, number2){
    if (number1 === number2){
        console.log(number1 + "," + number2);
    } else if (number1 > number2){ 
        console.log(number1);
    } else {
        console.log(number2);
    }
}

/* ----- Challenge-4 ----- */

function power(base, exponent){
    var result = base ** exponent;
    console.log(result);
}

/* ----- Challenge-5 ----- */

function isProductGreater(num1, num2, num3){
    var product = num1 * num2 * num3;
    var sum = num1 + num2 + num3;
    var result = product > sum;
    console.log(result);
}

/* ----- Challenge-6 ----- */

function swapFirstAndLastChars(string){
    var firstCharcter = string[0];
    var middle = string.slice(1, string.length - 1);
    var lastCharcter = string[string.length -1];
    var result = lastCharcter + middle + firstCharcter;
    console.log(result);
}

/* ----- Challenge-7 ----- */

function firstHalf(string){
    var firstHalfString = Math.floor(string.length / 2);
    var result = string.slice(0, firstHalfString);
    console.log(result);
}

/* ----- Challenge-8 ----- */


function getInitials(fullName){
    var firstName = fullName[0];
    var middleName = fullName.indexOf(" " + 1);
    var lastName = fullName.lastIndexOf(" " + 1);
    var initials = firstName + middleName + lastName;
    console.log(initials.toUpperCase());
}