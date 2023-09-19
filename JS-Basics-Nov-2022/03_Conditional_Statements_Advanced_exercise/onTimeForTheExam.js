function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivingHour = Number(input[2]);
    let arrivingMinutes = Number(input[3]);

    let convertExamHourInMinutes = examHour * 60;
    let examTimeInMinutes = convertExamHourInMinutes + examMinutes;

    let convertArrivingHourInMinutes = arrivingHour * 60;
    let arrivingTimeInMinutes = convertArrivingHourInMinutes + arrivingMinutes;

    let minutesEarlier = examTimeInMinutes - arrivingTimeInMinutes;
    let minutesLater = arrivingTimeInMinutes - examTimeInMinutes;

    if (arrivingTimeInMinutes === examTimeInMinutes) {
        console.log("On time");
    } else if (arrivingTimeInMinutes < examTimeInMinutes) {
        if (minutesEarlier <= 30) {
            console.log("On time");
            console.log(`${minutesEarlier} minutes before the start`);
        } else if (minutesEarlier > 30 && minutesEarlier < 60) {
        console.log("Early");
        console.log(`${minutesEarlier} minutes before the start`);
        } else if (minutesEarlier >= 60) {
            let hours = Math.trunc(minutesEarlier / 60);
            let minutes = minutesEarlier % 60;
            if (minutes < 10) {
                console.log("Early");
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
            console.log("Early");
            console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    } else if (arrivingTimeInMinutes > examTimeInMinutes) {
        if (minutesLater <= 30) {
            console.log("Late");
            console.log(`${minutesLater} minutes after the start`);
        } else if (minutesLater > 30 && minutesLater < 60) {
            console.log("Late");
            console.log(`${minutesLater} minutes after the start`);
        } else if (minutesLater >= 60) {
            let hours = Math.trunc(minutesLater / 60);
            let minutes = minutesLater % 60;
            if (minutes < 10) {
                console.log("Late");
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    }
}

onTimeForTheExam(["16", "00", "15", "00"]);