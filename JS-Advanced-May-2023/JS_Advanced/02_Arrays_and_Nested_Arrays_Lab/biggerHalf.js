function biggerHalf(input) {
    let sortedInput = input.sort((a, b) => a - b);

    let result = sortedInput.slice(Math.floor(sortedInput.length / 2));

    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));

console.log('------------');

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));