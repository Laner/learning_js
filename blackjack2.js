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
        switch (suit) {
            case 1:
                return "Diamonds";
            case 2:
                return "Clubs";
            case 3:
                return "Hearts";
            case 4:
                return "Spades";
            default:
                return "No suit";
        }
    };
    this.getCardName = function() {
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
                break;
        }
        return rank;
    };
}
// answer to extra credit 1.
function Hand() {
    var cards = [];
    this.score = function() {
        var idx = cards.length;
        var score = 0;
        while (idx > 0) {
            score += cards[idx - 1].getValue();
            idx--;
        }
        return score;
    };
    this.init = function() {
        cards[0] = new deal();
        cards[1] = new deal();
    };
    this.hitme = function() {
        cards[cards.length] = new deal();
    };
    this.listCards = function() {
        var idx = cards.length;
        console.log("In your hand you have: ");
        while (idx > 0) {
            console.log(cards[idx - 1].getCardName() + " of " + cards[idx - 1].getSuitName());
            idx--;
        }
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
var myHand = new Hand(); 
//var yourHand = new Hand();
myHand.init();
//yourHand.init();
console.log("score: " + myHand.score());
console.log("-------------------");
myHand.hitme();
console.log(myHand.score());
myHand.listCards();
//console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());
//console.log("In your hand you have" + myHand.card1.getRank() + " of " + myHand.card1.getSuitName());
/*
if(yourHand.score() > myHand.score()) {
    console.log("you win!"); 
    } else if(yourHand.score() < myHand.score()) {
        console.log("I win!"); 
    } else {
        console.log("We tied!");
    }
    */