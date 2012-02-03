console.log("hva skjer?");
// setting up an array
var myArray = new Array("per", "pal", "espen", "askeladden", "prinsessen");
console.log("checking nr of items in Array: " + myArray.length);

// running trhough it
console.log("What is in the Array:");
for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
console.log("--------");

// finding a spesific name and printing its place
console.log("Where is espen? ");
for (i = 0; i <= myArray.length; i++) {
    if (myArray[i] == "espen") {
        console.log(i);
}
}

// exchanging espen for backwards verison
console.log("turn espen arround: ");
var baklengs = '';
var i;
for (i = myArray[2].length; i >= 0; i--) {
    if (i === myArray[2].length) {
        var bokstav = myArray[2].substring(i);
    } else {
    var bokstav = myArray[2].substring(i, i + 1);
    }
    console.log(bokstav);
    baklengs += bokstav;
}
myArray[2] = baklengs;
console.log("snudd?: " + baklengs);

// running trhough it
console.log("What is in the Array:");
for (i = 0; i <= myArray.length; i++) {
    console.log(myArray[i]);
}

// list input
console.log("who to turn next?: ");
for (i = 0; i <= myArray.length; i++) {
    console.log("(" + i + ") " + myArray[i]);
}