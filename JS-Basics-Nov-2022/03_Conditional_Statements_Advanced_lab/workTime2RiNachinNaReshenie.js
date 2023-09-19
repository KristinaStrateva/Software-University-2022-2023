function workTime(input) {
    let time = Number(input[0]);
    let weekDay = input[1];

    switch (weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wedneday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (time >= 10 && time <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            } break;
        default: console.log("closed"); break;
    }
}

workTime(["19", "Sunday"]);