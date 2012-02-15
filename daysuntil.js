//script for calculation days until input day

function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

}

/// working!
var today = new Date();
var futureDate = new Date(2012,2,7);
var diff = futureDate - today;
console.log(diff);
var msInADay = 1000 * 60 * 60 * 24;
console.log(Math.floor(diff / msInADay + 1));
console.log(futureDate.toDateString());