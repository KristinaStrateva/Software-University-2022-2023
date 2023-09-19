function smallestTwoNumbers(input) {
    let result = [];
    let smalestNum = Number.MAX_SAFE_INTEGER;

    let firstSmallest = smallest(input, smalestNum);

    input.splice(input.indexOf(firstSmallest), 1);

    result.push(firstSmallest);

    if (input.length > 1) {
        let secondSmallest = smallest(input, smalestNum);

        result.push(secondSmallest);
    }

    console.log(result.join(' '));

    function smallest(arr, num) {
        for (const number of arr) {
            if (number < num) {
                num = number;
            }
        }

        return num;
    }
}

smallestTwoNumbers([30]);

console.log('-----------------');

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);