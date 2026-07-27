import MovieCard from "./MovieCard";
const MovieCarousel = ({ title, movies }) => {
  return (
    <section>
      <h2>{title}</h2>

      <div className="carousel space-x-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
export default MovieCarousel 