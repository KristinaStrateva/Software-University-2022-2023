function extract(content) {
    let text = document.getElementById(content).textContent;

    let regExp = /\(([^)]+)\)/g;

    let match = regExp.exec(text);
    let result = [];

    while (match) {
        result.push(match[1]);

        match = regExp.exec(text);
    }

    return result.join('; ');
}