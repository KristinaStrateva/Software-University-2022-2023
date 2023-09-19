function solution() {
    let string = '';

    let stringCommands = {
        append(stringToAppend) {
            string = string + stringToAppend;
        },

        removeStart(num) {
            string = string.slice(num);
        },

        removeEnd(num) {
            string = string.slice(0, string.length - num);
        },

        print() {
            console.log(string);
        }
    }

    return stringCommands;
}

let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();

console.log('---------------------------');

let firstZeroTest = solution();
firstZeroTest.append('hello'); firstZeroTest.append('again'); firstZeroTest.removeStart(3); firstZeroTest.removeEnd(4); firstZeroTest.print();