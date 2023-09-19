function negativeOrPositiveNumbers(input) {
    let result = [];

    for (const number of input) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers([7, -2, 8, 9]);

console.log('-----------------');

negativeOrPositiveNumbers([3, -2, 0, -1]);