const { expect } = require('chai');
const isSymmetric = require("./checkForSymmetry");

describe('Simmetry checker', () => {
    it('should take a symmetric array with numbers as an argument', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should take a symmetric array with strings as an argument', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('should return false if any element is not a number', () => {
        expect(isSymmetric([1, '2', 2, 1])).to.be.false;
    });

    it('should return false for object as input', () => {
        expect(isSymmetric({name: 'Kristina'})).to.be.false;
    });

    it('should return false for number as input', () => {
        expect(isSymmetric(2)).to.be.false;
    });

    it('should return false for string as input', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('should return false if the input is non-symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should take a symmetric odd-length array as an argument', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
});