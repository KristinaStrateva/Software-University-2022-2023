function multiplyBy2(input) {
    let index = 0;

    while (true) {
        let number = input[index];
        index++;
        if (index === -index) {
            break;
        }
        let result = number * 2;
        if (index >= 0) {
            console.log(`Result: ${result}`);
        } else {
            console.log(`Negative number!`);
        }

    }
}

multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);