/* ----- 1 ----- */

function stringToArray(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}
stringToArray("Hello, World!"); // Returns: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
stringToArray("JavaScript"); // Returns: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

/* ----- 2 ----- */

function areVowelsMore(str) {
  var vowelCount = 0;
  var consonantCount = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  return vowelCount > consonantCount;
}
areVowelsMore("Hello"); // Returns: false (2 vowels, 3 consonants)
areVowelsMore("Eerie"); // Returns: true (4 vowels, 1 consonant)

/* ----- 3 ----- */

function sumOfLetterPositions(str) {
  var sum = 0;
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (alphabet.includes(char)) {
      sum += alphabet.indexOf(char) + 1;
    }
  }
  return sum;
}
sumOfLetterPositions("abc"); // Returns: 6 (1 + 2 + 3)
sumOfLetterPositions("Hello"); // Returns: 52 (8 + 5 + 12 + 12 + 15)

/* ----- 4 ----- */

function countMatchingChars(str1, str2) {
  var sum = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      sum++;
    }
  }
  return sum;
}
countMatchingChars("helloo", "hxlloo"); // Returns: 4 (h, l, l, o match)
countMatchingChars("abc", "def"); // Returns: 0 (no matching characters)

/* ----- 5 ----- */

function convertToAlphabetPositions(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var sum = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (alphabet.includes(char)) {
      sum += alphabet.indexOf(char) + 1 + " ";
    }
  }
  return sum;
}
convertToAlphabetPositions("abc"); // Returns: "1 2 3"
convertToAlphabetPositions("Hello World!"); // Returns: "8 5 12 12 15 23 15 18 12 4"

/* ----- 6 ----- */

function extractConsonants(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "u" &&
      alphabet.includes(str[i])
    ) {
      arr.push(str[i]);
    }
  }
  return arr;
}
extractConsonants("Hello, World!"); // Returns: ["H", "l", "l", "W", "r", "l", "d"]
extractConsonants("JavaScript"); // Returns: ["J", "v", "S", "c", "r", "p", "t"]

/* ----- 7 ----- */

function countUppercaseLetters(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      count++;
    }
  }
  return count;
}
countUppercaseLetters("Hello, World!"); // Returns: 2
countUppercaseLetters("JavaScript"); // Returns: 2

/* ----- 8 ----- */

function hasConsecutiveSameLetters(str) {
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}
hasConsecutiveSameLetters("hello"); // Returns: true (because of "ll")
hasConsecutiveSameLetters("world"); // Returns: false

/* ----- 9 ----- */

function isPalindrome(str) {
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] === str[i]) {
      return true;
    }
  }
  return false;
}
isPalindrome("radar"); // Returns: true
isPalindrome("hello"); // Returns: false

/* ----- 10 ----- */

function countQueryCharacters(str) {
  var questionMarkCount = 0;
  var ampersandCount = 0;
  var equalCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      questionMarkCount++;
    } else if (str[i] === "&") {
      ampersandCount++;
    } else if (str[i] === "=") {
      equalCount++;
    }
  }
  return [questionMarkCount, ampersandCount, equalCount];
}
countQueryCharacters("https://example.com?page=1&sort=desc&order=asc"); // Returns: [1, 3, 2]
countQueryCharacters("https://example.com?search=test&filter=active&limit=10"); // Returns: [1, 3, 2]
