
export default function getPlay() {
    const randomNumber = Math.random();

    const play = getPlayFromNumber(randomNumber);

    return play;
}

export function getPlayFromNumber(randomNumber) {
    if(randomNumber < (1 / 3)) {
        return 0;
    }
    else if(randomNumber >= (2 / 3)) {
        return 2;
    }
    else {
        return 1;
    }
}