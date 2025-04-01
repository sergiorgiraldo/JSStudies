// Game variables
let secretCode = [];
let attempts = 6;
let gameOver = false;
let mode = "normal";
let withRepeating = false;
const codeLength = 5;

// DOM elements
const guessContainer = document.getElementById("guessContainer");
const currentGuessInputs = document.querySelectorAll("#currentGuess .input-digit");
const submitButton = document.getElementById("submitGuess");
const newGameButton = document.getElementById("newGame");
const toggleModeButton = document.getElementById("toggleMode");
const canRepeatButton = document.getElementById("canRepeat");
const messageDiv = document.getElementById("message");
const attemptsSpan = document.getElementById("attempts");

function generateSecretCode(codeLength) {
	const availableDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const secretCode = [];
		
	for (let i = 0; i < codeLength; i++) {
		const randomIndex = Math.floor(Math.random() * availableDigits.length);

		secretCode.push(availableDigits[randomIndex]);

		if (!withRepeating){
			availableDigits.splice(randomIndex, 1);
		}
	}
	
	return secretCode;
  }

// Initialize the game
function initGame() {
	secretCode = generateSecretCode(codeLength);

	// Reset game state
	attempts = 6;
	gameOver = false;
	attemptsSpan.textContent = attempts;
	guessContainer.innerHTML = "";
	messageDiv.classList.add("hidden");
	messageDiv.classList.remove("win", "lose");

	// Reset input fields
	currentGuessInputs.forEach((input) => {
		input.value = "";
		input.disabled = false;
	});
	submitButton.disabled = false;

	// Focus on first input
	currentGuessInputs[0].focus();

	// For debugging
	console.log("Secret code:", secretCode.join('')); 
	console.log("Mode:", mode); 
	console.log("Repetition:", withRepeating); 
}

// Handle input restrictions and navigation
currentGuessInputs.forEach((input, index) => {
	// Prevent more than one digit
	input.addEventListener("input", function (e) {
		// Keep only the last character entered
		if (this.value.length > 1) {
			this.value = this.value.slice(-1);
		}
	});

	// Prevent non-numeric input
	input.addEventListener("keydown", function (e) {
		// Navigation with arrow keys
		if (e.key === "ArrowRight" && index < currentGuessInputs.length - 1) {
			currentGuessInputs[index + 1].focus();
		} 
		else if (e.key === "ArrowLeft" && index > 0) {
			currentGuessInputs[index - 1].focus();
		} 
		else if (e.key === "Enter") {
			if (index === currentGuessInputs.length - 1) {
					submitGuess();
				} 
				else {
					currentGuessInputs[index + 1].focus();
				}		
		}
	});
});

// Submit guess
function submitGuess() {
	if (gameOver) return;

	// Check if all inputs have values
	let allFilled = true;
	const guess = [];

	currentGuessInputs.forEach((input) => {
		if (input.value === "") {
			allFilled = false;
		} else {
			guess.push(parseInt(input.value));
		}
	});

	if (!allFilled) {
		alert("Please fill all 5 digits before submitting!");
		return;
	}

	// Create a new row for this guess
	const guessRow = document.createElement("div");
	guessRow.className = "guess-row";

	// Add inputs showing the guess
	const guessInputs = document.createElement("div");
	guessInputs.className = "guess-inputs";

	guess.forEach((digit) => {
		const input = document.createElement("input");
		input.type = "number";
		input.value = digit;
		input.readOnly = true;
		guessInputs.appendChild(input);
	});

	guessRow.appendChild(guessInputs);

	// Add results
	const guessResults = document.createElement("div");
	guessResults.className = "guess-results";

	// Calculate results (exact and partial matches)
	const result = evaluateGuess(guess);

	// Create result boxes
	guess.forEach((digit, index) => {
		const resultBox = document.createElement("div");
		resultBox.className = "result-box";
		if (mode == "normal"){
			resultBox.textContent = digit;			
		}

		if (digit === secretCode[index]) {
			resultBox.classList.add("correct-position");
			resultBox.setAttribute("itemprop", "1");
		} 
		else{ 
			if (secretCode.includes(digit)) {
				// Need to check if this is a duplicate that's already counted
				if (isPartialMatch(guess, index)) {
					resultBox.classList.add("correct-number");
					resultBox.setAttribute("itemprop", "2");
				} 
				else {
					resultBox.classList.add("wrong");
					resultBox.setAttribute("itemprop", "3");
				}
			} 
			else {
				resultBox.classList.add("wrong");
				resultBox.setAttribute("itemprop", "3");
			}
		}	
		guessResults.appendChild(resultBox);
	});

	// in hard mode, I show the black results first, then white, then grey
	//in normal mode, I show the results in the order they were inputted
	if (mode == "hard"){
		const children = Array.from(guessResults.children);

		children.sort((a, b) => {
			const valueA = parseInt(a.getAttribute("itemprop")) || 0;
			const valueB = parseInt(b.getAttribute("itemprop")) || 0;
			return valueA - valueB;
		});

		while (guessResults.firstChild) {
			guessResults.removeChild(guessResults.firstChild);
		}

		children.forEach(child => {
			guessResults.appendChild(child);
		});
	}


	guessRow.appendChild(guessResults);
	guessContainer.appendChild(guessRow);

	// Update attempts
	attempts--;
	attemptsSpan.textContent = attempts;

	// Check for win
	if (result.exactMatches === codeLength) {
		endGame(true);
		return;
	}

	// Check for loss
	if (attempts === 0) {
		endGame(false);
		return;
	}

	// Clear input fields for next guess
	currentGuessInputs.forEach((input) => {
		input.value = "";
	});
	currentGuessInputs[0].focus();
}

