/* ----- Challenge-1 ----- */

function swapFirstAndLast(arr) {
    var temp = arr[0];  
    arr[0] = arr[arr.length - 1];    
    arr[arr.length - 1] = temp;
    return arr;
}

/* ----- Challenge-2 ----- */

// 1.
function swapArrayElements(arr1, arr2) {
    var array = [];
    var temp1 = arr1[0];
    arr1[0] = arr2[arr2.length - 1];
    arr2[arr2.length - 1] = temp1;
    array.unshift(arr1);

    var temp2 = arr2[0];
    arr2[0] = arr1[arr1.length - 1];
    arr1[arr1.length - 1] = temp2;
    array.push(arr2);

    return array;
}

// 2.
function swapArrayElements(arr1, arr2) {
    var array = [];
    var temp1 = arr1[0];
    arr1[0] = arr2[arr2.length - 1];
    arr2[arr2.length - 1] = temp1;
    array.unshift(arr1);

    var temp2 = arr2[0];
    arr2[0] = arr1[arr1.length - 1];
    arr1[arr1.length - 1] = temp2;
    array.push(arr2)

    return array;
}

// 3. 
function swapArrayElements(arr1, arr2) {
    var array = [];
    array.unshift(arr1);
    array.push(arr2);

    return array;
}

/* ----- Challenge-3 ----- */

function swapMiddleElements(arr) {
    
    var middleChar1 = Math.floor(arr.length / 2);
    if (arr.length % 2 === 1) {
        var temp = arr[0];
        arr[0] = arr[middleChar1];
        arr[middleChar1] = temp;
    } 
    if (arr.length % 2 === 0) {
        var temp = arr[middleChar1 - 1];
        arr[middleChar1 - 1] = arr[middleChar1];
        arr[middleChar1] = temp;
    }
    return arr;
}

/* ----- Challenge-4 ----- */  

function swapUndefinedWithLengths(arrayStrings, arrayUndefined) {

    for (var i = 0; i < arrayStrings.length; i++) {
        if (arrayUndefined[i] === undefined) {
            arrayUndefined[i] = arrayStrings[i].length;
            var result = arrayUndefined;
        }
    }
    return result;
}

/* ----- Challenge-5 ----- */ 

function sumAdjacentPairs(arr) {
    var array = [];
    for (var i = 0; i < arr.length - 1; i += 2){
        array.push(arr[i] + arr[i + 1]);
    }
    return array;
}
