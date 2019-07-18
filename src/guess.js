import numGuess from '../src/num-guess.js';

// What do I need from the DOM (elements)
const guessesRemaining = document.getElementById('guesses-remaining');
const check = document.getElementById('check');
const yourGuess = document.getElementById('your-guess');
const result = document.getElementById('result');



let guesses = 4;


check.addEventListener('click', () => {
    const guess = numGuess(parseInt(yourGuess.value));
    if(guess === 0) {
        result.textContent = 'You Got It!';
        guessesRemaining.textContent = '';
        check.disabled = true;
    } else if(guess === 1) {
        result.textContent = 'Too High!';
        guesses --;
        guessesRemaining.textContent = guesses;
    } else if(guess === -1) {
        result.textContent = 'Too Low!';
        guesses --;
        guessesRemaining.textContent = guesses;
    }
});

// What events do I need to listen to?
/*check.addEventListener('click', () => {
    
    
    result.textContent = numGuess(yourGuess);

    // decrement guesses
    guesses -= 1;

    // display new guesses
    guessesRemaining.textContent = guesses;
    //console.log(guesses);

});*/
