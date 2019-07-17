import numGuess from '../src/num-guess.js';

const test = QUnit.test;

test('returns correct string for low yourGuess', (assert) => {
    const yourGuess = 3;
    const result = 'Too Low!';

    const output = numGuess(yourGuess);

    assert.equal(output, result);
});

test('returns correct string for high yourGuess', (assert) => {
    const yourGuess = 15;
    const result = 'Too High!';

    const output = numGuess(yourGuess);

    assert.equal(output, result);
});

test('returns correct string for correct yourGuess', (assert) => {
    const yourGuess = 13;
    const result = 'You Got It!';

    const output = numGuess(yourGuess);

    assert.equal(output, result);
});