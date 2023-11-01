import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Starwars from './Starwars';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // console.log('Mount component')
    }, []);

    useEffect(() => {
        // console.log(`Update component - ${numbers.length}`);
    }, [numbers]);

    useEffect(() => {
        // setTimeout(() => setCount(c => c + 1), 1000);
    }, [count]); // it will work incorrectly if the + button is clicked

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1));
    }

    return (
        <div className={styles.app}>
            <Starwars />

            <h3>Counter: {count}</h3>

            <ul>
                {numbers.map((num, index) => (
                    <li
                        key={index}
                        className={styles['list-item']}
                    >
                        {num * 2}
                    </li>)
                )}
            </ul>

            <button style={{marginRight: '10px'}} onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}

export default App
