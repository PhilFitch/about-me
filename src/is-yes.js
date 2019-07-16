function isYes(answer) {
    answer = answer.toLowerCase();
    if(answer.includes('y')) {
        return true;
    } else {
        return false;
    }
}

export default isYes;