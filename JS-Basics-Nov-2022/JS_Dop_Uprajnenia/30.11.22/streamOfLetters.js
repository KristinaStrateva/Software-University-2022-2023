function streamOfLetters(input) {
    let index = 0;
    let currentLetter = input[index];
    index++;

    let newWord = "";
    let finalWords = "";
    let firstTimeLetterN = 0;
    let firstTimeLetterO = 0;
    let firstTimeLetterC = 0;
    let letterNAmount = 0;
    let letterOAmount = 0;
    let letterCAmount = 0;

    while (currentLetter !== "End") {

        if (!(currentLetter >= "a" && currentLetter <= "z") && !(currentLetter >= "A" && currentLetter <= "Z")) {
        currentLetter = input[index];
        index++;
        continue;
        }

        if (currentLetter === "n") {
            letterNAmount++;
            if (letterNAmount === 1) {
                firstTimeLetterN++;

                if (firstTimeLetterN === 1 && firstTimeLetterO === 1 && firstTimeLetterC === 1) {
                    newWord += " ";
                    letterNAmount = 0;
                    letterOAmount = 0;
                    letterCAmount = 0;
                    firstTimeLetterN = 0;
                    firstTimeLetterO = 0;
                    firstTimeLetterC = 0;

                    finalWords += newWord;

                    newWord = "";
                }

                currentLetter = input[index];
                index++;
            continue;
            } else {
                newWord += currentLetter;
            }
        } else if (currentLetter === "o") {
            letterOAmount++;
            if (letterOAmount === 1) {
                firstTimeLetterO++;

                if (firstTimeLetterN === 1 && firstTimeLetterO === 1 && firstTimeLetterC === 1) {
                    newWord += " ";
                    letterNAmount = 0;
                    letterOAmount = 0;
                    letterCAmount = 0;
                    firstTimeLetterN = 0;
                    firstTimeLetterO = 0;
                    firstTimeLetterC = 0;

                    finalWords += newWord;

                    newWord = "";
                }

                currentLetter = input[index];
                index++;
            continue;
            } else {
                newWord += currentLetter;
            }
        } else if (currentLetter === "c") {
            letterCAmount++;
            if (letterCAmount === 1) {
                firstTimeLetterC++;

                if (firstTimeLetterN === 1 && firstTimeLetterO === 1 && firstTimeLetterC === 1) {
                    newWord += " ";
                    letterNAmount = 0;
                    letterOAmount = 0;
                    letterCAmount = 0;
                    firstTimeLetterN = 0;
                    firstTimeLetterO = 0;
                    firstTimeLetterC = 0;
                    
                    finalWords += newWord;

                    newWord = "";
                }

                currentLetter = input[index];
                index++;
            continue;
            } else {
                newWord += currentLetter;
            }
        } else {
            newWord += currentLetter;
        }

        currentLetter = input[index];
        index++;
    }

    console.log(finalWords);
}

streamOfLetters([
    "H",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"
]);