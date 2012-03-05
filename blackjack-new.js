// what should cointain what?
// should have a card obj that cointains data, is sorted and is pusched into a 
//deck array the deck should then be shuffled. 

function Card(s,r) {
    this.suit = s;
    this.rank = r;
}
var deck;
// make a deck that filles an array with cards
function makeDeck(d) {
    deck = [];
    var suit = [1, 2, 3, 4];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    var i, s, r;
    var suitlength = suit.length;
    var ranklength = rank.length;
    for (i = 0; i < d; i++) {
        for (s = 0; s < suitlength; s++) {
            for (r = 0; r < ranklength; r++) {
                deck.push(new Card(suit[s], rank[r]));
            }
            
        }
    }
    return deck;
}
function listDeck(d) {
    var decklength = d.length;
    var i;
    for (i = 0; i < decklength; i++) {
        console.log( i + ": " + d[i]);
    }
}
makeDeck(1);
console.log(deck[10]);
listDeck(deck);