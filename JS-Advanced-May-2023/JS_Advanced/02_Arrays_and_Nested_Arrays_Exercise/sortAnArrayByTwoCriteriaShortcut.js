function sortByTwoCriteria(input) {
    input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(input.join('\n'));
}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);