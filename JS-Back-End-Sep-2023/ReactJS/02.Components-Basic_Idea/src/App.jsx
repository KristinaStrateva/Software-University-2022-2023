import movies from './assets/movies';
import './App.css';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
    return (
        <div>

            <h1>My First Dynamic React Application</h1>

            <Timer startTime={0} />

            <MovieList movies={movies} />

        </div>
    )
}

export default App
