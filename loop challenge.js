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
var l33t = "";
var l33tstring = "Coders are elites in the digital world";
for (var i = 0; i < l33tstring.length; i++) {
    var tmpLetter = l33tstring.charAt(i);
    if (tmpLetter.indexOf("leo")) {
        switch (tmpLetter) {
        case "e":
            tmpLetter = 3;
            break;
        case "l":
            tmpLetter = 7;
            break;
        case "o":
            tmpLetter = 0;
            break;
        default:
            tmpLetter = tmpLetter;
            break;
        }
    }
l33t += tmpLetter;
}
console.log(l33t);

// random order of letters
var rndString = "Bullshit is easy to make, even from meaning";
var rnd = "";
var rndArray = rndString.split(" ");
console.log(rndArray);
for (var i = 0; i < rndArray.length; i++) {
    rndArray[i] = rndArray[i].split("").sort(function() {
       return 0.5 - Math.random();
    }).join("");
}
console.log(rndArray.join(" "));

// roversproketvar 
var vocals = "aeiou";
var sentence = "Banditslanguage is a scandinavian word game of sorts";
var resultSentence = '';
for (var i = 0; i <= sentence.length; i++) {
    if (vocals.indexOf(sentence.substring(i, i+1))<=-1 && sentence.substring(i, i+1)!=" ") {
        resultSentence += sentence.substring(i, i+1) + "o" + sentence.substring(i, i+1);
    }
    else {
        resultSentence += sentence.substring(i, i+1);
    }
}
console.log(resultSentence);


// psychol - first and last letter correct all others scrambeled
var psychString = "It is amazing how the mind makes order and meaning based on previouse knwoledge";
var pArray = psychString.split(" ");
var newPsychString = "";
for (var i = 0; i < pArray.length; i++) {
    var pWord = pArray[i].split("");
    var last = pWord.pop();
    var first = pWord.shift();
    pWord = pWord.sort(function() {
       return 0.5 - Math.random();
    }).join("");
    pArray[i] = first + pWord + last;
    console.log(pArray[i]);
    newPsychString += pArray[i] + " ";
};
console.log(newPsychString);
