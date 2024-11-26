import { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import MovieCard from "../components/MovieCard";

function Dashboard() {
  const [movieList, setMovieList] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const fetchMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoadingStatus(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loadingStatus ? <h1>Loading Movies...</h1> 
      : <div className={styles.movieList}>
        {movieList.map(movie =>
          <MovieCard
            key={movie.id}
            id={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary} 
            genres={movie.genres}
          />
        )}
        </div>
      }
    </div>
  );
}

export default Dashboard;
