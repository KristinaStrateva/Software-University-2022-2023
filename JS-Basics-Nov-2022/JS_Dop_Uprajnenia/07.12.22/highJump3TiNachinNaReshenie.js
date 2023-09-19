function highJump(input) {
    let index = 0;
    let hightWanted = Number(input[index]);
    index++;

    let jumpCounter = 0;

    for (let i = hightWanted - 30; i <= hightWanted; i += 5) {
        let currentHightWanted = i;

        let lessHightJumpsCounter = 0;

        for (let j = 1; j <= 3; j++) {
            let currentHight = Number(input[index]);
            jumpCounter++;

            if (currentHight <= currentHightWanted) {
                lessHightJumpsCounter++;

                if (lessHightJumpsCounter === 3) {
                    console.log(`Tihomir failed at ${currentHightWanted}cm after ${jumpCounter} jumps.`);
                
                return;
                } else {
                    index++;
                continue;
                }

            } else {
                index++;
            break;
            }
        }
    }

    console.log(`Tihomir succeeded, he jumped over ${hightWanted}cm after ${jumpCounter} jumps.`);
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"]);