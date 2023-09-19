function baskketballEquipment(input) {
    let annualTax = Number(input[0]);

    let basketballTrainers = 0.6 * annualTax;
    let basketballTrainingSuit = 0.8 * basketballTrainers;
    let ball = basketballTrainingSuit / 4;
    let basketballAccessories = ball / 5;

    let totalSum = annualTax + basketballTrainers + basketballTrainingSuit + ball + basketballAccessories;
    console.log(totalSum.toFixed(2));
}

baskketballEquipment(["320"]);