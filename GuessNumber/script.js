const randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#submit");
const guessField = document.querySelector("#guessField");
const result = document.querySelector("#result");
const guesses = document.querySelector("#guesses");
const remaining = document.querySelector("#remaining");

let previousGuesses = [];
let guessCount = 10;

submit.addEventListener("click", function () {

    const guess = Number(guessField.value);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        result.innerText = "Please enter a valid number";
        return;
    }

    previousGuesses.push(guess);

    guesses.innerText = previousGuesses.join(", ");

    guessCount--;

    remaining.innerText = guessCount;

    if (guess === randomNumber) {

        result.innerText = "🎉 Congratulations! You guessed correctly.";

        submit.disabled = true;

    }

    else if (guess < randomNumber) {

        result.innerText = "📉 Too Low!";

    }

    else {

        result.innerText = "📈 Too High!";

    }

    if (guessCount === 0 && guess !== randomNumber) {

        result.innerText = `Game Over! Number was ${randomNumber}`;

        submit.disabled = true;

    }

    guessField.value = "";

});