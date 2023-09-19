function gymnastics(input) {
    let index = 0;
    let country = input[index];
    index++;
    let apparatusType = input[index];
    index++;

    let ribbonDifficult = 0;
    let ribbonPerformance = 0;

    let hoopDifficult = 0;
    let hoopPerformance = 0;

    let ropeDifficult = 0;
    let ropePerformance = 0;

    let totalScore = 0;

    switch (apparatusType) {
        case "ribbon":
            if (country === "Russia") {
                ribbonDifficult = 9.1;
                ribbonPerformance = 9.4;
                totalScore
            } else if (country === "Bulgaria") {
                ribbonDifficult = 9.6;
                ribbonPerformance = 9.4;
            } else if (country === "Italy") {
                ribbonDifficult = 9.2;
                ribbonPerformance = 9.5;
            }

            totalScore = ribbonDifficult + ribbonPerformance;
        break;
        case "hoop":
            if (country === "Russia") {
                hoopDifficult = 9.3;
                hoopPerformance = 9.8;
            } else if (country === "Bulgaria") {
                hoopDifficult = 9.55;
                hoopPerformance = 9.75;
            } else if (country === "Italy") {
                hoopDifficult = 9.45;
                hoopPerformance = 9.35;
            }

            totalScore = hoopDifficult + hoopPerformance;
        break;
        case "rope":
            if (country === "Russia") {
                ropeDifficult = 9.6;
                ropePerformance = 9;
            } else if (country === "Bulgaria") {
                ropeDifficult = 9.5;
                ropePerformance = 9.4;
            } else if (country === "Italy") {
                ropeDifficult = 9.7;
                ropePerformance = 9.15;
            }

            totalScore = ropeDifficult + ropePerformance;
        break;
    }
 
    let percentNotEnough = ((20 - totalScore) / 20) * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${apparatusType}.`);
    console.log(`${percentNotEnough.toFixed(2)}%`);
}

gymnastics(["Russia",
"rope"]);