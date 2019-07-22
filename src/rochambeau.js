import getPlay from '../src/get-play.js';

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const comPlay = document.getElementById('computer-play');
const winLose = document.getElementById('win-lose');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

rockButton.addEventListener('click', () => {
    const userPlay = 0;
    const comThrow = getPlay();

    showCompPlay(comThrow);
    whoWins(userPlay, comThrow);
});

paperButton.addEventListener('click', () => {
    const userPlay = 1;
    const comThrow = getPlay();

    showCompPlay(comThrow);
    whoWins(userPlay, comThrow);
});

scissorsButton.addEventListener('click', () => {
    const userPlay = 2;
    const comThrow = getPlay();

    showCompPlay(comThrow);
    whoWins(userPlay, comThrow);
});

function showCompPlay(comThrow) {
    if(comThrow === 0) {
        comPlay.src = 'assets/rock.jpeg';
    }
    else if(comThrow === 1) {
        comPlay.src = 'assets/paper.png';
    }
    else if(comThrow === 2) {
        comPlay.src = 'assets/scissors.png';
    }
}

function whoWins(userPlay, comThrow) {
    if(userPlay === comThrow) {
        winLose.textContent = 'You Tie!';
        drawCount++;
        draws.textContent = drawCount;
    }
    else if(userPlay === comThrow + 1 || userPlay === comThrow - 2) {
        winLose.textContent = 'You Win!';
        winCount++;
        wins.textContent = winCount;
    }
    else {
        winLose.textContent = 'You Lose!';
        lossCount++;
        losses.textContent = lossCount;
    }
}
