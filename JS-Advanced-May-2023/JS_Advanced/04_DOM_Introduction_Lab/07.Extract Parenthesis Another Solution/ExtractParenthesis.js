function extract(content) {
    let text = document.getElementById(content).textContent;

    let regExp = /\(([^)]+)\)/g;

    let matches = text.match(regExp);
    
    return matches.join('; ');
}