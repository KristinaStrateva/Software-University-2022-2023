const findNewApartment = require("./findApratment");
const {expect} = require('chai');

describe('Find Aparatment Functionality', () => {
    describe('isGoodLocation method functionality', () => {
        it('should return message for valid arguments', () => {
            const location1 = 'Sofia';
            const location2 = 'Plovdiv';
            const location3 = 'Varna';

            expect(() => {findNewApartment.isGoodLocation(location1, true)}).not.to.throw;
            expect(findNewApartment.isGoodLocation(location2, true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation(location3, true)).to.be.equal('You can go on home tour!');
        });

        it('should return message for invalid location', () => {
            const location1 = 'Burgas';

            expect(findNewApartment.isGoodLocation(location1, true)).to.be.equal('This location is not suitable for you.');
        });

        it('should return message if second argument is false', () => {

            expect(findNewApartment.isGoodLocation('Sofia', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.be.equal('There is no public transport in area.');
        });

        it('should throw Error for invalid arguments types', () => {
            const location1 = 123;
            const location2 = ['Sofia', 'Plovdiv', 'Varna'];

            expect(() => {findNewApartment.isGoodLocation(location1, true)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isGoodLocation(location2, true)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isGoodLocation('Sofia', 1)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isGoodLocation('Plovdiv', 'true')}).to.throw(Error, 'Invalid input!');
        });
    });

    describe('isLargeEnough method functionality', () => {
        it('should throw Error for invalid arguments', () => {

            expect(() => {findNewApartment.isLargeEnough(1, 2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isLargeEnough([], 2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isLargeEnough([1,2,3], '2')}).to.throw(Error, 'Invalid input!');
        });

        it('should return result array joined by , and space when conditions are fulfilled', () => {
            const result = '40, 50, 60';
            const minimalSquareMeters = 30;

            expect((findNewApartment.isLargeEnough([40, 50, 60], minimalSquareMeters))).to.be.equal(result);
        });
    });

    describe('isItAffordable method functionality', () => {
        it('should throw Error if invalid arguments', () => {

            expect(() => {findNewApartment.isItAffordable('1', 2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(1, '2')}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable([1, 2, 3], 4)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(1, [2, 3, 4])}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(-1, 2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(1, -2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(0, 2)}).to.throw(Error, 'Invalid input!');
            expect(() => {findNewApartment.isItAffordable(1, 0)}).to.throw(Error, 'Invalid input!');
        });

        it('should return message that can afford to buy apartment if budget is equal or bigger than price', () => {
            const result = 'You can afford this home!';

            expect(findNewApartment.isItAffordable(100000, 100000)).to.be.equal(result);
            expect(findNewApartment.isItAffordable(10000, 150000)).to.be.equal(result);
        });

        it('should return message that cannot afford to buy apartment if budget is less than price', () => {
            const result = 'You don\'t have enough money for this house!';

            expect(findNewApartment.isItAffordable(150000, 100000)).to.be.equal(result);
        });
    });
});