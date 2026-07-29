import { useEffect, useState } from "react";

const token = import.meta.env.VITE_TMDB_TOKEN;

const useFetch = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!url) return;
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        // console.log("Result:", result);

        setMovies(result.results || []);
      } catch (err) {
        console.error("error is here in hook",err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchMovies();
    }
  }, [url]);

  return { movies, loading, error };
};

export default useFetch;