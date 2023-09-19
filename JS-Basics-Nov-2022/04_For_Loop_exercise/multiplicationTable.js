function multiplicationTable(input) {
    let number = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        let multiplication = i * number;
        console.log(`${i} * ${number} = ${multiplication}`);
    }
}

multiplicationTable(["5"]);