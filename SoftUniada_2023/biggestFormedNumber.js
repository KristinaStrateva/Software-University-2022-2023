function biggestFormedNumber(input) {
    let numbers = input[0].split(' ');

    let sortedNumbers = numbers.sort((a, b) => {
        return b.localeCompare(a);
    });

    let numbersByOne = sortedNumbers.join('');
    let numbersAsArr = numbersByOne.split('');

    for (const num of numbersAsArr) {
        if (num === '0') {
            numbersAsArr.splice(numbersAsArr.indexOf(num), 1);
            numbersAsArr.push('0');
        }
    }

    console.log(numbersAsArr.join(''));
}

biggestFormedNumber(['3 30 34 5 9']);