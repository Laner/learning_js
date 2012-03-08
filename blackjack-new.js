/* Make a card object that contains suit and rank
Add methods to retrive the suit and rank so they are kept privat
*/

function Card(s,r) {
    var suit = s;
    var rank = r;
    this.getSuit = function() {
        return suit;
    };
    this.getRank = function() {
        return rank;
    };
    this.getCard = function() {
        return this.getRank() + " of " + this.getSuit();
    };
    
}

// make a number of decks from the predefined arrays
// that filles an array with cards
// make deck global
var deck = [];
function makeDeck(nrOfDecks) {
    // arrays to fill the deck from
    var suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    // set the length of the arrays
    var suitlength = suit.length;
    var ranklength = rank.length;
    //fill the deck based on the parameters
    for (var i = 0; i < nrOfDecks; i++) {
        for (var s = 0; s < suitlength; s++) {
            for (var r = 0; r < ranklength; r++) {
                var card = new Card(suit[s], rank[r]);
                deck.push(card);
            }
            
        }
    }
    // shuffles the deck by the built in .sort method
    deck.sort(function() {return 0.5 - Math.random()});
    return deck;
}

// test to see if the deck is correct and randomized
function listDeck(d) {
    var decklength = d.length;
    for (var i = 0; i < decklength; i++) {
        console.log( i + ": " + d[i].getCard());
    }
}

// make a player object that takes care of the scoring
// and have a hand to store the cards form the deck
function player(name) {
    this.name = name;
    this.hand = [];
    this.score = function() {
        var handsize = this.hand.length;
        var score = 0; 
        var haveace = false;
        //first we check for aces
        //and then loop the hand and add score
        for (var h = 0; h < handsize; h++) {
            var rank = this.hand[h].getRank();
            if ( rank === "A") {
                score += 11;
                haveace = true;
            } else if (isNaN(rank)) {
                score += 10;
            } else {
                score += this.hand[h].getRank();
            }
        }
        if (score > 21 && haveace) {
            score -= 10;
        }
        return score;
    };
    this.hitme = function() {
        deal(this, 1);
    };
    this.totalScore;
    this.showHand = function() {
        var length = this.hand.length;
        for (var h = 0; h < length; h++) {
            return this.hand[h].getCard() + this.showHand();
        }
    };
}


// a function to deal cards to players
// TODO: add a loop so that each player gets one card at a time
function deal(toWhom, nrOfCards) {
    var length = toWhom.length;
    for (var i = 0; i < nrOfCards; i++) {
        for (var j = 0; j < length; j++) {
            toWhom[j].hand.push(deck.shift());
        }
    }
}

// a game function that contains as it gets played.
function game() {
    makeDeck(1);
    var Runar = new player("runar");
    var Dealer = new player("dealer");
    console.log("Welcome to BlackJack!");
    deal([Runar, Dealer], 2);
    console.log(Runar.showHand());
    console.log("For the score of: " + Runar.score());
    console.log(Dealer.showHand());
    console.log("For the score of: " + Dealer.score());
    
}
game();

//listDeck(deck);
//var Runar = new player("runar");
//console.log(deck[0]);
//console.log(Runar.hand.length);
//deal(Runar, 3);
//console.log(Runar.hand.length);
//console.log("here: " + Runar.hand[0].getRank());
//console.log("there: " + Runar.hand[1].getRank());
//console.log("where: " + Runar.hand[2].getRank());
//Runar.hitme();
//console.log("every: " + Runar.hand[3].getRank());
//console.log(Runar.score());