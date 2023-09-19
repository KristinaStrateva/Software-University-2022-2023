function extractingSubset(input) {
    let biggest = input[0];

    let result = input.filter(x => {
        if (x >= biggest) {
            biggest = x;
            return true;
        } else {
            return false;
        }
    });

    return result;
}

console.log(extractingSubset([-1, -1, 0, 1, 0, 2]));