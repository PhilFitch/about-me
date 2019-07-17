

function numGuess(yourGuess) {
    const myNumber = 13;
    let result = '';
    if(yourGuess < myNumber) {
        result = 'Too Low!';
    } else if(yourGuess > myNumber) {
        result = 'Too High!';
    } else if(yourGuess === myNumber) {
        result = 'You Got It!';
    }
    return result;
}
export default numGuess;
