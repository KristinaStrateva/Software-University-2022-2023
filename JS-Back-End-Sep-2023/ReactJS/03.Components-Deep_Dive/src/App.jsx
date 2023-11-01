import './App.css'

function App() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const doubled = numbers.map(num => <li key={num}>{num * 2}</li>);

    return (
        <ul>
            {doubled}
        </ul>
    );
}

export default App
