function movieDay(input) {
    let shootingTime = Number(input[0]);
    let scenesAmount = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let prepTime = (15 / 100) * shootingTime;
    let totalSceneTime = scenesAmount * sceneDuration;

    let totalShootingTime = prepTime + totalSceneTime;

    if (totalShootingTime <= shootingTime) {
        console.log(`You managed to finish the movie on time! You have ${(shootingTime - totalShootingTime).toFixed(0)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${(totalShootingTime - shootingTime).toFixed(0)} minutes.`);
    }
}

movieDay(["60   ", "15", "3"]);