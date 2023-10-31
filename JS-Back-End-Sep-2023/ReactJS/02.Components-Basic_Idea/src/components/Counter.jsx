import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const onDecrementClick = () => {
        setCount(oldValue => oldValue - 1);
    };

    const resetCounter = () => {
        setCount(0);
    }

    const onIncrementClick = () => {
        setCount(oldValue => oldValue + 1);
    }

    // Conditional rendering with return

    // if (count < 0) {
    //     return (
    //         <h3>Invalid counter!</h3>
    //     );
    // }

    // Conditional rendering with if

    // let warning = null;

    // if (count < 0) {
    //     warning = <p>Invalid counter!</p>
    // }

    let message = null;

    switch (count) {
        case 0:
            message = 'Let\'s go!';
            break;

        case 1:
            message = 'First blood!';
            break;

        case 2:
            message = 'Double kill!';
            break;

        case 3:
            message = 'Tripple kill!';
            break;

        case 4:
            message = 'Multi kill!';
            break;

        case 5:
            message = 'Unstoppable!';
            break;

        case 6:
            message = 'God like!';
            break;

        default:
            message = 'M-m-m-monster kill!';
            break;
    }

    return (
        <div>

            <h3>Counter</h3>

            <h4>{message}</h4>

            <p>{count}</p>

            {/* {warning} */}

            {/* Conditional rendering with ternary 

                {count < 0
                ? <p>Invalid counter!</p>
                : null
                } */}

            {/* Conditional rendering with boolean */}

            {count < 0 && <p>Invalid counter!</p>}  {/* If count is less than 0 only then show the 'Invalid counter!' message */}

            <button disabled={count < 0} onClick={onDecrementClick}>-</button>
            <button onClick={resetCounter}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}