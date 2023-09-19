function evenPositionElements(input) {
    let result = input
    .filter((el, index) => {
        if (index % 2 === 0) {
            return el;
        }
    })
    .join(' ');

    console.log(result);
}

// Alternative way for solution:
// 
// let evenPositionElements = input => input
//     .filter((el, index) => index % 2 === 0)
//     .join(' ');

console.log(evenPositionElements(['20', '30', '40', '50', '60']));