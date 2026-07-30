import MovieCard from "./movieCard.jsx";
import useFetch from "../../hook/useFetchhook.jsx";

const MovieCarousel = ({title, url}) => {
  const { movies, loading, error } = useFetch(url);

  if (loading) {
    return <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
     <section className="px-6 py-4 pt-0">
      <h2 className="text-2xl font-bold text-white mb-4">
         {title}
      </h2>

      <div className="carousel carousel-center rounded-box space-x-4 w-full rounded-xl bg-base-100 p-5">
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