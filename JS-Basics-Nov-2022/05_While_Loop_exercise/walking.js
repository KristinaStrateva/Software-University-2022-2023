function walking(input) {
    let index = 0;
    let stepsForEachWalkForTheDay = input[index];

    let totalStepsForTheDay = 0;

    while (stepsForEachWalkForTheDay !== "Going home") {
        stepsForEachWalkForTheDay = Number(input[index]);
        index++;

        totalStepsForTheDay += stepsForEachWalkForTheDay;

        if (totalStepsForTheDay >= 10000) {
            let stepsOverTheGoal = totalStepsForTheDay - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsOverTheGoal} steps over the goal!`);
        return;
        }

        stepsForEachWalkForTheDay = input[index];
    }

    let stepsAfterGoingHomeCommand = Number(input[index + 1]);
    totalStepsForTheDay += stepsAfterGoingHomeCommand;

    if (totalStepsForTheDay >= 10000) {
        let stepsOverTheGoal = totalStepsForTheDay - 10000;
        console.log("Goal reached! Good job!");
        console.log(`${stepsOverTheGoal} steps over the goal!`);
    } else {
        let stepsUnderTheGoal = 10000 - totalStepsForTheDay;
        console.log(`${stepsUnderTheGoal} more steps to reach goal.`);
    }
}

walking(["125", "250", "4000", "30", "2678", "4682"]);