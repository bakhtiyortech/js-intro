/* ----- Challenge-1 ----- */

function sumStrings(stringInt1, stringInt2) {

    var sums = parseInt(stringInt1) + parseInt(stringInt2);

    if (typeof stringInt1 === "string" && typeof stringInt2 === "string") {
        return sums;
    } else {
        return (stringInt1, stringInt2);
    }
}
sumStrings("123", "456");

/* ----- Challenge-2 ----- */

function sumDigits(stringInt) {

    var sums = parseInt(stringInt[0]) + parseInt(stringInt[1]) + parseInt(stringInt[2]) + parseInt(stringInt[3]);
    if (stringInt.length === 4) {
        return sums;
    } else {
        return string;
    }
}
sumDigits("1234");

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
    console.log(number % 2 !== 0);
}

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

function integerToString(integer) {

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

/* ----- Challenge-13 ----- */

/* ----- Challenge-14 ----- */

/* ----- Challenge-15 ----- */

function convertToCelsius() {

    var celsiusTemp = Math.round((num - 32) * (5 / 9));
    return celsiusTemp.toString() + "." + "0" + "°" + "C";
}

