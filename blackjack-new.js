// what should cointain what?
// should have a card obj that cointains data, is sorted and is pusched into a 
//deck array the deck should then be shuffled. 

function Card(s,r) {
    var suit = s;
    var rank = r;
    this.getSuit = function() {
        return suit;
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
    this.getRank = function() {
        return rank;
    };
    this.getCard = function() {
        return this.getRank() + " of " + this.getSuitName();
    };
    
}
var deck = [];
// make a deck that filles an array with cards
function makeDeck(nrOfDecks,shuffel) {
    var suit = [1, 2, 3, 4];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    var i, s, r;
    var suitlength = suit.length;
    var ranklength = rank.length;
    for (i = 0; i < nrOfDecks; i++) {
        for (s = 0; s < suitlength; s++) {
            for (r = 0; r < ranklength; r++) {
                deck.push(new Card(suit[s], rank[r]));
            }
            
        }
    }
    if (shuffel == "yes") {
        var deckSize = deck.length;
        for (i = 0; i < deckSize; i++) {
            var rndNr1 = Math.floor(Math.random()*deckSize);
            var tmp = deck[i];
            deck[i] = deck[rndNr1];
            deck[rndNr1] = tmp;
        }
    }
    return deck;
}

function listDeck(d) {
    var decklength = d.length;
    var i;
    for (i = 0; i < decklength; i++) {
        console.log( i + ": " + d[i].getCard());
    }
}

function player(name) {
    this.name = name;
    this.hand = [];
}
makeDeck(1,"yes");
listDeck(deck);