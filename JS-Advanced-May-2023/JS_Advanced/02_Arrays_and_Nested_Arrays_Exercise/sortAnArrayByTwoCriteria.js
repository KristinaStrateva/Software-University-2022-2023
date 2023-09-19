function sortByTwoCriteria(input) {
    input.sort((a, b) => {
        let division = a.length - b.length;

        if (division === 0) {
            return a.localeCompare(b);
        }

        return division;
    })

    console.log(input.join('\n'));
}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);