var message = "THE QUICK WN F JUMS VE THE LAZY G THA QOECK BRIWN FIX JOMPS FVAR THA LUZY DIG THA QECK IWN FI JMS IVA THA LUZY IG QUICK JUMS LAZY QUICK BROWN JUMPS OVER LAZY THU QIACK BREWN FEX JIMPS EVUR THU LOZY DEG EHT KCIUQ BROWN FOX JUMPS REVO EHT LAZY DOG THA QOECK WN F JOMS ONDIPINDINT VA THA LUZY G AHT KCEOQ BRIWN FIX JOMPS LVAR AHT LUZY DIG";
// console.log(message + " org");

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
            var half = ((strArr[i].length / 2));
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
    var strArr = str.split("");
    var result = [];
    console.log(strArr);
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == " ") {
            result.push(strArr[i]);
        }
    }
    result = result.join("");
    return result;
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
    //func1 remove the letters PUZZLE
    test(func1,"A PUZZLE FOR YOU", "A  FOR YO");
    test(func1,"BEE BA PELULA", "B BA A");
    test(func1,"CODECADEMY", "CODCADMY");
    //func2 switch to the vowel infornt
    test(func2,"THI BRUWN FUX", "THE BROWN FOX");
    test(func2,"TAEIOUT", "TUAEIOT");
    test(func2,"MEGAN FOX", "MAGUN FIX");
    //func5 reverse all words starting with a letter from the second half of the alphabet
    test(func5,"NANCY DREW", "YCNAN DREW");
    test(func7,"A WORD APART", "A WOPRD APART");
    test(func7,"ERIKA ELENIAK", "ERIKA ELENIAK");
    //func8 Remove every word that doesn't start with a vowel.
    test(func8,"AUDREY TAUTOU", "AUDREY ");
    test(func8,"CANT CLUTCH DIS", "  ");
    //func9 Remove all words that have 3 letters or less.
    test(func9,"WATCH THE WHITHESPACES", "WATCH  WHITHESPACES");
    //func10 Remove all whitespaces.
    test(func10,"SAMANTHA FOX", "SAMANTHAFOX");
    test(func10,"ALONGWORDWITHNOSPACE", "ALONGWORDWITHNOSPACE");
}
main();
    // console.log(test.toString());

//working validator TODO: rest of the functions
function log() {
    var result = 0;
	if (CC.printed("INDEPENDENT")) {
		console.log("You solved it. Nice!");
	} else if (CC.printed("Show me")) {
		console.log(more.toString());
		console.log(test.toString());
		result = -1
	}
	return result
}
function test (func, input, expect) {
// checks for existance of input and if expected matches output
	var got = func(input), prefix = "", result = false;
	if (got === expect) {
		prefix = "OK";
		result = true;
	} else {
		prefix = "X";
	}
	console.log(prefix + " ==> input: [" + input + "] got: [" + got + "] expected: [" + expect + "]");
	return result;
}

function more() {
	var result = false;
	if (typeof func1 != "undefined" && typeof func1 == "function") {
		var test1 = test(func1,"A PUZZLE FOR YOU", "A  FOR YO");
		var test2 = test(func1,"BEE BA PELULA", "B BA A");
		var test3 = test(func1,"CODECADEMY", "CODCADMY");
		result = test1 && test2 && test3;
	} else {
		console.log("Have you created the function? (or checked the spelling)");
	}
	return result;
}
var logs = log();
if (logs == 1 ) {
	return true;
} else if (logs == -1) {
	return false;
} else {
	return more();
}

