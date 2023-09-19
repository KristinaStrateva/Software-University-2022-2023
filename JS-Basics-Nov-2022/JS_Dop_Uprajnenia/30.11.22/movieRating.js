function movieRating(input) {
    let index = 0;
    let moviesAmount = Number(input[index]);
    index++;
    let movieName = "";
    let movieRate = 0;

    let i = index;
    let maxRate = Number.MIN_SAFE_INTEGER;
    let movieMaxRateName = "";
    let minRate = Number.MAX_SAFE_INTEGER;
    let movieMinRateName = "";
    let totalRate = 0;
    
    while (i <= moviesAmount * 2) {
        movieName = input[index];
        index++;
        movieRate = Number(input[index]);
        index++;

        if (movieRate > maxRate) {
            maxRate = movieRate;
            movieMaxRateName = movieName;
        }

        if (movieRate < minRate) {
            minRate = movieRate;
            movieMinRateName = movieName;
        }

        totalRate += movieRate;

        i = index;
    }

    let averageRate = totalRate / moviesAmount;

    console.log(`${movieMaxRateName} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${movieMinRateName} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${averageRate.toFixed(1)}`);
}

movieRating(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);