// make a number of decks from the predefined arrays
// that filles an array with cards
function makeDeck(nrOfDecks) {
    //make a deck array to fill with cards
    deck = [];
    // arrays to fill the deck from
    var suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    // set the length of the arrays
    var suitlength = suit.length;
    var ranklength = rank.length;
    //fill the deck based with card obj that have uniqe cominations
    //loop through for each deck I want to create
    for (var i = 0; i < nrOfDecks; i++) {
        //then loop through all suits in array
        for (var s = 0; s < suitlength; s++) {
            //loop through all rank in array
            for (var r = 0; r < ranklength; r++) {
                //create card obj with parameters from loop counters
                var card = new Card(suit[s], rank[r]);
                //insert into deck
                deck.push(card);
            }

        }
    }
    // shuffles the deck by the built in .sort method
    deck.sort(function() {return 0.5 - Math.random();});
    //return deck;
}
// Card Constructor
function Card(s, n) {
    var suit = s;
    var numb = n;
    //getter for suit nr
    this.getSuit = function() {
        return suit;
    };
    //getter for rank, can be string or integer
    this.getNumber = function() {
        return numb;
    };
    //getter that transelates rank into point value
    this.getValue = function() {
        if (numb === "Ace") {
            return 11;
        } else if (typeof(numb) == "string") {
            return 10;
        } else {
            return numb;
        }
    };
}
//Make 6 dekcs
makeDeck(6);

//Hand constructor
function Hand() {
    var cards = [];
    cards.push(deck.shift());
    cards.push(deck.shift());
    this.getHand = function() {
        return cards;
    };
    this.score = function() {
        var length = cards.length,
        handscore = 0,
        nrOfAces = 0;
        for (var i = 0; i < length; i++) {
            handscore += cards[i].getValue();
            if (cards[i].getValue() === 11) {
                nrOfAces++;
            }
        }
        while (handscore > 21 && nrOfAces > 0) {
            handscore -= 10;
            nrOfAces--;
        }
        return handscore;
    };
    this.printHand = function() {
        var length = cards.length,
        suitName = "",
        handList = "";
        for (var i = 0; i < length; i++) {
            handList += cards[i].getNumber() + " of " + cards[i].getSuit() + ", ";
        }
        return handList;
    };
    this.hitMe = function() {
        cards.push(deck.shift());

    };
    this.getCards = function() {
        return cards;
    };
}

//make a dealer
var Dealer = new Hand();
//how the dealer play
Dealer.play = function() {
    while (this.score() <= 16) {
           this.hitMe();
    }
    return this.printHand();
};
//show pointvalue of dealers first card
Dealer.firstCardValue = function() {
        return this.getHand()[0].getValue();
};

for (var prop in Dealer) {
    console.log("Dealer har: " +prop);
}
//player and basic strat for the player
var Player = new Hand();
Player.play = function() {
    var dealersCard = Dealer.firstCardValue();
    var handSum = Player.score();
    if (Player.getHand()[0].getValue() === Player.getHand()[1].getValue()) {
        
    }
};

 // TODO add strategy http://www.blackjackinfo.com/bjbse.php?numdecks=6+decks&soft17=s17&dbl=all&das=yes&surr=ns&peek=no
 
console.log(Dealer.firstCardValue());
console.log(Hand);
console.log(Dealer);