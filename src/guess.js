//import num-guess from '../src/number-guess.js';

// What do I need from the DOM (elements)
const guessesRemaining = document.getElementById('guesses-remaining');
const check = document.getElementById('check');
const yourGuess = document.getElementById('your-guess');
const result = document.getElementById('result');



let guesses = 4;

// What events do I need to listen to?
check.addEventListener('click', () => {
    


    // decrement guesses
    guesses -= 1;

    // display new guesses
    guessesRemaining.textContent = guesses;
    console.log(guesses);

});

/*check.addEventListener('click', () => {
        
});*/