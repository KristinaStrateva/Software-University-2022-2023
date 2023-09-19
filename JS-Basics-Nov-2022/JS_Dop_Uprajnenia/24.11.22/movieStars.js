function movieStars(input) {
    let actorsBudget = Number(input[0]);

    let actorHonorarium = 0;

    for (let i = 1; i <= input.length -1; i++) {
        let currentActorName = input[i];
        let currentActorNameLength = currentActorName.length;

        if (currentActorName == actorHonorarium) {
            continue;
        } else if (currentActorName !== "ACTION") {
            if (currentActorNameLength > 15) {
                actorHonorarium = 0.2 * actorsBudget;

                actorsBudget -= actorHonorarium;

                if (actorsBudget <= 0) {
                    break;
                }
            } else {
                actorHonorarium = Number(input[i + 1]);

                actorsBudget -= actorHonorarium;

                if (actorsBudget <= 0) {
                    break;
                }
            }
        }
        
        if (currentActorName === "ACTION" || actorsBudget <= 0){
            break;
        }
    }

    if (actorsBudget > 0) {
        console.log(`We are left with ${actorsBudget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(Math.abs(actorsBudget)).toFixed(2)} leva for our actors.`);
    }
}

movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);