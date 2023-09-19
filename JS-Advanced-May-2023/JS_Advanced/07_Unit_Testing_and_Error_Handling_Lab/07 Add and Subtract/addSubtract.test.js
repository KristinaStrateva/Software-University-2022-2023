const createCalculator = require("./addSubtract");
const { expect } = require('chai');

describe('add/subtract functionality', () => {
    let currCalculator = null;

    beforeEach(() => {
        currCalculator = createCalculator();
    });

    it('should has add, subtract and get properties', () => {
        expect(currCalculator.add).to.be.not.undefined;
        expect(currCalculator.subtract).to.be.not.undefined;
        expect(currCalculator.get).to.be.not.undefined;
    });

    it('should be able to parse the input of add property to Number', () => {
        currCalculator.add(1);
        expect(currCalculator.get()).to.equal(1);

        currCalculator.add('1');
        expect(currCalculator.get()).to.equal(2);

        currCalculator.add('a');
        expect(currCalculator.get()).to.be.NaN;
    });

    it('should be able to parse the input of subtract property to Number', () => {
        currCalculator.subtract(1);
        expect(currCalculator.get()).to.equal(-1);

        currCalculator.subtract('1');
        expect(currCalculator.get()).to.equal(-2);

        currCalculator.subtract('a');
        expect(currCalculator.get()).to.be.NaN;
    });

    it('should return zero', () => {
        expect(currCalculator.get()).to.be.equal(0);
    });
});