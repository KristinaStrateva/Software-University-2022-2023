const isOddOrEven = require("./evenOrOdd");
const { expect } = require('chai');

describe('Even or odd length', () => {
    it('should return undefined for non-string parameter', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('should return even for even-length parameter', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });

    it('should return odd for odd-length parameter', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });

    it('should return even for longer even-length parameter', () => {
        expect(isOddOrEven('string')).to.equal('even');
    });

    it('should return odd for odd-length parameter', () => {
        expect(isOddOrEven('NewString')).to.equal('odd');
    });
});