const mathEnforcer = require("./mathEnforcer");
const { expect } = require('chai');

describe('Math Enforcer', () => {

    describe('addFive functionality', () => {
        it('should return undefined for invalid input', () => {
            expect(mathEnforcer.addFive('abc')).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive(false)).to.be.undefined;
        });
        
        it('should return correct result for valid input', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        })
    });

    describe('subtractTen functionality', () => {
        it('should return undefined for invalid input', () => {
            expect(mathEnforcer.subtractTen('abc')).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen(false)).to.be.undefined;
        });

        it('should return correct result for valid input', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.01);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });

    describe('sum functionality', () => {
        it('should return undefined for one or both invalid inputs', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
            expect(mathEnforcer.sum('1', 'abc')).to.be.undefined;
        });

        it('should return correct sum of the valid inputs', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(1.5, 2.5)).to.be.closeTo(4, 0.01);
            expect(mathEnforcer.sum(25, 65)).to.equal(90);
            expect(mathEnforcer.sum(-1, 5)).to.equal(4);
        });
    });
});