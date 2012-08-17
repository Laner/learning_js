var message = "THE QUICK WN F JUMS VE THE LAZY G THA QOECK BRIWN FIX JOMPS FVAR THA LUZY DIG THA QECK IWN FI JMS IVA THA LUZY IG QUICK JUMS LAZY QUICK BROWN JUMPS OVER LAZY THU QIACK BREWN FEX JIMPS EVUR THU LOZY DEG EHT KCIUQ BROWN FOX JUMPS REVO EHT LAZY DOG THA QOECK WN F JOMS ONDIPINDINT VA THA LUZY G AHT KCEOQ BRIWN FIX JOMPS LVAR AHT LUZY DIG";
console.log(message + " org");

/*
*Function 1 - Remove all letters that appear in the word DROPBOX
Function 2 - Replace each vowel with the one before it (a→u, e→a, i→e, o→i, u→o)
Function 5 - Reverse every word that starts with a letter in the second half of the alphabet.
Function 9 - Remove all words that have 3 letters or less.*
*/
var func1 = function(str) {
    var newstr = str.replace(/[PUZZLE]/g,"");
    return newstr;
};

var func2 = function(str) {
    var newString = str.replace( /[aeiou\s]/gi, function (c) {
        switch (c) {
            case "A":
                c = "U";
                break;
            case "E":
                c = "A";
                break;
            case "I":
                c = "E";
                break;
            case "O":
                c = "I";
                break;
            case "U":
                c = "O";
                break;
            default:
                break;

        }
        return c;
    });
    return newString;
};

var func5 = function(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        var word = strArray[i];
            if (word.charAt(0).match(/[NOPQRSTUVWXYZ]/gi)) {
                strArray[i] = word.split("").reverse().join("");
            }
    }
    return strArray.join(" ");
};

var func7 = function(str) {
    var strArr = str.split(" ");
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i].length % 2 === 0) {
            var half = ((strArr[i].length / 2)-1);
            strArr[i] = strArr[i].substring(0, half) + "P" + strArr[i].substring(half);
        }
    }
    return strArr.join(" ");
};

var func8 = function(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        var word = strArray[i];
            if (!word.charAt(0).match(/[AEIOU]/gi)) {
                strArray[i] = "";
            }
    }
    return strArray.join(" ");
};

var func9 = function(str) {
    var strArr = str.split(" ");
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i].length <= 3) {
                strArr[i] = "";
            }
        }
    return strArr.join(" ");
};

var func10 = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
};

String.prototype.func1 = function() {
    return this.replace(/[PUZZLE]/g,"");
};
function main() {
    function test (func, input, expect) {
        var got = func(input);
        var prefix = "";
        if (got === expect) {
            prefix = "OK";
        } else {
           prefix = "X";
        }
        console.log(prefix + " ==> input: " + input + " got: " + got + " expected: " + expect);
    }
    test(func1,"A PUZZLE FOR YOU", "A  FOR YO");
    test(func1,"BEE BA PELULA", "B BA A");
    test(func1,"CODECADEMY", "CODCADMY");

    test(func2,"THI BRUWN FUX", "THE BROWN FOX");
    test(func2,"TAEIOUT", "TUAEIOT");
    test(func2,"MEGAN FOX", "MAGUN FIX");
    // console.log(test.toString());
}