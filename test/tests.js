import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('passes for "y"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test = 'y';
    const expected = true;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test);

    //Assert
    assert.equal(result, expected);
});

test('passes for "Yes"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test = 'Yes';
    const expected = true;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test);

    //Assert
    assert.equal(result, expected);
});

test('passes for "No"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test = 'No';
    const expected = false;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(test);

    //Assert
    assert.equal(result, expected);
});