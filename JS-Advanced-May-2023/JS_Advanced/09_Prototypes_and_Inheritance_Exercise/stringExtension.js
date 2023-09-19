(function stringExtensions() {
    String.prototype.ensureStart = function (str) {
        const actualString = this.toString();

        if (actualString.startsWith(str)) {
            return actualString;
        } else {
            return str.concat(actualString);
        }
    }

    String.prototype.ensureEnd = function (str) {
        const actualString = this.toString();

        if (actualString.endsWith(str)) {
            return actualString;
        } else {
            return actualString.concat(str);
        }
    }

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    }

    String.prototype.truncate = function (num) {
        let stringValue = this.toString();

        if (this.length <= num) {
            return stringValue;
        }

        if (num < 4) {
            return `${'.'.repeat(num)}`;
        }

        if (stringValue.includes(' ')) {
            let result = stringValue.split(' ');

            while (stringValue.length > num) {
                result.splice(result.length - 1, 1);

                stringValue = `${result.join(' ')}...`;
            }

            return stringValue;
        }

        return `${stringValue.slice(0, num - 3)}...`;
    }

    String.format = function (str, ...input) {
        let string = str;

        for (let i = 0; i < input.length; i++) {
            let index = string.indexOf(`{${i}}`);

            if (index !== -1) {
                const firstPart = string.slice(0, index);
                const endPart = string.slice(index + 3);
                const addPart = input[i];

                string = `${firstPart}${addPart}${endPart}`;

                // i++;
                // index = string.indexOf(`{${i}}`);
            }
        }

        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str)

str = str.ensureStart('hello ');
console.log(str)

str = str.truncate(16);
console.log(str)

str = str.truncate(14);
console.log(str)

str = str.truncate(8);
console.log(str)

str = str.truncate(4);
console.log(str)

str = str.truncate(2);
console.log(str)

str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',
    'dog');
console.log(str);


//  'my string' // 'my' already present
//  'hello my string'
//  'hello my string' // length is 15
//  'hello my...' // length is 11
//  'hello...'
//  'h...'
//  '..'
//  'The quick brown fox'
//  'jumps dog {1}' // no parameter at 1