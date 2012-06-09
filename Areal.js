// script that outputs areal, cubic or surface

console.log(numbers.length);
checkLength(numbers);

function checkLength(numbers) {
    if (typeof numbers[0] != 'number') {
        alert("Input numbers please");
    } else if (numbers.length === 0 || numbers.length ===1) {
        alert("Need 2 numbers or more");
    } else if (numbers.length === 2) {
        return "Areal: " + calAreal(numbers);
    } else if (numbers.length === 3) {
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