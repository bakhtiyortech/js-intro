/* ----- Challenge-1 ----- */

function sumStrings(stringInt1, stringInt2) {

    var sums = parseInt(stringInt1) + parseInt(stringInt2);

    if (typeof stringInt1 === "string" && typeof stringInt2 === "string") {
        return sums;
    } else {
        return (stringInt1, stringInt2);
    }
}

/* ----- Challenge-2 ----- */

function sumDigits(stringInt) {

    var sums = parseInt(stringInt[0]) + parseInt(stringInt[1]) + parseInt(stringInt[2]) + parseInt(stringInt[3]);
    if (stringInt.length === 4) {
        return sums;
    } else {
        return string;
    }
}

/* ----- Challenge-3 ----- */

function multiplyRandomPositions(stringInt) {
    var randomPosition1 = Math.floor(Math.random() * stringInt.length);
    var randomPosition2 = Math.floor(Math.random() * stringInt.length);
    var result = stringInt[randomPosition1] * stringInt[randomPosition2];
    return result;
}

/* ----- Challenge-4 ----- */

function multiplyHalves(stringInt) {
    var firstHalf = stringInt.slice(0, Math.floor(stringInt.length / 2));
    var secondHalf = stringInt.slice(Math.floor(stringInt.length / 2));
    var result = parseInt(firstHalf) * parseInt(secondHalf);
    return result;
}

/* ----- Challenge-5 ----- */

function isOddStringInteger(stringInt) {
    var number = parseInt(stringInt);
    var result = number % 2 !== 0;
    return result;
}

isOddStringInteger("123");

/* ----- Challenge-6 ----- */

function roundAndConvert(floatingPointNumber) {
    var number = Math.round(floatingPointNumber);
    var string = number.toString();
    return string;
}

/* ----- Challenge-7 ----- */

function formatCurrency(floatingPointNumber) {
    var formatAmount = floatingPointNumber.toFixed(2);
    var result = "$" + formatAmount;
    return result.toString();
}

/* ----- Challenge-8 ----- */

function extractDecimal(number) {

    var string = number.toString();
    var result = string.slice(string.indexOf("."));
    if (number % 1 !== 0){
        return result;
    } else {
        return 0;
    }
}

/* ----- Challenge-9 ----- */

function integerToString(number) {

    var result = number + "";
    return result;
}


/* ----- Challenge-10 ----- */

function displayAsPercentage(number) {

    var result = (number * 100).toFixed(2);
    return (result + "%").toString();
}
displayAsPercentage(0.1234);


/* ----- Challenge-11 ----- */

function convertToFahrenheit(number) {

    var fahrenheitTemp = number * (9 / 5) + 32;
    return fahrenheitTemp.toString() + "°" + "F";
}

/* ----- Challenge-12 ----- */

function addOrdinalSuffix(number) {

    var numberToString = number.toString();
    if (number % 10 === 1) {
        return numberToString + "st"
    } else if (number % 10 === 2) {
        return numberToString + "nd";
    } else if (number % 10 === 3) {
        return numberToString + "rd";
    } else {
        return numberToString + "th";
    }    
}

/* ----- Challenge-13 ----- */

function addTimeSuffix(hour) {

    var hourNumberToString = hour.toString();
    if (hour >= 0 && hour < 12) {
        return hourNumberToString + " AM";
    } 
    if (hour === 12) {
        return hourNumberToString + " PM";
    } 
    if (hour > 12 && hour < 24) {
        return hourNumberToString + " PM";
    } 
}

/* ----- Challenge-14 ----- */

function formatAsPhone(number) {

    var numberToString = number.toString();
    var first3Number = numberToString.slice(0, 3);
    var second3Number = numberToString.slice(3, 6);
    var last4Number = numberToString.slice(6);
    return `(${first3Number}) ${second3Number}-${last4Number}`;
}

/* ----- Challenge-15 ----- */

function convertToCelsius() {

    var celsiusTemp = Math.round((num - 32) * (5 / 9));
    return celsiusTemp.toString() + "." + "0" + "°" + "C";
}

