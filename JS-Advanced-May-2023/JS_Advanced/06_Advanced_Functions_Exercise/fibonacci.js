function getFibonator() {
    let prevNum = 0;
    let currNum = 1;

    return function () {
        let fibonacciNum = prevNum + currNum;

        currNum = prevNum;
        prevNum = fibonacciNum;

        return fibonacciNum;
    };
}

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); // 13