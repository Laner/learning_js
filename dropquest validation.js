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