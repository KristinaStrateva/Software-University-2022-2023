const weddingDay = require("./weddingDay");
const { expect } = require('chai');

describe('Wedding Day', () => {
    describe('pickVenue method functionality', () => {
        it('should take a number as first and second arguments and a string as third argument', () => {

            expect(() => { weddingDay.pickVenue(1, 2, 'Varna') }).not.to.throw(Error);

        });

        it('should throw Error for passed invalid argument', () => {

            expect(() => { weddingDay.pickVenue('1', 2, 'Varna') }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.pickVenue(1, '2', 'Varna') }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.pickVenue(1, 2, 3) }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.pickVenue(true, 2, 'Varna') }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.pickVenue(1, [2, 3, 4], 'Varna') }).to.throw(Error, 'Invalid Information!');
        });

        it('should throw Error for invalid location', () => {

            expect(() => { weddingDay.pickVenue(1, 2, 'Sofia') }).to.throw(Error, 'The location of this venue is not in the correct area!');
        });

        it('should take capacity >= 150 and pricePerGuest <= 120', () => {
            const capacity1 = 150;
            const pricePerGuest1 = 120;

            expect(weddingDay.pickVenue(capacity1, pricePerGuest1, 'Varna')).to.be.equal(`This venue meets the requirements, with capacity of ${capacity1} guests and ${pricePerGuest1}$ cover.`);

            const capacity2 = 250;
            const pricePerGuest2 = 50;

            expect(weddingDay.pickVenue(capacity2, pricePerGuest2, 'Varna')).to.be.equal(`This venue meets the requirements, with capacity of ${capacity2} guests and ${pricePerGuest2}$ cover.`);
        });

        it('should return message for not met requirements, when outlimit arguments passed', () => {
            const capacity1 = 149;
            const pricePerGuest1 = 121;

            expect(weddingDay.pickVenue(capacity1, pricePerGuest1, 'Varna')).to.be.equal('This venue does not meet your requirements!');

            const capacity2 = 150;
            const pricePerGuest2 = 121;

            expect(weddingDay.pickVenue(capacity2, pricePerGuest2, 'Varna')).to.be.equal('This venue does not meet your requirements!');

            const capacity3 = 149;
            const pricePerGuest3 = 120;

            expect(weddingDay.pickVenue(capacity3, pricePerGuest3, 'Varna')).to.be.equal('This venue does not meet your requirements!');
        });
    });

    describe('otherSpendings method functionality', () => {
        it('should take array as first and second arguments and boolean as third argument', () => {

            expect(() => { weddingDay.otherSpendings(['a', 'b', 'c'], ['a', 'b', 'c'], true) }).not.to.throw(Error);
        });

        it('should throw Error for passed invalid arguments', () => {

            expect(() => { weddingDay.otherSpendings(1, ['a', 'b', 'c'], true) }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.otherSpendings(['a', 'b', 'c'], 2, true) }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.otherSpendings(['a', 'b', 'c'], ['a', 'b', 'c'], 'true') }).to.throw(Error, 'Invalid Information!');
        });

        it('should return correct total price without discount', () => {

            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains', 'flowers'], ['pictures', 'video', 'pictures'], false)).to.be.equal(`You spend 4100$ for wedding decoration and photography!`);
        });

        it('should return correct total price with discount', () => {

            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains', 'flowers'], ['pictures', 'video', 'pictures'], true)).to.be.equal(`You spend 3485$ for wedding decoration and photography with 15% discount!`);
        });
    });

    describe('tableDistribution method functionality', () => {
        it('should take non-negative nunmbers as arguments', () => {

            expect(() => { weddingDay.tableDistribution(1, 2) }).not.to.throw(Error);
        });

        it('should throw Error for invalid arguments', () => {

            expect(() => { weddingDay.tableDistribution('1', 2) }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.tableDistribution(1, '2') }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.tableDistribution(-1, 2) }).to.throw(Error, 'Invalid Information!');
            expect(() => { weddingDay.tableDistribution(1, -2) }).to.throw(Error, 'Invalid Information!');
        });

        it('should return message to join tables if people on table are less than 6', () => {

            expect(weddingDay.tableDistribution(5, 1)).to.be.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(20, 4)).to.be.equal('There is only 5 people on every table, you can join some tables.');
            expect(weddingDay.tableDistribution(50, 11)).to.be.equal('There is only 5 people on every table, you can join some tables.');
        });

        it('should return message with the tables and the people amount on each table', () => {

            expect(weddingDay.tableDistribution(6, 1)).to.be.equal('You have 1 tables with 6 guests on table.');
            expect(weddingDay.tableDistribution(21, 3)).to.be.equal('You have 3 tables with 7 guests on table.');
            expect(weddingDay.tableDistribution(50, 5)).to.be.equal('You have 5 tables with 10 guests on table.');
        });
    });
});