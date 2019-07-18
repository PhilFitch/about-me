import getPlay from '../src/get-play.js';

const rockButton = document.getElementById ('rock');
const paperButton = document.getElementById ('paper');
const scissorsButton = document.getElementById ('scissors');
const comPlay = document.getElementById ('computer-play');
const winLose = document.getElementById ('win-lose');
const wins = document.getElementById ('wins');
const losses = document.getElementById ('losses');

let winCount = 0;
let lossCount = 0;

rockButton.addEventListener('click', () => {
    const userPlay = 0;
    const comThrow = getPlay();

    if(comThrow === 0) {
        comPlay.textContent = 'Rock';
    } else if(comThrow === 1) {
        comPlay.textContent = 'Paper';
    } else if(comThrow === 2) {
        comPlay.textContent = 'Scissors';
    }

    if(userPlay === comThrow) {
        winLose.textContent = 'Tie';
    } else if(userPlay === comThrow + 1 || userPlay === comThrow - 2) {
        winLose.textContent = 'Win';
        winCount ++;
        wins.textContent = winCount;
    } else {
        winLose.textContent = 'Lose';
        lossCount ++;
        losses.textContent = lossCount;
    }


});

paperButton.addEventListener('click', () => {
    const userPlay = 1;
    const comThrow = getPlay();

    if(comThrow === 0) {
        comPlay.textContent = 'Rock';
    } else if(comThrow === 1) {
        comPlay.textContent = 'Paper';
    } else if(comThrow === 2) {
        comPlay.textContent = 'Scissors';
    }

    if(userPlay === comThrow) {
        winLose.textContent = 'Tie';
    } else if(userPlay === comThrow + 1 || userPlay === comThrow - 2) {
        winLose.textContent = 'Win';
        winCount ++;
        wins.textContent = winCount;
    } else {
        winLose.textContent = 'Lose';
        lossCount ++;
        losses.textContent = lossCount;
    }
});

scissorsButton.addEventListener('click', () => {
    const userPlay = 2;
    const comThrow = getPlay();

    if(comThrow === 0) {
        comPlay.textContent = 'Rock';
    } else if(comThrow === 1) {
        comPlay.textContent = 'Paper';
    } else if(comThrow === 2) {
        comPlay.textContent = 'Scissors';
    }

    if(userPlay === comThrow) {
        winLose.textContent = 'Tie';
    } else if(userPlay === comThrow + 1 || userPlay === comThrow - 2) {
        winLose.textContent = 'Win';
        winCount ++;
        wins.textContent = winCount;
    } else {
        winLose.textContent = 'Lose';
        lossCount ++;
        losses.textContent = lossCount;
    }
});