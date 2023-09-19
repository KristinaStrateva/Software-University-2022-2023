const PaymentPackage = require("./solution");
const { expect, assert } = require('chai');

describe('Payment package', () => {
    describe('Creating instance of the class', () => {
        it('should validate the constructor data', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(instance._name).to.be.equal('Peter');
            expect(instance._value).to.be.equal(100);
            expect(instance._VAT).to.be.equal(20);
            expect(instance._active).to.be.equal(true);
        })
    });

    describe('Test for throwing errors with invalid Name', () => {
        it('should throw Error for number as Name', () => {
            expect(() => new PaymentPackage(123, 100)).to.throw('Name must be a non-empty string');
        });

        it('should throw Error for array of strings as Name', () => {
            expect(() => new PaymentPackage(['1', '2', '3'], 100)).to.throw('Name must be a non-empty string');
        });

        it('should throw Error for empty string as Name', () => {
            expect(() => new PaymentPackage('', 100)).to.throw('Name must be a non-empty string');
        });

        it('should take string as argument for the Name', () => {
            expect(() => new PaymentPackage('Peter', 100)).not.to.throw('Name must be a non-empty string');
        });
    });

    describe('Test for throwing errors with invalid Value', () => {
        it('should set value to null', () => {
            const instance = new PaymentPackage('Peter', 100);

            assert.doesNotThrow(() => {
                instance.value = 0;
            })
        });

        it('should throw Error for string as Value', () => {
            expect(() => new PaymentPackage('Peter', 'Peter')).to.throw('Value must be a non-negative number');
        });

        it('should throw Error for array of numbers as Value', () => {
            expect(() => new PaymentPackage('Peter', [1, 2, 3])).to.throw('Value must be a non-negative number');
        });

        it('should throw Error for negative number as Value', () => {
            expect(() => new PaymentPackage('Peter', -1)).to.throw('Value must be a non-negative number');
        });

        it('should take number as argument for the Value', () => {
            expect(() => new PaymentPackage('Peter', 100)).not.to.throw('Value must be a non-negative number');
        });
    });

    describe('Test for throwing errors with invalid VAT', () => {
        it('should throw Error for string as VAT', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });

        it('should throw Error for array as VAT', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.VAT = [1, 2, 3]).to.throw('VAT must be a non-negative number');
        });

        it('should throw Error for negative number as VAT', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.VAT = -1).to.throw('VAT must be a non-negative number');
        });

        it('should be a non-negative number for the VAT', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.VAT = 10).not.to.throw('VAT must be a non-negative number');
        });
    })

    describe('Test for throwing errors with Active', () => {
        it('should throw Error for string as Active', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.active = 'abc').to.throw('Active status must be a boolean');
        });

        it('should throw Error for number as Active', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.active = 123).to.throw('Active status must be a boolean');
        });

        it('should throw Error for negative number as Active', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.active = -123).to.throw('Active status must be a boolean');
        });

        it('should throw Error for array as Active', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.active = [1, 2, 3]).to.throw('Active status must be a boolean');
        });

        it('should be a boolean as Active', () => {
            const instance = new PaymentPackage('Peter', 100);

            expect(() => instance.active = true).not.to.throw('Active status must be a boolean');
        });
    });

    describe('Test for throwing errors with the toString method', () => {
        it('should return string if input is valid', () => {
            const instance = new PaymentPackage('Peter', 100);
            const output = [
                `Package: Peter`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 20%): 120`
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('should return string if input is and VAT is set to 30', () => {
            const instance = new PaymentPackage('Peter', 100);
            instance.VAT = 30;
            const output = [
                `Package: Peter`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 30%): 130`
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });

        it('should return string if input is valid, VAT is set to 30 and Active is set to true', () => {
            const instance = new PaymentPackage('Peter', 100);
            instance.VAT = 30;
            instance.active = false;
            const output = [
                `Package: Peter (inactive)`,
                `- Value (excl. VAT): 100`,
                `- Value (VAT 30%): 130`
            ];

            expect(instance.toString()).to.equal(output.join('\n'));
        });
    });
});