export default function Movie(props) {
    return (
        <li>
            <article>
                <h3>{props.data.title}</h3>
                <p>Director: {props.data.director}</p>
                <p>Cast: {props.data.actors}</p>
                <p>Year: {props.data.year}</p>
            </article>
        </li>
    );
}