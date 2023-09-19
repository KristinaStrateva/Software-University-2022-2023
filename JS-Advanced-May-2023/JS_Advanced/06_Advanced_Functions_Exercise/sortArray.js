function sortingArray(arr, sortType) {
    if (sortType === 'asc') {
        arr.sort((a, b) => a - b);
    } else if (sortType === 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

console.log(sortingArray([14, 7, 17, 6, 8], 'desc'));