// script that outputs areal, cubic or surface


//numbers = new Array(Number(prompt("What are the measurements?")));
var numbers = prompt("inn");
var a = new Array([]);

a = Number(numbers.split(","));

console.log(a);

//var numbers = [2, 4];
//console.log(numbers.length);
checkLength(a);

function checkLength(x) {
    if (typeof x[0] != 'number') {
        alert("Input numbers please");
    } else if (x.length === 0 || x.length ===1) {
        alert("Need 2 numbers or more");
    } else if (x.length === 2) {
        return "Areal: " + calAreal(numbers);
    } else if (x.length === 3) {
        return "Cubic is: " + calCubic(numbers);
    } else {
        return "No can do :(";
   }
}

function calAreal(x) {
    var i;
    var areal = 1;
    for (i = 0; i <= x[i]; i++) {
        areal *= x[i] ;
    }
    return areal;
}

function calCubic(x) {
    var i;
    var cubic = 1;
    for (i = 0; i <= x[i]; i++) {
        cubic *= x[i] ;
    }
    return cubic;
}
// S.split(/[^0-9\.]/)