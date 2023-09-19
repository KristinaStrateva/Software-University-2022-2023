function highJump(input) {
    let index = 0;
    let hightWanted = Number(input[index]);
    index++;

    let jumpAttempted = hightWanted - 30;
    let jumpCounter = 0;

    while (jumpAttempted <= hightWanted) {
        let lessHightJumpsCounter = 0;

        for (let j = 1; j <= 3; j++) {
            let currentHight = Number(input[index]);
            jumpCounter++;

            if (currentHight <= jumpAttempted) {
                lessHightJumpsCounter++;

                if (lessHightJumpsCounter === 3) {
                    console.log(`Tihomir failed at ${currentHight}cm after ${jumpCounter} jumps.`);
                
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

        jumpAttempted += 5; 
    }

    console.log(`Tihomir succeeded, he jumped over ${hightWanted}cm after ${jumpCounter} jumps.`);
}

highJump(["231",
"201",
"201",
"205",
"206",
"211",
"220",
"221"]);