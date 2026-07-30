import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hook/useFetchhook.jsx";
import MovieCard from "../components/movieCard.jsx";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const [genre, setGenre] = useState(null);
  const [language, setLanguage] = useState(null);
  const [country, setCountry] = useState(null);

  let url;

  if (searchQuery) {
    url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      searchQuery
    )}&language=en-US`;
  } else {
    url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc";

    if (genre) {
      url += `&with_genres=${genre}`;
    }

    if (language) {
      url += `&with_original_language=${language}`;
    }

    if (country) {
      url += `&with_origin_country=${country}`;
    }
  }

  const { movies, loading, error } = useFetch(url);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-8">

      {!searchQuery && (
        <>
          {/* Genre */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-semibold text-lg mr-2">Genre:</span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === null ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(null)}
            >
              All
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === 28 ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(28)}
            >
              Action
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === 16 ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(16)}
            >
              Animation
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === 36 ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(36)}
            >
              History
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === 27 ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(27)}
            >
              Horror
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                genre === 53 ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setGenre(53)}
            >
              Thriller
            </span>
          </div>

          {/* Language */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-semibold text-lg mr-2">Language:</span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === null ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage(null)}
            >
              All
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === "en" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage("en")}
            >
              English
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === "hi" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage("hi")}
            >
              Hindi
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === "ko" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage("ko")}
            >
              Korean
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === "ja" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage("ja")}
            >
              Japanese
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                language === "fr" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setLanguage("fr")}
            >
              French
            </span>
          </div>

          {/* Country */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-semibold text-lg mr-2">Country:</span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === null ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry(null)}
            >
              All
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === "US" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry("US")}
            >
              USA
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === "IN" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry("IN")}
            >
              India
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === "KR" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry("KR")}
            >
              South Korea
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === "JP" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry("JP")}
            >
              Japan
            </span>

            <span
              className={`badge badge-lg cursor-pointer ${
                country === "GB" ? "badge-primary" : "badge-outline"
              }`}
              onClick={() => setCountry("GB")}
            >
              UK
            </span>
          </div>
        </>
      )}

      {searchQuery && (
        <div className="text-xs text-base-content/50 tracking-wide uppercase mb-6">
          total {movies.length} results for "{searchQuery}"
        </div>
      )}

      {loading ? (
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 rounded-xl bg-base-100 p-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;