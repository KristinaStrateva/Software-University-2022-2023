function addAndSubtract(numbers) {
    let newArr = [];
    let numbersLength = numbers.length;
    let sumOfOriginArr = 0;
    let sumOfNewArr = 0;

    for (let i = 0; i < numbersLength; i++) {
        let currNum = numbers[i];
        sumOfOriginArr += currNum;

        let evenNum = currNum + i;
        let oddNum = currNum - i;

        if (currNum % 2 === 0) {
            newArr.push(evenNum);;
        } else {
            newArr.push(oddNum);
        }

        sumOfNewArr += newArr[i];
    }

    console.log(newArr);
    console.log(sumOfOriginArr);
    console.log(sumOfNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);