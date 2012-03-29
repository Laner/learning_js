// make a number of decks from the predefined arrays
// that filles an array with cards
var deck = [];
function makeDeck(nrOfDecks) {
    // arrays to fill the deck from
    var suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
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
    deck.sort(function() {
        return 0.5 - Math.random()
    });
    return deck;
}
// Card Constructor
function Card(s, n) {
    var suit = s;
    var numb = n;
    this.getSuit = function() {
        return suit;
    };
    this.getNumber = function() {
        return numb;
    };
    this.getValue = function() {
        if (numb === "Ace") {
            return 11;
        } else if (typeof numb == "string") {
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
    this.firstCardValue = function() {
        return cards[0].getValue();
    };
    this.hitMe = function() {
        cards.push(deck.shift());

    };
}
var Dealer = {
    play: function() {
        while (this.score() <= 16) {
            this.hitMe();
        }
    return cards;
    },
    firstCardValue: function () {
        return cards[0].getValue();
    }
};

Dealer.prototype = new Hand();

console.log(Dealer.play());
console.log(Dealer.firstCardValue());

function playAsDealer() {
    var hnd = new Hand();
    while (hnd.score() <= 16) {
        hnd.hitMe();
    }
    return hnd;
}
function playAsUser() {
    var playerHand = new Hand();
    while (playerHand.score() <= 18) {
        playerHand.hitMe();
    }
    return playerHand;
    // TODO add strategy http://www.blackjackinfo.com/bjbse.php?numdecks=6+decks&soft17=s17&dbl=all&das=yes&surr=ns&peek=no
}
function declareWinner(userHand, dealerHand) {
    function getScore(hand) {
        return hand.score() > 21 ? 0: hand.score();
    }
    var userScore = getScore(userHand);
    var dealerScore = getScore(dealerHand);
    if (userScore > dealerScore) {
        return "You win!";
    }
    else if (userScore < dealerScore) {
        return "You lose!";
    }
    else return "You tied!";
}
function playGame() {
    makeDeck(1);
    var player = playAsUser();
    var dealer = playAsDealer();
    var result = declareWinner(player, dealer);
    console.log("Players has: " + player.printHand());
    console.log("For the score of: " + player.score());
    console.log("Dealers has: " + dealer.printHand());
    console.log("For the score of: " + dealer.score());
    console.log("Result: " + result);
}
//playGame();