function everest(input) {
    let index = 0;
    let haveRest = input[index];
    index++;
    
    let daysCounter = 1;
    let isFailed = false;
    let totalClimbedM = 5364;

    while (haveRest !== "END") {
        if (haveRest === "Yes") {
            daysCounter++;
        } else if (haveRest === "No") {
            daysCounter = daysCounter;
        }
        
        let currClimbedM = Number(input[index]);
        index++;

        if (daysCounter > 5) {
            isFailed = true;
        break;
        }

        totalClimbedM += currClimbedM;

        if (totalClimbedM >= 8848) {
        break;
        }

        haveRest = input[index];
        index++;
    }

    if (isFailed || haveRest === "END") {
        console.log("Failed!");
        console.log(`${totalClimbedM}`);
    } else {
        console.log(`Goal reached for ${daysCounter} days!`);
    }
}

everest(["Yes",
"700",
"END"]);