function sumOfNumbersInRange(str1, str2) {
    let num1 = Number(str1);
    let num2 = Number(str2);

    let result = 0;

    for (let i = num1; i <= num2; i++) {
        let currNum = i;

        result += currNum;
    }

    console.log(result);
}

sumOfNumbersInRange('-8', '20');