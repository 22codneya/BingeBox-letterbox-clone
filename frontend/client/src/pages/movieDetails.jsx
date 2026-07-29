import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id, type } = useParams();
  const [views, setViews] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [movie, setMovie] = useState(null);
  //fetching api data
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          },
        );

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id, type]);

  // adding view in our database
  useEffect(() => {
    const addView = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/movie/${type}/${id}/view`,
          {
            method: "POST",
          },
        );

        console.log("Status:", response.status);

        const data = await response.json();

        console.log(data);

        setViews(data.views);
      } catch (err) {
        console.log(err.message);
      }
    };
    addView();
  }, [id, type]);

  const handleRating = async (rating) => {
    setUserRating(rating);

    try {
      const response = await fetch(
        `http://localhost:5001/api/movie/${type}/${id}/rate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating,
          }),
        },
      );

      const data = await response.json();

      console.log(data);

      setAverageRating(data.averageRating);
    } catch (err) {
      console.log(err);
    }
  };
  if (!movie) return <h1>Loading...</h1>;

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* content */}
        <div className="relative z-10 container mx-auto px-6 py-12 text-white">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-64 rounded-xl shadow-lg"
            />

            {/* Details */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                {movie.title || movie.name}
              </h1>
              <div className="flex gap-4 mb-4 text-sm">
                <span>⭐ TMDB {movie.vote_average?.toFixed(1)}</span>

                <span>
                  ⭐ User {averageRating ? averageRating.toFixed(1) : "0.0"}
                </span>

                <span>👁 {views}</span>

                <span>{movie.release_date || movie.first_air_date}</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {movie.overview}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="badge badge-primary">
                    {genre.name}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="font-semibold">Rate this</span>

                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={userRating === star}
                      onChange={() => handleRating(star)}
                    />
                  ))}
                </div>

                <span className="text-gray-300">{userRating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
