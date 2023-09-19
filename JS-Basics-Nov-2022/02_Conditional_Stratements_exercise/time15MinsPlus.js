function plus15Mins(input) {
    let inputHour = Number(input[0]);
    let inputMinutes = Number(input[1]);

    let totalMinutes = (inputHour * 60) + inputMinutes + Number(15);
    let newHour = Math.floor(totalMinutes / 60);

    if (newHour === 24) {
        newHour = 0
    }

    if ((totalMinutes % 60) < 10) {
        console.log(`${newHour}:0${totalMinutes % 60}`);
    } else {
        console.log(`${newHour}:${totalMinutes % 60}`);
    }
}

plus15Mins (["12", "49"]);