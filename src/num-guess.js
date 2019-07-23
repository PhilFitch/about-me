
function numGuess(yourGuess, myNumber) {
    if(yourGuess < myNumber) {
        return -1;
    } else if(yourGuess > myNumber) {
        return 1;
    } else if(yourGuess === myNumber) {
        return 0;
    }
}
export default numGuess;
