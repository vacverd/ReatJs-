import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetail() {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const fetchMovieDetails = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovieInfo(json.data.movie);
        console.log(json);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    return (
        <div>
            {movieInfo.large_cover_image && (
                <img src={movieInfo.large_cover_image} alt={movieInfo.title} />
            )}
            <h1>{movieInfo.title}</h1>
            <h3>Release Year: {movieInfo.year}</h3>
            <h3>Rating: {movieInfo.rating}</h3>
        </div>
    );
}

export default MovieDetail;
