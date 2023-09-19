function rotateArray(arr, step) {
    let rotations = step % arr.length;

    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}

console.log(rotateArray(['1',

'2',

'3',

'4'], 2));