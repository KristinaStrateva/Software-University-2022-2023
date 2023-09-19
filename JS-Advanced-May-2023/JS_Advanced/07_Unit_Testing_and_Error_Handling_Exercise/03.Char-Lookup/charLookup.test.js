const lookupChar = require("./charLookup");
const { expect } = require('chai');

describe('Lookup character at specified index', () => {
    it('should return undefined for invalid inputs', () => {
        expect(lookupChar('abc', '1')).to.be.undefined;
        expect(lookupChar(1, 2)).to.be.undefined;
        expect(lookupChar(1, 'abc')).to.be.undefined;
        expect(lookupChar('abc', 1.1)).to.be.undefined;
    });

    it('should return "Incorrect index" for invalid index', () => {
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
        expect(lookupChar('abc', 4)).to.equal('Incorrect index');
    });

    it('should return the character at the specified index', () => {
        expect(lookupChar('abc', 0)).to.equal('a');
        expect(lookupChar('abc', 1)).to.equal('b');
    });
});