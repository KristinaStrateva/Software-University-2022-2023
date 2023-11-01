import { useEffect, useState } from "react";

export default function Starwars() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>SW Characters</h1>

            <ul>
                {characters.map(char => <li key={char.url}>Name: {char.name}</li>   )}
            </ul>
        </div>
    );
}