/* Make a card object that contains suit and rank
Add methods to retrive the suit and rank so they are kept privat
*/


// test to see if the deck is correct and randomized
function listDeck(d) {
    var decklength = d.length;
    for (var i = 0; i < decklength; i++) {
        console.log( i + ": " + d[i].getNumber() + d[i].getSuit());
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