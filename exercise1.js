function guessNumberGame() {

    const number = Math.floor(Math.random() * 10);
    let guess = null;

    while (guess !== number) {

        guess = parseFloat(prompt("Make a guess"));

        if (guess > number) {
            console.log("Guess is too high! Guess again.");
        } else if (guess < number) {
            console.log("Guess is too low! Guess again.");
        } else {
            console.log("Congrats you win!");
        }
    }
}

guessNumberGame();


