/* ----- Challenge-1 ----- */

function countAE(str1, str2) {

    var str1LenAfterRepA = str1.toLowerCase().replaceAll("a", "").length;
    var str1LenAfterRepE = str1.toLowerCase().replaceAll("e", "").length;
    var str2LenAfterRepA = str2.toLowerCase().replaceAll("a", "").length;
    var str2LenAfterRepE = str2.toLowerCase().replaceAll("e", "").length;
    var countStr1A = str1.length - str1LenAfterRepA;
    var countStr1E = str1.length - str1LenAfterRepE;
    var totalCountStr1AE = countStr1A + countStr1E;
    var countStr2A = str2.length - str2LenAfterRepA;
    var countStr2E = str2.length - str2LenAfterRepE;
    var totalCountStr2AE = countStr2A + countStr2E;

    if (totalCountStr1AE > totalCountStr2AE) {
        return str1;
    } else if (totalCountStr1AE < totalCountStr2AE) {
        return str2;
    } else {
        console.log(`${str1} ${str2}`);
    }
}

/* ----- Challenge-2 ----- */

  function findMax(num1, num2, num3, num4) {

    var maxNum = num1;

    if (maxNum < num2) maxNum = num2;
    if (maxNum < num3) maxNum = num3;
    if (maxNum < num4) maxNum = num4;
    return maxNum;
  }

/* ----- Challenge-3 ----- */

function findMinAbsValue(num1, num2, num3) {

    var num1ToFloat = parseFloat(Math.abs(num1));
    var num2ToFloat = parseFloat(Math.abs(num2));
    var num3ToFloat = parseFloat(Math.abs(num3));

    var minVal = num1ToFloat;

    if (num2ToFloat < minVal) minVal = num2ToFloat;
    if (num3ToFloat < minVal) minVal = num3ToFloat;
    console.log(minVal); 
  }

/* ----- Challenge-4 ----- */

function fewerZeroes(num1, num2) {

    var num1ToStr = num1.toString();
    var num2ToStr = num2.toString();
    var num1IncludesZero = num1ToStr.includes("0");
    var num2IncludesZero = num2ToStr.includes("0");
    var countNum1Zeroes = num1ToStr.replaceAll("0", "");
    var countNum2Zeroes = num2ToStr.replaceAll("0", "");
    var countNum1Len = countNum1Zeroes.length;
    var countNum2Len = countNum2Zeroes.length;

    if (num1IncludesZero === false) return num1;
    if (num2IncludesZero === false) return num2;
    if (countNum1Len === countNum2Len && num1IncludesZero === true && num2IncludesZero === true) return num1;
    if (countNum1Len > countNum2Len) return num1;
    if (countNum1Len < countNum2Len) return num2;
}

/* ----- Challenge-5 ----- */

function longestString(str1, str2, str3) {

    var maxLen = max(str1.length, str2.length, str3.length);
    if (maxLen === str1.length) return str1;
    if (maxLen === cleanStr2.length) return str2;
    return str3;
}

function shortestString(str1, str2, str3) {
   
    var minLen = min(str1.length, str2.length, str3.length);
    if (minLen === str1.length) return str1;
    if (minLen === cleanStr2.length) return str2;
    return str3;
}

function multiplyMinMaxLength(str1, str2, str3) {

    var multiplyMinMaxStr = longestString(str1, str2, str3) * shortestString(str1, str2, str3);
    return multiplyMinMaxStr;
}