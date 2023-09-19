function workTime(input) {
    let time = Number(input[0]);
    let weekDay = input[1];

    if (weekDay === "Monday" || weekDay === "Tuesday" || weekDay === "Wednesday" || weekDay === "Thursday" || weekDay === "Friday" || weekDay === "Saturday") {
        if (time >= 10 && time <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

workTime(["19", "Friday"]);