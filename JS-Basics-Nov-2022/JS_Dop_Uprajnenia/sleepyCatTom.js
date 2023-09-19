function sleepyCatTom(input) {
    let daysOff = Number(input[0]);

    playingNormPerYear = Number(30000);
    daysPerYear = Number(365);
    playPerDayIfAtWork = Number(63);
    playPerDayIfOff = Number(127);

    let workingDays = daysPerYear - daysOff;
    let minutesOfPlaying = (workingDays * playPerDayIfAtWork) + (daysOff * playPerDayIfOff);

    if (minutesOfPlaying > playingNormPerYear) {
        let moreTime = minutesOfPlaying - playingNormPerYear;
        let hours = Math.trunc(moreTime / 60);
        let minLeft = moreTime % 60;
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minLeft} minutes more for play`);
    } else {
        let lessTime = playingNormPerYear - minutesOfPlaying;
        let hours = Math.trunc(lessTime / 60);
        let minLeft = lessTime % 60;
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minLeft} minutes less for play`);
    }
}

sleepyCatTom(["113"]);