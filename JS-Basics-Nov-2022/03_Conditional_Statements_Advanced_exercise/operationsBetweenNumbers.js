function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOrOdd = 0;

    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n1 / n2;
    } else if (operator === "%") {
        result = n1 % n2;
    }

    if (result % 2 === 0) {
        evenOrOdd = "even";
    } else {
        evenOrOdd = "odd";
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${(result).toFixed(2)}`);
            }
            break;
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
    }
}

operationsBetweenNumbers(["10", "0", "%"]);