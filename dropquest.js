var message = "THE QUICK WN F JUMS VE THE LAZY G THA QOECK BRIWN FIX JOMPS FVAR THA LUZY DIG THA QECK IWN FI JMS IVA THA LUZY IG QUICK JUMS LAZY QUICK BROWN JUMPS OVER LAZY THU QIACK BREWN FEX JIMPS EVUR THU LOZY DEG EHT KCIUQ BROWN FOX JUMPS REVO EHT LAZY DOG THA QOECK WN F JOMS ONDIPINDINT VA THA LUZY G AHT KCEOQ BRIWN FIX JOMPS LVAR AHT LUZY DIG";
console.log(message + " org");

/*
*Function 1 - Remove all letters that appear in the word DROPBOX
Function 2 - Replace each vowel with the one before it (a→u, e→a, i→e, o→i, u→o)
Function 5 - Reverse every word that starts with a letter in the second half of the alphabet.
Function 9 - Remove all words that have 3 letters or less.*
*/
function func1(str) {
    var newstr = str.replace(/[PUZZLE]/g,"");
    return newstr;
}
var message2 = func1(message);
console.log(message2 + " func1 -JAVASCRIPT");

function func2(str) {
    var newString = str.replace(/A/gi,"U").replace(/E/gi,"A").replace(/I/gi,"E").replace(/O/gi,"I").replace(/U/gi,"O");
    return newString;
}

message2 = func2(message2);
console.log(message2 + " func2 exchange");

function func5(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        var word = strArray[i];
            if (word.charAt(0).match(/[NOPQRSTUVWXYZ]/gi)) {
                strArray[i] = word.split("").reverse().join("");
            }
    }
    return strArray.join(" ");
}

message2 = func5(message2);
console.log(message2 + " func5 reverse");

function func7(str) {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length % 2 === 0) {
            var half = ((strArr[i].length / 2)-1);
            strArr[i] = strArr[i].substring(0, half) + "P" + strArr[i].substring(half);
        }
    }
    return strArr.join(" ");
}
message2 = func7(message2);
console.log(message2 + " func7 add P");

function func8(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        var word = strArray[i];
            if (!word.charAt(0).match(/[AEIOU]/gi)) {
                strArray[i] = "";
            }
    }
    return strArray.join(" ");
}

message2 = func8(message2);
console.log(message2 + " func8 reverse");

function func9(str) {
    var strArr = str.split(" ");
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i].length <= 3) {
                strArr[i] = "";
            }
        }
    return strArr.join(" ");
}
message2 = func9(message2);
console.log(message2 + " func9 remove");
