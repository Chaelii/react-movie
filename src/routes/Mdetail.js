import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Mdetail.module.css";

function Mdetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            console.log(json.data.movie);
    };
    useEffect(()=>{
        getMovie();
    }, []);
    const genre = movie.genres;

    return(
        <div className={styles.container}>
            <img src={movie.background_image} alt={movie.title} className={styles.backimg} />
            <div className={styles.mbox}>
                <img src={movie.medium_cover_image} alt={movie.title} className={styles.mimg} />
                <div>
                    <h1 className={styles.mtitle}>{movie.title} ({movie.year}) </h1>
                    <ul className={styles.detail}>
                        <li className={styles.ic}>★ {movie.rating} &emsp; ♥ {movie.like_count}</li>
                        <li>Runtime : {movie.runtime}</li>
                        <li>
                            <ul className={styles.mgenres}>
                                {genre&&genre.map((g) => (
                                    <li key={g}> {g} </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mdetail;