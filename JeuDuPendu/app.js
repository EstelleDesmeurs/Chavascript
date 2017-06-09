var letters = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
var guessed = ['', '', '', '', '', '', ''];

function guessLetter () {
	var toGuess = prompt('Enter a letter : ');
	for (var i = 0; i < letters.length; i++) {
		if (prompt == letters[i]) {
			console.log("You find a letter!");
			guessed[i] = prompt; 


		}
		else {
			console.log("Try again...");
			guessLetter();
		}
}
}
guessLetter();


