import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({id, coverImage, title, summary, genres}) {
    return(
        <div className={styles.movieCard}>
            <img src={coverImage} alt={title} className={styles.movieCard__img} />
            <div>
            <h2 className={styles.movieCard__title}>
            <Link to={`/movie-details/${id}`}>{title}</Link>
            </h2>
            
            <p>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</p>
            <ul className={styles.movieCard__genres}>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieCard;
