/* ----- Challenge-1 ----- */

function countAE(str1, str2) {

    var str1ToLowerCase = str1.toLowerCase();
    var str2ToLowerCase = str2.toLowerCase(); 

    var countStr1A = str1ToLowerCase.replaceAll("a", "").length;
    var countStr1E = str1ToLowerCase.replaceAll("e", "").length;
    var countStr2A = str2ToLowerCase.replaceAll("a", "").length;
    var countStr2E = str2ToLowerCase.replaceAll("e", "").length;

    var totalCountStr1 = countStr1A + countStr1E;
    var totalCountStr2 = countStr2A + countStr2E;

    if (totalCountStr1 === totalCountStr2) {
        return `${str1}, ${str2}`;
    } else if (totalCountStr1 > totalCountStr2) {
        return str1;
    } else {
        return str2;
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

    var countNum1Zeroes = num1ToStr.replaceAll("0", "").length;
    var countNum2Zeroes = num2ToStr.replaceAll("0", "").length;

    if (countNum1Zeroes > countNum2Zeroes) {
        return countNum1Zeroes;
    } else {
        return countNum2Zeroes;
    }
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
    if (maxLen === str1.length) return str1;
    if (maxLen === cleanStr2.length) return str2;
    return str3;
}

function multiplyMinMaxLength(str1, str2, str3) {

    var multiplyMinMaxStr = longestString(str1, str2, str3) * shortestString(str1, str2, str3);
    return multiplyMinMaxStr;
}