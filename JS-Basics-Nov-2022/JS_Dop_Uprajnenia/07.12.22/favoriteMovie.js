function favoriteMovie(input) {
    let index = 0;
    let movieName = input[index];
    index++;

    let counter = 0;

    let maxPoints = Number.MIN_SAFE_INTEGER;
    let minPoints = Number.MAX_SAFE_INTEGER;
    let bestMovieName = ``;

    while (movieName !== "STOP") {
        counter++;

        let points = 0;

        for (let i = 0; i < movieName.length; i++) {
            let currentLetter = movieName[i];
            let currentLetterCharCode = currentLetter.charCodeAt(movieName);

            points += currentLetterCharCode;

            if (currentLetter >= "a" && currentLetter <= "z") {
                points -= 2 * movieName.length;
            } else if (currentLetter >= "A" && currentLetter <= "Z") {
                points -= movieName.length;
            }
        }

        if (points > maxPoints) {
            maxPoints = points;
            bestMovieName = movieName;
        }
        
        if (points < minPoints) {
            minPoints = points;
        }

        if (counter === 7) {
            console.log("The limit is reached.");
        break;
        }

        movieName = input[index];
        index++;
    }

    console.log(`The best movie for you is ${bestMovieName} with ${maxPoints} ASCII sum.`);
}

favoriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"]);