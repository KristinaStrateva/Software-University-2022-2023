const StringBuilder = require("./solution");
const { expect } = require('chai');

describe('String Builder functionality', () => {
    describe('Initialisation validation', () => {
        it('should throw TypeError if non-string passed', () => {
            expect(() => new StringBuilder(123)).to.throw(TypeError);
            expect(() => new StringBuilder(true)).to.throw(TypeError);
            expect(() => new StringBuilder(['abc'])).to.throw(TypeError);
        });

        it('should convert the input string in array', () => {
            const instance1 = new StringBuilder('abc');
            const instance2 = new StringBuilder('test abc');

            expect(Array.isArray(instance1._stringArray)).to.be.true;
            expect(Array.isArray(instance2._stringArray)).to.be.true;
        })

        it('should initialize array of characters if string is passed', () => {
            const instance1 = new StringBuilder('abc');
            const instance2 = new StringBuilder('test abc');

            expect(instance1.toString()).to.be.equal('abc');
            expect(instance2.toString()).to.be.equal('test abc');
        });

        it('should initialize empty array if undefined is passed', () => {
            const instance = new StringBuilder(undefined);
            
            expect(instance.toString()).to.be.equal('');
        });
    });
    
    describe('append method functionality', () => {
        it('should throw TypeError if non-string value is passed', () => {
            const instance = new StringBuilder('abc');
    
            expect(() => instance.append(123)).to.throw(TypeError);
            expect(() => instance.append(null)).to.throw(TypeError);
            expect(() => instance.append(true)).to.throw(TypeError);
            expect(() => instance.append([1, 2, 3])).to.throw(TypeError);
        });

        it('should take string as argument and push it at the end', () => {
            const instance = new StringBuilder('abc');
            instance.append('def');
            const result = 'abcdef';

            expect(instance.toString()).to.be.equal(result);
        });

        it('should append correctly when method is called more than once with valid arguments and remove at valid index', () => {
            const value1 = 'abc';
            const value2 = 'def';
            const expected1 = '123abc';
            const expected2 = '123abcdef';

            const instance = new StringBuilder('123');

            instance.append(value1);
            expect(instance.toString()).to.be.equal(expected1);

            instance.append(value2);
            expect(instance.toString()).to.be.equal(expected2);

            instance.remove(3, 3);
            expect(instance.toString()).to.be.equal('123def');
        });
    });

    describe('prepend method functionality', () => {
        it('should throw TypeError if non-string value is passed', () => {
            const instance = new StringBuilder('abc');

            expect(() => instance.prepend(123)).to.throw(TypeError);
            expect(() => instance.prepend(null)).to.throw(TypeError);
            expect(() => instance.prepend(true)).to.throw(TypeError);
            expect(() => instance.prepend([1, 2, 3])).to.throw(TypeError);
        });

        it('should take string as argument and unshift it at the begining', () => {
            const instance = new StringBuilder('abc');
            instance.prepend('123');
            const result = '123abc';

            expect(instance.toString()).to.be.equal(result);
        });

        it('should prepend correctly when method is called more than once with valid arguments and remove at valid index', () => {
            const value1 = 'abc';
            const value2 = '123';
            const expected1 = 'abcdef';
            const expected2 = '123abcdef';

            const instance = new StringBuilder('def');

            instance.prepend(value1);
            expect(instance.toString()).to.be.equal(expected1);

            instance.prepend(value2);
            expect(instance.toString()).to.be.equal(expected2);

            instance.remove(3, 3);
            expect(instance.toString()).to.be.equal('123def');
        });
    });

    describe('insertAt method functionality', () => {
        it('should throw TypeError if non-string value is passed', () => {
            const instance = new StringBuilder('abc');

            expect(() => instance.prepend(123)).to.throw(TypeError);
            expect(() => instance.prepend(null)).to.throw(TypeError);
            expect(() => instance.prepend(true)).to.throw(TypeError);
            expect(() => instance.prepend([1, 2, 3])).to.throw(TypeError);
        });

        it('should take valid index', () => {
            const instance = new StringBuilder('abd');
            const expected = 'abcd';
            instance.insertAt('c', 2);

            expect(instance.toString()).to.be.equal(expected);
        });

        it('should append correctly when method is called more than once with valid arguments and remove at valid index', () => {
            const value1 = 'def';
            const value2 = 'abc';
            const expected1 = '123def';
            const expected2 = '123abcdef';

            const instance = new StringBuilder('123');

            instance.insertAt(value1, 3);
            expect(instance.toString()).to.be.equal(expected1);

            instance.insertAt(value2, 3);
            expect(instance.toString()).to.be.equal(expected2);

            instance.remove(3, 1);
            expect(instance.toString()).to.be.equal('123bcdef');
        });
    });

    describe('remove method functionality', () => {
        it('should throw TypeError if non-string value is passed', () => {
            const instance = new StringBuilder('abc');

            expect(() => instance.prepend(123)).to.throw(TypeError);
            expect(() => instance.prepend(null)).to.throw(TypeError);
            expect(() => instance.prepend(true)).to.throw(TypeError);
            expect(() => instance.prepend([1, 2, 3])).to.throw(TypeError);
        });

        it('should take valid index', () => {
            const instance = new StringBuilder('abcd');
            const expected = 'ad';
            instance.remove(1, 2);

            expect(instance.toString()).to.be.equal(expected);
        });
    });
});