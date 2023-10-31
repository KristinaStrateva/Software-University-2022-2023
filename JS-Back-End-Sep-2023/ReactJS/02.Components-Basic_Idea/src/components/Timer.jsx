import { useState } from 'react';

export default function Timer(props) {
    const [time, setTime] = useState(props.startTime);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h3>Timer:</h3>

            <p>{time}</p>
        </div>
    );
}