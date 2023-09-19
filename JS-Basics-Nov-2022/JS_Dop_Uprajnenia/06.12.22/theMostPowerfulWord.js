function theMostPowerfulWord(input) {
    let index = 0;
    let word = input[index];
    index++;

    let maxSum = Number.MIN_SAFE_INTEGER;
    let mostPowerfulWord = "";

    while (word !== "End of words") {
        let wordPower = 0;
        let isVocals = true;

        for (let i = 0; i < word.length; i++) {
            let currentLetter = word[i];
            let currentLetterCharCode = currentLetter.charCodeAt(word);

            wordPower += currentLetterCharCode;

            if (currentLetter = word[0]) {
                if (currentLetter !== "a" && currentLetter !== "e" && currentLetter !== "i" && currentLetter !== "o" && currentLetter !== "u" && currentLetter !== "y" && currentLetter !== "A" && currentLetter !== "E" && currentLetter !== "I" && currentLetter !== "O" && currentLetter !== "U" && currentLetter !== "Y") {
                    isVocals = false;
                }
            }
        }

        if (isVocals) {
            wordPower *= word.length;
        } else {
            wordPower /= Math.floor(word.length);
        }

        if (wordPower > maxSum) {
            maxSum = wordPower;
            mostPowerfulWord = word;
        }

        word = input[index];
        index++;
    }

    console.log(`The most powerful word is ${mostPowerfulWord} - ${maxSum}`);
}

theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"]);