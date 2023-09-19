function smallestTwoNumbers(input) {
    let result = [];

    let firstMin = input.splice(input.indexOf(Math.min(...input)), 1);
    let secondMin = input.splice(input.indexOf(Math.min(...input)), 1);

    result.push(firstMin, secondMin);

    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);

console.log('-----------------');

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);