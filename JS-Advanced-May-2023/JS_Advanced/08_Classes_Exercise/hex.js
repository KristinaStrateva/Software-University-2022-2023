class Hex {
    constructor(number) {
        this.number = number;
    }

    valueOf() {
        return this.number;
    }

    toString() {
        const hexNum = `0x${this.number.toString(16).toUpperCase()}`;

        return hexNum;
    }

    plus(num) {
        let result = 0;

        if (typeof num === 'number') {
            result = this.number + num;

        } else {
            result = this.number + num.number;
        }

        return new Hex(result);
    }

    minus(num) {
        let result = 0;

        if (typeof num === 'number') {
            result = this.number - num;

        } else {
            result = this.number - num.number;
        }

        return new Hex(result);
    }

    parse(hexNum) {
        return Number(`0x${hexNum}`);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));