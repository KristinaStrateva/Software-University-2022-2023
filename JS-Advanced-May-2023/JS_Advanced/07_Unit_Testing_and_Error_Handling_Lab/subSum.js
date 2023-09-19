function sumRange(arr, startIndex, endIndex) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }

    arr = arr.map(Number);

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    const result = arr
        .slice(startIndex, endIndex + 1)
        .reduce((acc, a) => a + acc, 0);

    return result;
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sumRange([10, 'twenty', 30, 40], 0, 2));
console.log(sumRange([], 1, 2));
console.log(sumRange('text', 0, 2));