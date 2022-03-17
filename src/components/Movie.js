import styles from "./Movie.module.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie({id, year, coverImg, title, summary, genres}) {
    return(
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.mimg}/>
            <div>
                <h2 className={styles.mtitle}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.myear}> {year}</h3>
                <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
                <ul className={styles.mgenres}>
                    {genres.map((g) => (
                        <li key={g}> {g} </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes ={
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;