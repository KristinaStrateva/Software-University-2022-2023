function sumSeconds(input) {
    let sec1 = Number(input[0]);
    let sec2 = Number(input[1]);
    let sec3 = Number(input[2]);

    let totalTime = sec1 + sec2 + sec3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["14", "12", "10"]);