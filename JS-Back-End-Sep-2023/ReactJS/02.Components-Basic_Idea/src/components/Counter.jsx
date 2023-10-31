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

    return (
        <div>

            <h3>Counter</h3>

            <p>{count}</p>

            <button onClick={onDecrementClick}>-</button>
            <button onClick={resetCounter}>Clear</button>
            <button onClick={onIncrementClick}>+</button>
        </div>
    );
}