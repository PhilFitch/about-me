import isYes from '../src/is-yes.js';

const quizButton = document.getElementsById('quiz-button');
const result = document.getElementsById('result');

quizButton.onclick = function() {
    alert('Welcome to the quiz!');
    
    const confirmed = confirm('Quit now?');
    
    if(confirmed === false) {
        return;
    }

    let name = '';

    const firstName = prompt('First name:');
    name += firstName;

    const lastName = prompt('Last name:');
    name += lastName;

    let correctAnswers = 0;

    const isFamilyMan = prompt('Do I have kids?');

    const correctIsFamilyMan = true;
    if(isYes(isFamilyMan) === correctIsFamilyMan) {
        correctAnswers += 1;
    }

    const homework = prompt('Am I caught up on my homework?');

    const correctHomework = false;
    if(isYes(homework) === correctHomework) {
        correctAnswers += 1;
    }

    const isSleeping = prompt('Is my favorite activity sleeping?');
    
    const correctIsSleeping = true;
    if(isYes(isSleeping) === correctIsSleeping) {
        correctAnswers += 1;
    }

    let response = 'Well, ' + name + ', ';

    if(correctAnswers = 3) {
        response += 'you got three of three! You know me so well.';
    } else {
        response += 'you oughta read more closely! Try again!';
    }

    result.textContent = response;

};