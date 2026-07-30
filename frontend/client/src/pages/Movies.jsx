import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard.jsx";
import  useAuthStore  from "../store/useauthStore.js";

const API = import.meta.env.VITE_API_URL;

export default function Watched() {
  const { token } = useAuthStore();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchedMovies = async () => {
      try {
        // Fetch watched movie ids from backend
        const response = await fetch(`${API}/movie/watched`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        // Fetch TMDB details for every watched movie
        const tmdbMovies = await Promise.all(
          data.watchedMovies.map(async (item) => {
            const res = await fetch(
              `https://api.themoviedb.org/3/${item.type}/${item.movieId}?language=en-US`,
              {
                headers: {
                  accept: "application/json",
                  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                },
              }
            );

            const movie = await res.json();

            return {
              ...movie,
              media_type: item.type,
            };
          })
        );

        setMovies(tmdbMovies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchedMovies();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-white mb-8">
         Watched Movies
      </h1>

      {movies.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl text-gray-400">
            No watched movies yet.
          </h2>

          <p className="text-gray-500 mt-2">
            Start watching movies to build your collection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={`${movie.media_type}-${movie.id}`}
              movie={movie}
              type={movie.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
}