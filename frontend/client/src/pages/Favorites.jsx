import { useEffect, useState } from "react";
import useAuthStore from "../store/useauthStore.js";

const Favorites = () => {
  const { token } = useAuthStore();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   

  const fetchFavorites = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/movie/favorites",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      const detailedMovies = await Promise.all(
        data.movies.map(async (movie) => {
          const res = await fetch(
            `https://api.themoviedb.org/3/${movie.type}/${movie.movieId}`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                accept: "application/json",
              },
            }
          );

          return await res.json();
        })
      );

      setMovies(detailedMovies);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
   fetchFavorites();
  }, []);

  if (loading) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (movies.length === 0) {
    return (
      <h1 className="text-center mt-10 text-2xl">
        ❤️ No favourite movies yet.
      </h1>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">❤️ My Favorites</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="card bg-base-200 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {movie.title || movie.name}
              </h2>

              <p>
                {movie.release_date?.slice(0, 4) ||
                  movie.first_air_date?.slice(0, 4)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;