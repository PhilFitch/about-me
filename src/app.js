import isYes from '../src/is-yes.js';

const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('result');

quizButton.onclick = function() {
    

    alert('Welcome to the quiz!');


    const firstName = prompt('First name:');
    const lastName = prompt('Last name:');
    const name = firstName + ' ' + lastName;

    const confirmed = confirm('Are you sure you\'re ready?');
    if(confirmed === false) {
        return;
    }


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


    alert('Check your results below!');

    if(correctAnswers === 3) {
        const response = 'Well, ' + name + ', you got three of three! You know me so well.';
        result.textContent = response;
    } else {
        const response = 'Well, ' + name + ', you oughta read more closely! Try again!';
        result.textContent = response;
    }
};