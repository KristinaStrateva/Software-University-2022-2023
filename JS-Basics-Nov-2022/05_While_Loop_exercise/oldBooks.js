function oldBooks(input) {
    index = 0;
    let searchedBook = input[index];
    index++;
    let checkedBook =input[index];
    index++;
    let totalCheckedBooks = 0;

    while (checkedBook !== searchedBook || checkedBook !== "No More Books") {        
        if (checkedBook === searchedBook) {
            console.log(`You checked ${totalCheckedBooks} books and found it.`);
        return;
        } else if (checkedBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${totalCheckedBooks} books.`);
        return;
        } else {
            totalCheckedBooks++;
            checkedBook = input[index];
            index++;
        }
    }
}

oldBooks(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"]);