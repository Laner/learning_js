// make a number of decks from the predefined arrays
// that filles an array with cards
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
// Card Constructor
function Card(s, n) {
    var suit = s;
    var numb = n;
    this.getSuit = function() {
        return suit;
    };
    this.getNumber = function () {
        return numb;
    };
    this.getValue = function() {
        if (numb === "A") {
            return 11;
        } else if (numb.typof == "string") {
            return 10;
        } else {
            return numb;
        }
    };
}

function Hand() {
    var cards = [];
    cards.push(deck.shift());
    cards.push(deck.shift());
    this.getHand = function() {
        return cards;
    };
    this.score = function() {
        var length = cards.length, handscore = 0, nrOfAces = 0;
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
    this.printHand = function () {
        var length = cards.length, suitName = "", handList = "";
        for (var i = 0; i < length; i++) {
            var suit = cards[i].getSuit();
            switch (suit) {
                case 1:
                    suitName = "clubs";
                    break;
                case 2:
                    suitName = "diamonds";
                    break;
                case 3:
                    suitName = "hearts";
                    break;
                case 4: 
                    suitName = "spades";
                    break;
                default:
                    suitName = "No name";
                    break;
            }
            handList += cards[i].getValue() + " of " + suitName + ", ";
        }
        return handList;
    };
    this.hitMe = function() {
            cards.push(deal());
    
    };
}

function playAsDealer () {
    var hnd = new Hand();
    while (hnd.score() <= 16) {
        hnd.hitMe();
    }
    return hnd;
}
function playAsUser(){
     var playerHand = new Hand();
     while(confirm("Your hand: \n" + playerHand.printHand() + "\nHit?") ===true) {
         playerHand.hitMe();
     }
     return playerHand;
 }
function declareWinner(userHand, dealerHand) {
    function getScore(hand) {
        return hand.score() > 21 ? 0 : hand.score();
    }
    var userScore   = getScore(userHand);
    var dealerScore = getScore(dealerHand);
    if (userScore > dealerScore) { return "You win!"; }
    else if (userScore < dealerScore) { return "You lose!"; }
    else return "You tied!";
}
function playGame() {
    var player = playAsUser();
    var dealer = playAsDealer();
    var result = declearWinner(player, dealer);
    console.log("Players has: " +player.printHand());
    console.log("For the score of: " + player.score());
    console.log("Dealers has: "+ dealer.printHand());
    console.log("For the score of: " + dealer.score());
    console.log("result: " + result);
}
playGame();
//-----------------------------------------------------------------------
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
    this.totalScore = 0;
    this.showHand = function() {
        var length = this.hand.length;
        var currentHand =  "";
        for (var h = 0; h < length; h++) {
    		if (h < length - 1) {
				currentHand += this.hand[h].getCard() + "\n";
			} else {
				currentHand += this.hand[h].getCard() ;
			}
        }
        return currentHand;
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
// show hand
function showHand(players) {
	var length = players.length;
	for (var i = 0; i < length; i++) {
		console.log(players[i].name);
	    console.log(players[i].showHand());
	    console.log("For the score of: " + players[i].score() + "\n");		
	}
}

// a game function that contains as it gets played.
function game() {
    makeDeck(1);
    var Runar = new player("runar");
    var Dealer = new player("dealer");
    console.log("Welcome to BlackJack!");
    deal([Runar, Dealer], 2);
	showHand([Runar, Dealer]);
    var hit = true;
    while (hit) {
        hit = confirm ("Hit?");
        if (hit === true) {
            deal([Runar],1);
            showHand([Runar]);
            
        }
    }
        
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