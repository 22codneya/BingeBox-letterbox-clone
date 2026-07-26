import MovieCard from "./MovieCard";
const movieGrid = (title) => {
  return (
    <div>
       <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((movie) => (
          <MovieCard key={movie} />
        ))}
      </div>
    </section>
    </div>
  )
}

export default movieGrid
