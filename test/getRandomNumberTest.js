// we need to test with mocha the getRandomNumber function
const assert = require('chai').assert;
const getRandomNumber = require("../index")

describe('getRandomNumber', function() {
    describe('#getRandomNumber()', function() {
        it('should return a number between 0 and 100', function() {
            assert(getRandomNumber() >= 0 && getRandomNumber() <= 100);
        });
    });
});
