function MovieCard() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://placehold.co/300x450"
          alt="Movie Poster"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">Movie Title</h2>

        <p>⭐ 8.5</p>

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