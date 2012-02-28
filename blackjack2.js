// Make your card constructor again here, but make sure to use private
// variables!
function Card(s, n) {
    var suit = s;
    var number = n;
    this.getSuit = function() {
        return suit;
    };
    this.getNumber = function() {
        return number;
    };
    this.getValue = function() {
        if (number >= 10) {
            return 10;
        } else if (number === 1) {
            return 11;
        } else {
            return number;
        }
    };
    this.getSuitName = function() {
        var suitName = "";
        switch (suit) {
            case 1:
                suitName = "Diamonds";
                break;
            case 2:
                suitName = "Clubs";
                break;
            case 3:
                suitName = "Hearts";
                break;
            case 4:
                suitName = "Spades";
                break;
            default:
                suitName = "No suit";
        }
    };
    this.getRank = function() {
        var rank = "";
        switch (number) {
            case 1:
                rank = "Ace";
                break;
            case 11:
                rank = "Knight";
                break;
            case 12:
                rank = "Queen";
                break;
            case 13:
                rank = "King";
                break;
            default:
                rank = number;
        }
    };
}
// answer to extra credit 1.
function Hand() {
    var card1 = new deal();
    var card2 = new deal();
    this.score = function() {
        return card1.getValue() + card2.getValue();
    };
}
// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
function deal() {
    var suit = Math.floor(Math.random() * 4 + 1);
    var number = Math.floor(Math.random() * 13 + 1);
    return new Card(suit, number);
}

/*
TODO - What kind of methods might we want to add to see or print out the 
cards in a hand, so that a 12 of suit 3 prints as "King of Hearts"?
*/


/*
TODO
Our Card class is almost set, but there is definitely a problem with our 
Hand class right now because it only holds 2 cards. How can we change the 
Hand class to make it flexible so we can continue adding cards? 
(As in when the player says "hit me")
*/
var myHand = new Hand(); var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());
console.log("In your hand you have" + myHand.card1.getRank() + " of " + myHand.card1.getSuitName());
if(yourHand.score() > myHand.score()) console.log("you win!"); else if(yourHand.score() < myHand.score()) console.log("I win!"); else console.log("We tied!");