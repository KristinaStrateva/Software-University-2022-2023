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

    return (
        <div>

            <h3>Counter</h3>

            <p>{count}</p>

            {/* {warning} */}

            {/* Conditional rendering with ternary 

                {count < 0
                ? <p>Invalid counter!</p>
                : null
                } */}

            {/* Conditional rendering with boolean */}

            {count < 0 && <p>Invalid counter!</p>}  {/* If count is less than 0 only then show the 'Invalid counter!' message */}

            <button onClick={onDecrementClick}>-</button>
            <button onClick={resetCounter}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}