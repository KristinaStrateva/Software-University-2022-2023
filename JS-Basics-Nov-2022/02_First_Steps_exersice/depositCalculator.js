function depositCalculator(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let annualPercent = Number(input[2] / 100);

    let sum = deposit + (months * ((deposit * annualPercent)/12));
    console.log(sum);
}   

depositCalculator(["2350", "6", "7"]);