function guessNumberGame(){

const number = Math.floor(Math.random()*10);
let guess = null;

while (guess !== number) {
   
    guess= parseFloat(prompt("Make a guess"));
}

}

guessNumberGame();


