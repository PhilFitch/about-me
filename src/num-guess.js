function numGuess(yourGuess) {
    const myNumber = 13;
    if(yourGuess < myNumber) {
        return -1;
    } else if(yourGuess > myNumber) {
        return 1;
    } else if(yourGuess === myNumber) {
        return 0;
    }
}
export default numGuess;
