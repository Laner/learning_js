function more() {
	var result = true;
	function test (func, input, expect) {
		var got = func(input);
		var prefix = "";
		if (got === expect) {
			prefix = "OK";
		} else {
			prefix = "X";
			result = false;
   		}
		console.log(prefix + " ==> input: " + input + " got: " + got + " expected: " + expect);
	}
	test(func1,"A PUZZLE FOR YOU", "A  FOR YO");
	test(func1,"BEE BA PELULA", "B BA A");
	test(func1,"CODECADEMY", "CODCADMY");
	return result;
}
var func1 = function(str) {
	var newstr = str.replace(/[PUZZLE]/g,"");
	return newstr;
};

console.log(more());

function log() {
	var result = 0;
	if (CC.printed("INDEPENDENT")) {
		console.log("You solved it. Nice!");
		result = 1
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
};