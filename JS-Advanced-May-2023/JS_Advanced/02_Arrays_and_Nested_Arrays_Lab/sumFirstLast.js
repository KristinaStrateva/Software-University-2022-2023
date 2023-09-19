function sumFirstLast(input) {
    input = input.map(Number);

    let firstNum = input[0];
    let lastNum = input[input.length - 1];

    let result = firstNum + lastNum;

    return result;
}

console.log(sumFirstLast(['20', '30', '40']));

console.log('-----------------');

console.log(sumFirstLast(['5']));