function squareOfStars(input) {
    let n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        let stars = "";

        for (let j = 1; j <= n; j++) {
            stars += "* ";
        }

        console.log(stars);
    }
}

squareOfStars(["2"]);

//test