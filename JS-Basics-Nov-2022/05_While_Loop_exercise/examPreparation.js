function examPreparation(input) {
    let index = 0;
    let unsatisfyingGradesAmount = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let sumGrades = 0;
    let unsatisfyingProblems = 0;
    let numberOfProblems = 0;
    let lastProblem = "";

    while (taskName !== "Enough") {
        numberOfProblems++;
        sumGrades += grade;

        if (grade <= 4) {
            unsatisfyingProblems++;
            if (unsatisfyingProblems === unsatisfyingGradesAmount) {
                console.log(`You need a break, ${unsatisfyingProblems} poor grades.`);
            return;
            }
        }

        lastProblem = taskName;
        taskName = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }

    let averageScore = sumGrades / numberOfProblems;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${numberOfProblems}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);