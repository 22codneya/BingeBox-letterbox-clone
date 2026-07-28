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
  return (
     <section className="px-6 py-4">
      <h2 className="text-2xl font-bold text-white mb-4">
         Trending Today
      </h2>

      <div className="carousel carousel-center rounded-box space-x-4 w-full">
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  )
};
export default MovieCarousel 