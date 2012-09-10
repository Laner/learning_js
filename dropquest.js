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
            var half = ((strArr[i].length/ 2)-1);
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

var func10 = function(str) {
    var newstr = str.replace(/\s/g,"");
    return newstr;
};
var newmsg = func1(message);
newmsg = func2(newmsg);
newmsg = func5(newmsg);
newmsg = func7(newmsg);
newmsg = func8(newmsg);
newmsg = func9(newmsg);
newmsg = func10(newmsg);
console.log("[" + newmsg + "]");

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
    test(func5,"THE TABLES TURN", "EHT SELBAT NRUT");
    test(func5,"CAN CAN DANCE", "CAN CAN DANCE");
    //func7 insert P in the middel of all even words
    test(func7,"A WORD APART", "A WOPRD APART");
    test(func7,"FOUR FISH FINGERS", "FOPUR FIPSH FINGERS");
    test(func7,"ERIKA ELENIAK", "ERIKA ELENIAK");
    //func8 Remove every word that doesn't start with a vowel.
    test(func8,"WHAT ABOUT WHITHESPACES", " ABOUT ");
    test(func8,"AUDREY TAUTOU", "AUDREY ");
    test(func8,"CANT CLUTCH DIS", "  ");
    //func9 Remove all words that have 3 letters or less.
    test(func9,"FOUR THREE AND WE", "FOUR THREE  ");
    test(func9,"WATCH THE WHITHESPACES", "WATCH  WHITHESPACES");
    test(func9,"PAULA ABDUL", "PAULA ABDUL");
    //func10 Remove all whitespaces.
    test(func10,"TIGHT  SQUEEZE", "TIGHTSQUEEZE");
    test(func10,"SAMANTHA FOX", "SAMANTHAFOX");
    test(func10,"ALONGWORDWITHNOSPACE", "ALONGWORDWITHNOSPACE");
}
// main();
    // console.log(test.toString());

//working validator
//starts here:
function log() {
    //assignes a value to the result var based on console output
    var result = 0;
	if (CC.printed("INDEPENDENT")) {
        //CC.printed is a built in function from Codecademy
		console.log("You solved it. Nice!");
		result = 1;
	} else if (CC.printed("Show me")) {
		console.log(more.toString());
		console.log(test.toString());
		result = -1;
	}
	return result;
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
    if (typeof func1 != "undefined") {
        //does var exsist?
        var func = func1;
        console.log(func);
        if (typeof func == "function") {
            //is it a function? if so run test
            var test1 = test(func,"A PUZZLE FOR YOU", "A  FOR YO");
            var test2 = test(func,"BEE BA PELULA", "B BA A");
            var test3 = test(func,"CODECADEMY", "CODCADMY");
            result = test1 && test2 && test3;
        }
    } else {
        console.log("Have you created the function? (or checked the spelling)");
    }
    return result;
}
// more();
// var logs = log();
//evaluate log from console and run func based on output
var logs = 10;
if (logs == 1 ) {
	return true;
} else if (logs == -1) {
	return false;
} else {
	return more();
}
var newmsg = func1(message);
newmsg = func2(newmsg);
newmsg = func5(newmsg);
console.log("test" + newmsg);
