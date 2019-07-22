import { getPlayFromNumber } from '../src/get-play.js';

const test = QUnit.test;

test('returns 0 for <1/3', (assert) => {
    const randomNumber = 0.1;
    const expected = 0;

    const output = getPlayFromNumber(randomNumber);

    assert.equal(output, expected);
});

test('returns 1 for 1/3 to 2/3', (assert) => {
    const randomNumber = 0.5;
    const expected = 1;

    const output = getPlayFromNumber(randomNumber);

    assert.equal(output, expected);
});

test('returns 2 for > 2/3', (assert) => {
    const randomNumber = 0.7;
    const expected = 2;

    const output = getPlayFromNumber(randomNumber);

    assert.equal(output, expected);
});

