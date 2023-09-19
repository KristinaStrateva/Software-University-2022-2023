function colorize() {
    let tableArr = Array.from(document.querySelectorAll('table tr'));
    let tableArrLength = tableArr.length;

    for (let i = 1; i < tableArrLength; i += 2) {
        tableArr[i].style.background = 'teal';
    }
}