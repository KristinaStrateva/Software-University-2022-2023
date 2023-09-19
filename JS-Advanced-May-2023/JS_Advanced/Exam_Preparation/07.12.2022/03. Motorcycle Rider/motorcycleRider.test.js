const motorcycleRider = require("./motorcycleRider");
const { expect } = require('chai');

describe('Motorcycle Rider functionality', () => {
  describe('licenseRestriction method functionality', () => {
    it('should return message if the category is AM', () => {

      expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
    });

    it('should return message if the category is A1', () => {

      expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
    });

    it('should return message if the category is A2', () => {

      expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
    });

    it('should return message if the category is A', () => {

      expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
    });

    it('should throw Error if invalid input is passed', () => {

      expect(() => { motorcycleRider.licenseRestriction('AB') }).to.throw(Error, 'Invalid Information!');
      expect(() => { motorcycleRider.licenseRestriction(123) }).to.throw(Error, 'Invalid Information!');
    });
  });

  describe('motorcycleShowroom method functionality', () => {
    it('should return message with the amount of availeble bikes if correctly implement the logic', () => {
      const engineVolume = ['125', '250', '600'];
      const maximumEngineVolume = 250;
      const availableBikes = ['125', '250'];

      expect(motorcycleRider.motorcycleShowroom(engineVolume, maximumEngineVolume)).to.be.equal(`There are ${availableBikes.length} available motorcycles matching your criteria!`);

      const engineVolume1 = ['125', '250', '600', '800'];
      const maximumEngineVolume1 = 790;
      const availableBikes1 = ['125', '250', '600'];

      expect(motorcycleRider.motorcycleShowroom(engineVolume1, maximumEngineVolume1)).to.be.equal(`There are ${availableBikes1.length} available motorcycles matching your criteria!`);
    });

    it('should throw Error if invalid parameters are passed', () => {
      
      expect(() => {motorcycleRider.motorcycleShowroom(1, 250)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.motorcycleShowroom('abc', 250)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.motorcycleShowroom([], 250)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.motorcycleShowroom(['125', '250', '600'], 49)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.motorcycleShowroom(['125', '250', '600'], '250')}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.motorcycleShowroom(['125', '250', '600'], true)}).to.throw(Error, 'Invalid Information!');
    });
  });

  describe('otherSpendings method functionality', () => {
    it('should return message with total price for equipment and consumables without discount', () => {
      const equipment1 = ['helmet', 'jacked'];
      const consumables1 = ['engine oil', 'oil filter'];
      const totalPrice1 = 600;

      expect(motorcycleRider.otherSpendings(equipment1, consumables1, false)).to.be.equal(`You spend $${totalPrice1.toFixed(2)} for equipment and consumables!`);

      const equipment2 = ['helmet', 'jacked', 'helmet', 'jacked', 'helmet', 'jacked'];
      const consumables2 = ['engine oil', 'oil filter', 'engine oil', 'oil filter', 'engine oil', 'oil filter'];
      const totalPrice2 = 1800;

      expect(motorcycleRider.otherSpendings(equipment2, consumables2, false)).to.be.equal(`You spend $${totalPrice2.toFixed(2)} for equipment and consumables!`);
    });

    it('should return message with total price for equipment and consumables with discount', () => {
      const equipment1 = ['helmet', 'jacked'];
      const consumables1 = ['engine oil', 'oil filter'];
      const totalPrice1 = 600 * 0.9;

      expect(motorcycleRider.otherSpendings(equipment1, consumables1, true)).to.be.equal(`You spend $${totalPrice1.toFixed(2)} for equipment and consumables with 10% discount!`);

      const equipment2 = ['helmet', 'jacked', 'helmet', 'jacked', 'helmet', 'jacked'];
      const consumables2 = ['engine oil', 'oil filter', 'engine oil', 'oil filter', 'engine oil', 'oil filter'];
      const totalPrice2 = 1800 * 0.9;

      expect(motorcycleRider.otherSpendings(equipment2, consumables2, true)).to.be.equal(`You spend $${totalPrice2.toFixed(2)} for equipment and consumables with 10% discount!`);
    });

    it('should throw Error if invalid inputs are passed', () => {

      expect(() => {motorcycleRider.otherSpendings(1, ['engine oil', 'oil filter'], true)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.otherSpendings(['helmet', 'jacked'], 1, true)}).to.throw(Error, 'Invalid Information!');
      expect(() => {motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], 'true')}).to.throw(Error, 'Invalid Information!');
    });
  });
});