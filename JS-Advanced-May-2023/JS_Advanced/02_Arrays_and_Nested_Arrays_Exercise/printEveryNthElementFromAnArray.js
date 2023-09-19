function printingNthElement(arr, nthElement) {
    let result = [];

    result.push(...arr.filter((el, index) => index % nthElement === 0));

    return result;
}

console.log(printingNthElement(['1', '2', '3', '4', '5'], 6));