/* ----- 1 ----- */

const arrayToObject = function (arr) {
  let obj = {};
  let properties = ["countryName", "population", "primaryLanguage", "gdp"];

  for (let i = 0; i < arr.length; i++) {
    obj[properties[i]] = arr[i];
  }

  return obj;
};
arrayToObject(["USA", 331000000, "English", 21433226]);

/* ----- 2 ----- */

function createBookObject(name, author, numberOfPages, genre) {
  const book = {
    name: name,
    author: author,
    numberOfPages: numberOfPages,
    genre: genre,
  };

  return book;
}
createBookObject("1984", "George Orwell", 328, "Dystopian");
// Outputs: {name: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian"}
createBookObject("The Great Gatsby", "F. Scott Fitzgerald", 218, "Novel");
// Outputs: {name: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 218, genre: "Novel"}

/* ----- 3 ----- */

function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}
findMaxNumber([1, 3, 2, 5, 4]); // Outputs: 5
findMaxNumber([]); // Outputs: undefined
findMaxNumber([7, 22, 15]); // Outputs: 22

/* ----- 4 ----- */

function findMinNumber(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let minNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
  }
  return minNum;
}
findMinNumber([5, 2, 9, 3]); // Returns: 2
findMinNumber([]); // Returns: undefined
findMinNumber([45, -10, 0, 30]); // Returns: -10

/* ----- 5 ----- */

function findMinMax(numbers) {
  if (numbers.length === 0) {
    return { min: undefined, max: undefined };
  }
  let minNum = numbers[0];
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return { min: minNum, maxNum: maxNum };
}
findMinMax([3, 1, 4, 1, 5, 9, 2, 6]); // Returns: { min: 1, max: 9 }
findMinMax([]); // Returns: { min: undefined, max: undefined }
findMinMax([7]); // Returns: { min: 7, max: 7 }

/* ----- 6 ----- */

function findLongestShortestString(str) {
  if (str.length === 0) {
    return { longest: undefined, shortes: undefined };
  }
  let shortes = str[0];
  let longest = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
    if (str[i].length < shortes.length) {
      shortes = str[i];
    }
  }
  return { longest: longest, shortes: shortes };
}
findLongestShortestString(["apple", "banana", "grape", "kiwi"]); // Returns: { longest: "banana", shortest: "kiwi" }
findLongestShortestString([]); // Returns: { longest: undefined, shortest: undefined }
findLongestShortestString(["circle", "point"]); // Returns: { longest: "circle", shortest: "point" }

/* ----- 7 ----- */

function countCharactersIgnoreSpaces(str) {
  let strWithoutSpace = str.replaceAll(" ", "");
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);
}
countCharactersIgnoreSpaces("hello world"); // Returns: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
countCharactersIgnoreSpaces("banana"); // Returns: { b: 1, a: 3, n: 2 }
countCharactersIgnoreSpaces("!! wow !!"); // Returns: { '!': 4, w: 2, o: 1 }
