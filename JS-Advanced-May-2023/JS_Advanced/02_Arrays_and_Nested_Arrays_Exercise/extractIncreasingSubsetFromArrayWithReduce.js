function extractingSubset(input) {
    let result = input.reduce(reducer, []);

    return result;

    function reducer(arr, num) {
        if (arr.length) {
            if (num >= arr[arr.length - 1]) {
                arr.push(num);
            }

        } else {
            arr.push(num);
        }

        return arr;
    }
}

extractingSubset([1, 2, 3, 4]);