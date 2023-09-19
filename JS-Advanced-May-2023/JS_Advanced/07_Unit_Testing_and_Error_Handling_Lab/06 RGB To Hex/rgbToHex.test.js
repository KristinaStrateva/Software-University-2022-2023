const rgbToHexColor = require("./rgbToHex");
const {expect} = require('chai');

describe('Convert rgb color to hex color', () => {
    it('should return black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('should return white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('should return blue from 33, 133, 208 to #2185d0', () => {
        expect(rgbToHexColor(33, 133, 208)).to.be.equal('#2185d0');
    });

    it('should return #0F0F0F for 15, 15, 15', () => {
        expect(rgbToHexColor(33, 133, 208)).to.be.equal('#0F0F0F');
    });

    it('should return undefined if missing parameters', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('should return undefined if any is not integer', () => {
        expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
    });

    it('should return undefined if any is wrong type', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
    });

    it('should return undefined if any is lower than 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('should return undefined if any is bigger than 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});