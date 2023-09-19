function lunchBreak(input) {
    let seriesName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let restingTime = breakDuration / 4;
    let leftTime = breakDuration - lunchTime - restingTime;

    if (leftTime >= episodeDuration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);