function evenOrOdd(input) {
    let evenOrOddNumber = Number(input[0]);

    if (evenOrOddNumber % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd(["7"]);