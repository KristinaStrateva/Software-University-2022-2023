function numbersDividedBy3() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        } else {
        continue;
        }
    }
}

numbersDividedBy3();