function sequence(input) {
    let number = Number(input[0]);

    let prevNumber = 0;
    let currentResult = 0;

    while (currentResult <= number) {
        currentResult = prevNumber * 2 + 1;

        if (currentResult > number) {
            break;
        }

        console.log(currentResult);

        prevNumber = currentResult;
    }
}

sequence(["31"]);