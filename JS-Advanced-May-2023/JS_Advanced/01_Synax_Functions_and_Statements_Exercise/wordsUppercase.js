function wordsUppercase(string) {
    let words = string
        .match(/\w+/g)
        .map(x => x.toUpperCase());

    console.log(words.join(', '));
}

wordsUppercase('Hi, how are you?');