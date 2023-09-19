function lastKNumbersSequence(sequenceLength, lastKNumbers) {
    let result = [1];

    for (let i = 1; i < sequenceLength; i++) {
        let index = i - lastKNumbers;

        let currResult = 0;

        for (let j = 0; j < lastKNumbers; j++) {

            while (index < 0) {
                j++;
                index++;
            }

            currResult += result[index];
            index++;
        }

        result.push(currResult);
    }

    return result;
}

console.log(lastKNumbersSequence(8, 2));