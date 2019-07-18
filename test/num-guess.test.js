import numGuess from '../src/num-guess.js';

const test = QUnit.test;

test('returns -1 for low yourGuess', (assert) => {
    const yourGuess = 3;
    const expected = -1;

    const output = numGuess(yourGuess);

    assert.equal(output, expected);
});

test('returns 1 for high yourGuess', (assert) => {
    const yourGuess = 15;
    const expected = 1;

    const output = numGuess(yourGuess);

    assert.equal(output, expected);
});

test('returns 0 for correct yourGuess', (assert) => {
    const yourGuess = 13;
    const expected = 0;

    const output = numGuess(yourGuess);

    assert.equal(output, expected);
});