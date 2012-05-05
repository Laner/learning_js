/********** SCROLL DOWN TO BEGIN ************/

GuessingGame = function(min, max) {
    this.init(min, max);
};

GuessingGame.prototype = {
    minNumber: 1,
    
	maxNumber: 10,
	
	secretNumber: null,
	
	lastMessage: null,
    
    totalGuesses: 0,
	
	init: function(min, max) {
		/* 
		* assign minNumber to the value provided OR the existing value
		* using the || syntax means that the code should return whichever 
		* result is more complete. In this case, if the user were to 
		* leave the value for min empty, the code would use the existing 
		* value instead of the empty value.
		*/
		this.minNumber = min || this.minNumber;
		
		// assign maxNumber to the value provided OR the existing value
		this.maxNumber = max || this.maxNumber;
		
		this.generateNumber();
	},
    
	generateNumber: function() {
		// generate random number between minNumber and maxNumber and assign it to secretNumber
		this.secretNumber = Math.floor(this.minNumber + (Math.random() * this.maxNumber));
	},
    
	guess: function(guess) {
        this.totalGuesses++;
        
		if(guess < this.secretNumber) { // if the guess is less than the secret number
			this.message = guess + " is too low. Try again!";
			
			return false;
		} 
		else if (guess > this.secretNumber) { // if the guess is greater than the secret number
			this.message = guess + " is too high. Try again!";
			
			return false;
		} 
		else { // if the guess is neither greater nor less than the secret number: it is equal
			this.message = "Congratulations, " + guess + " is correct!";

			return true;
		}
	}
};

var game = new GuessingGame();
var guessResult = false;

/********** BEGIN LOOP HERE ************/
do {
	/*
	* Prompt the player to enter the guess.
	*/
	var guessStr = prompt("Guess a number between " + game.minNumber + " and " + game.maxNumber + ":");	

	/*
	* The following conditional will check whether or not the player entered a
	* value for the guess and determine if it "is not a number" with the call 
	* to isNaN(). If either of these return true, we should inform the player 
	* that they provided an invalid guess.
	*/
	if(guessStr && !isNaN(guessStr)) {
		/* 
		* parseInt(value, radix) is a function built into JavaScript which will
		* try to convert a value like "5" to its integer equivalent of 5. Doing 
		* so will allow us to easily compare the value to another number. The 
		* first argument parsed to parseInt() is the value to convert, and the 
		* second argument specifies the numerical system to use for conversion
		* (base 2, 8, 10, 16, etc).
		*/
		var guessInt = parseInt(guessStr, 10);
		
		guessResult = game.guess(guessInt);
		
		console.log(game.message);
	}

} while (!guessResult);	
/********** END LOOP HERE ************/