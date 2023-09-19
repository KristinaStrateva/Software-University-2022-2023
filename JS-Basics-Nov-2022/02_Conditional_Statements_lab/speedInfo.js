function speedInfo(input) {
    let speedInput = Number(input[0]);

    if (speedInput <= 10) {
        console.log(`slow`);
    } else if (speedInput <= 50) {
        console.log(`average`);
    } else if (speedInput <= 150) {
        console.log(`fast`);
    } else if (speedInput <= 1000) {
        console.log(`ultra fast`);
    } else {
        console.log(`extremely fast`);
    }
}

speedInfo(["2000"]);