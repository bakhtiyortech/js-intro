/* ----- 1 ----- */

function createCamelCase(str) {
    var words = str.split(" ");
    var camelCase = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (i > 0) {
            camelCase += word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            camelCase += word.toLowerCase()
        }
        
    }
     return camelCase;
}

/* ----- 2 ----- */

function replaceSpacesWithUnderscore(str) {
    var underscoreBetweenStr = str.split(" ").join('_');
    return underscoreBetweenStr;
}

/* ----- 3 ----- */

function swapFirstAndLastName(fullName) {
    var name = fullName.split(" ");
    var resultAfterSwap = [];
    for (var i = name.length - 1; i >= 0; i--){
        resultAfterSwap.push(name[i]);
    }
    return resultAfterSwap;
}

/* ----- 4 ----- */

function createHashtag(str) {
    var words = str.split(" ");
    var hashTag = "#";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        hashTag += word.charAt(0).toUpperCase() + word.slice(1);
    } 
    return hashTag;
}