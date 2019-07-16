import isYes from '../src/is-yes.js';

const quizButton = document.getElementsById('quizButton');
const result = document.getElementsById('result');

quizButton.onclick = function() {
    alert('Welcome to the quiz!');
    const confirmed = confirm('Quit now?');
    if(confirmed === false) {
        return;
    }
}