const MovieCard = ({ movie }) => {
  return (
    <div className="w-40 cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="w-50 h-60 rounded-xl object-cover"
      />
    </div>
  );
};

export default MovieCard;

