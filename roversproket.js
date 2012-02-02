var vokaler = "aeiou";
var setning = "dette er roversproket";
var slutt = '';
var i;
for (i = 0; i <= setning.length; i++) {
    if (vokaler.indexOf(setning.substring(i, i+1))<=-1 && setning.substring(i, i+1)!=" ") {
        slutt += setning.substring(i, i+1) + "o" + setning.substring(i, i+1);
    }
    else {
        slutt += setning.substring(i, i+1);
    }
}
console.log(slutt);
