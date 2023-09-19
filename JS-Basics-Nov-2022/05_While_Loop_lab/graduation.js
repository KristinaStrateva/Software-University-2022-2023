function graduation(input) {
    let index =0;
    let studentName = input[index];
    index++;
    let annualEvaluation = Number(input[index]);
    let yearsAmount = 0;
    let excludedYearsAmount = 0;
    let sumEvaluations = 0;

    while (annualEvaluation > 1) {
        if (annualEvaluation >= 4) {
        yearsAmount++;

        sumEvaluations += annualEvaluation;
        } else {
            yearsAmount++;
            excludedYearsAmount++;
            if (excludedYearsAmount > 1) {
                console.log(`${studentName} has been excluded at ${yearsAmount - 1} grade`);
            return;
            }
        }

        index++;
        annualEvaluation = Number(input[index]);
    }

    let averageEvaluation = sumEvaluations / yearsAmount;
    console.log(`${studentName} graduated. Average grade: ${averageEvaluation.toFixed(2)}`);
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);