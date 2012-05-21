var string = "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ";
var newString = "";

var stringArray = string.split(" ");

for (var i = 0; i < stringArray.length; i++) {
    var tmpWord = "";
    for (var j = stringArray[i].length - 1; j >= 0; j--) {
        tmpWord += stringArray[i].charAt(j);
    }
    if (stringArray.length - 1 != i) {
        tmpWord += " ";
    }
    newString += tmpWord;
}
console.log(newString);

// l33t speak
var l33tString = "";
for (var i = 0; i < string.length; i++) {
    var tmpLetter = string.charAt(i);
    tmpLetter = "e" ? l33tString += "3" : l33tString += tmpLetter;
    switch (tmpLetter) {
    case "e":
        tmpLetter = 3;
        break;
    default:
        break;

    }

}
// random order of letters
// roversproket
// psychol - first and last letter correct all others scrambeled
