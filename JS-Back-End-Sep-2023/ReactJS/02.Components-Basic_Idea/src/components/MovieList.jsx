import Movie from "./Movie";

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <h2>Movie list</h2>

            <ul>
                <Movie data={props.movies[0]} />
                <Movie data={props.movies[1]} />
                <Movie data={props.movies[2]} />
                <Movie data={props.movies[3]} />
            </ul>
        </div>
    );
}