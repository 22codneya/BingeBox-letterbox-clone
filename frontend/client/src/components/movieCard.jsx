import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
  const type = movie.media_type || (movie.first_air_date ? "tv" : "movie");
  navigate(`/details/${type}/${movie.id}`);
  };

  return (
    <div 
    onClick={handleClick}
     className="w-40 cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="w-50 h-60 rounded-xl object-cover"
      />
    </div>
  );
};

export default MovieCard;

