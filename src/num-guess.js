function numGuess(yourGuess) {
    const myNumber = Math.floor(Math.random() * 20) + 1;
    if(yourGuess < myNumber) {
        return -1;
    } else if(yourGuess > myNumber) {
        return 1;
    } else if(yourGuess === myNumber) {
        return 0;
    }
}
export default numGuess;