// Evaluate the guess
function evaluateGuess(guess) {
	let exactMatches = 0;
	let partialMatches = 0;

	// Count exact matches (right number, right position)
	for (let i = 0; i < codeLength; i++) {
		if (guess[i] === secretCode[i]) {
			exactMatches++;
		}
	}

	// Count partial matches (right number, wrong position)
	// Create copies of arrays to mark used digits
	const secretCodeCopy = [...secretCode];
	const guessCopy = [...guess];

	// Mark exact matches as used in both arrays
	for (let i = 0; i < codeLength; i++) {
		if (guessCopy[i] === secretCodeCopy[i]) {
			guessCopy[i] = -1;
			secretCodeCopy[i] = -2;
		}
	}

	// Count partial matches with remaining digits
	for (let i = 0; i < codeLength; i++) {
		if (guessCopy[i] !== -1) {
			const secretIndex = secretCodeCopy.indexOf(guessCopy[i]);
			if (secretIndex !== -1) {
				partialMatches++;
				secretCodeCopy[secretIndex] = -2; // Mark as used
			}
		}
	}

	return { exactMatches, partialMatches };
}

// Helper function to check if a digit is a partial match
function isPartialMatch(guess, index) {
	// Count occurrences in secret code
	const digitCount = secretCode.filter((d) => d === guess[index]).length;

	// Count exact matches of this digit
	const exactMatchCount = secretCode.filter(
		(d, i) => d === guess[index] && d === guess[i]
	).length;

	// Count occurrences in guess before this index
	const previousOccurrences = guess
		.slice(0, index)
		.filter((d) => d === guess[index]).length;

	// Check if this is a valid partial match
	return previousOccurrences < digitCount - exactMatchCount;
}

// End the game
function endGame(isWin) {
	gameOver = true;

	// Disable inputs
	currentGuessInputs.forEach((input) => {
		input.disabled = true;
	});
	submitButton.disabled = true;

	// Show message
	messageDiv.classList.remove("hidden");

	if (isWin) {
		messageDiv.textContent = "Congratulations! You've cracked the code!";
		messageDiv.classList.add("win");
	} else {
		messageDiv.textContent =
			"Game Over! The secret code was: " + secretCode.join("");
		messageDiv.classList.add("lose");
	}
}

function toggleMode(which="toggle") {
	if (mode == "hard" || which == "reset"){
		mode = "normal";
		toggleModeButton.innerText = "Hard mode";
	}
	else{
		mode = "hard";
		toggleModeButton.innerText = "Normal mode";
	}
	initGame();
}

function canRepeat(which="toggle") {
	if (withRepeating || which == "reset"){
		withRepeating = false;
		canRepeatButton.innerText = "With repetition";
	}
	else{
		withRepeating = true;
		canRepeatButton.innerText = "No repetition";
	}
	initGame();
}

// Event listeners
submitButton.addEventListener("click", submitGuess);
newGameButton.addEventListener("click", initGame);
toggleModeButton.addEventListener("click", toggleMode);
canRepeatButton.addEventListener("click", canRepeat);

// Start the game
initGame();
