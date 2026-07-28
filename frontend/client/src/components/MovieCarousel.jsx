// import { useEffect } from "react";
// import MovieCard from "./MovieCard";
// import useFetchStore from "../../../hook/useFetchStore.js";
import MovieCard from "./MovieCard";
import useFetch from "../../hook/useFetchhook.jsx";

const MovieCarousel = () => {
  const { movies, loading, error } = useFetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  // const {fetchMovie, movies}= useFetchStore();
  // useEffect(()=>{
  //   fetchMovie('https://api.themoviedb.org/3/trending/all/day?language=en-US')
  // },[])
  // console.log("movies here" , movies);
  return (

    <section>
      {/* <h2>{}</h2> */}

      <div className="carousel space-x-4">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </section>
  );
};
export default MovieCarousel 