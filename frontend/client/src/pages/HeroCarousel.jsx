import { useEffect, useState } from "react";

const HeroCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchHeroMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          }
        );

        const data = await response.json();
        setMovies(data.results.slice(1, 6));
      } catch (err) {
        console.error(err);
      }
    };

    fetchHeroMovies();
  }, []);

  if (movies.length === 0) return null;

  return (
    <div className="mb-0">
      <div className="carousel w-full ">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-[500px] object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-end">
              <div className="p-10 text-white max-w-2xl">
                <h1 className="text-5xl font-bold">{movie.title}</h1>

                <p className="mt-4 line-clamp-3">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 py-4">
        {movies.map((_, index) => (
          <a
            key={index}
            href={`#slide${index}`}
            className="btn btn-xs btn-circle"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;