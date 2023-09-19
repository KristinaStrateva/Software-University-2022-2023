function longestValidParenthesis(string) {
    let input = string[0].split('');
    let index = 0;
    let el = input[index];
    index++;

    let result = [];

    while (el) {
        let counter = 0;

        if (el === '(') {
            counter++;

            for (let i = index; i < input.length; i++) {
                let nextEl = input[i];
                let elAfterNextEl = input[i + 1];

                if (nextEl === ')' && counter % 2 !== 0) {
                    counter++;
                } else if (nextEl === '(' && counter % 2 === 0 && i !== input.length - 1 && elAfterNextEl !== '(') {
                    counter++;
                } else {
                    break;
                }

                index++;
            }
        }

        result.push(counter);

        el = input[index];
        index++;
    }

    console.log(Math.max(...result));
}

longestValidParenthesis(['()(()()(()']);