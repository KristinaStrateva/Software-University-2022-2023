function sameDigits(number) {
    let numberAsString = number.toString();
    let isSame = true;
    let firstSymbol = numberAsString[0];

    for (const symbol of numberAsString) {
        if (firstSymbol !== symbol) {
            isSame = false;
            break;
        }
    }

    let sumOfDigits = numberAsString.split('').map(Number).reduce((acc, x) => acc + x);

    console.log(isSame);
    console.log(sumOfDigits);
}

sameDigits(2222222);