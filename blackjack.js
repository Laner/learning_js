// Our deal function will return a random card
var deal = function() {
  var card = Math.floor(Math.random()*52+1);
  return card;
};

// Deal out our first hand
var card1 = deal();
var card2 = deal();

// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
  // if its a face card, number should be set to 10        
    if (card % 13 === 0 || card % 13 >= 11) {
        return 10;
    }
  // What if it's an ace?
    else if (card  % 13 === 1) {
        return 11;
    } else {
        return card % 13;
    }
  // Otherwise, we just want its number value
};
        
// Score the hand
function score() {
  return getValue(card1) + getValue(card2);
}

console.log("You have cards " + card1 + " and " + card2 + " for a score of " + score(card1, card2));

test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
console.log(" ",month,"/",day,"/",year," ")
