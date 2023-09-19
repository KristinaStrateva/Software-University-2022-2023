function hospitalTreatment(input) {
    let calculatedPeriod = Number(input[0]);

    let doctorsAmount = 7;
    let treatedPatientsAmount = 0;
    let untreatedPatientsAmount = 0;

    for (let i = 1; i <= calculatedPeriod; i++) {
        let dayNumber = i;
        let currentIncomePatients = Number(input[i]);

        if (dayNumber % 3 === 0 && untreatedPatientsAmount > treatedPatientsAmount) {
            doctorsAmount++;
        }

        if (currentIncomePatients <= doctorsAmount) {
            treatedPatientsAmount += currentIncomePatients;
        } else if (currentIncomePatients > doctorsAmount) {
            treatedPatientsAmount += doctorsAmount;
            untreatedPatientsAmount += currentIncomePatients - doctorsAmount;
        }
    }

    console.log(`Treated patients: ${treatedPatientsAmount}.`);
    console.log(`Untreated patients: ${untreatedPatientsAmount}.`);
}

hospitalTreatment(["4", "7", "27", "9", "1"]);