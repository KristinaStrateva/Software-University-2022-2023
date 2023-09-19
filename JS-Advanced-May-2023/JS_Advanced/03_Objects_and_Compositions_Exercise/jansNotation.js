function jansNotation(input) {
    let result = [];

    for (const el of input) {
        if (isNumber(el)) {
            result.push(el);
        } else {
            if (result.length >= 2) {
                let a = result[result.length - 2];
                let b = result[result.length - 1];

                result.splice(result.length - 2, 2);
                result.push(operators(a, b, el));
            } else {
                return console.log('Error: not enough operands!');
            }
        }
    }

    if (result.length === 1) {
        console.log(result[0]);
    } else {
        console.log('Error: too many operands!');
    }

    function isNumber(char) {
        let isNum = Number.isInteger(char);

        return isNum;
    }

    function operators(a, b, operand) {
        let operations = {
            '+': a + b,
            '-': a - b,
            '*': a * b,
            '/': a / b
        }

        let solution = operations[operand];

        return solution;
    }
}

jansNotation([5,

    3,
    
    4,
    
    '*',
    
    '-']);