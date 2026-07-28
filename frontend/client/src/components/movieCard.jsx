function MovieCard({ movie}) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie Poster"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>

        <p>Description: {movie.overview}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;