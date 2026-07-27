import MovieCard from "./MovieCard";

const MovieGrid = ({ title, movies }) => {
  return (
    <section className="px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;