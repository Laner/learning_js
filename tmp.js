// Paste the rotate function here:
String.prototype.rotate = function(n) { // n is an integer
	n %= this.length; // too large numbers: modulo
	var cut = n < 0 ? -n : this.length - n; // cutting point
	return this.substr(cut) + this.substr(0,cut);
};
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var rot13_dict = {};

var first = alphabet + alphabet.toLowerCase();
var second = alphabet.rotate(13) + alphabet.rotate(13).toLowerCase();
first.split("").forEach(
	function(f, i){
		rot13_dict[f] = second.split("")[i];
	});

function rot13_map (letter) {
	var a = (rot13_dict[letter]) ? rot13_dict[letter] : letter;
	return a;
}
function rot13 (arg) {
	return arg.split("").map(rot13_map).join("");
}
console.log(rot13("N pnegbba"));