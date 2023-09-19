function evenPowersOf2(input) {
    let n = Number(input[0]);

    for (let i = 0; i <= n; i += 2) {
        let number = Math.pow(2, i);
        console.log(number);
    }
}

evenPowersOf2(["7"]);