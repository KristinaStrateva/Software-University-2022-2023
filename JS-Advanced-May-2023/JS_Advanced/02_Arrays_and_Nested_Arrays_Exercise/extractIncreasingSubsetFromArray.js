function extractingSubset(input) {
    let biggest = input[0];

    let result = [];

    for (const number of input) {
        if (number >= biggest) {
            biggest = number;

            result.push(biggest);
        }
    }

    return result;
}

extractingSubset([1, 2, 3, 4]);