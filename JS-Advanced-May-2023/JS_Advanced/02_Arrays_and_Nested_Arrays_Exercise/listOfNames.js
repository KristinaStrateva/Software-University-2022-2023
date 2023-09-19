function listOfNames(input) {
    let inputLength = input.length;

    input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < inputLength; i++) {
        let currName = input[i];

        console.log(`${i + 1}.${currName}`);
    }
}

listOfNames(["John",

"Bob",

"Christina",

"Ema"]);