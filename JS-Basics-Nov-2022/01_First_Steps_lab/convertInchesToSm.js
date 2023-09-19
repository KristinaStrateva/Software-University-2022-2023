function convertInchToSm(input) {
    let inch = input[0];
    let coef = Number("2.54");
    let convert = inch * coef;

    console.log(convert);
}

convertInchToSm(["8"]);