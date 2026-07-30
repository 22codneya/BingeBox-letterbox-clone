import { useState } from "react";
import useAuthStore from "../store/useauthStore.js";
const API = import.meta.env.VITE_API_URL;


const genres = [
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Drama", id: 18 },
  { name: "Horror", id: 27 },
  { name: "Romance", id: 10749 },
  { name: "Sci-Fi", id: 878 },
  { name: "Thriller", id: 53 },
];

const MovieRecommendation = () => {
  const [genre, setGenre] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useAuthStore();

  const handleRecommendation = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API}/movie/recommendation`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            genre,
            random: !genre,
          }),
        }
      );

      const data = await response.json();

      console.log("Recommendation response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setRecommendation(data.recommendation);

    } catch (error) {
      console.log("Recommendation error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        Find Your Next Movie
      </h2>

      <div className="flex gap-4 items-center">
        <select
          className="select select-bordered"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Surprise Me</option>

          {genres.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary"
          onClick={handleRecommendation}
        >
          {loading ? "Finding..." : "Recommend"}
        </button>
      </div>

      {recommendation && (
        <div className="mt-6 card bg-base-100 shadow-xl p-5">
          <h3 className="text-xl font-bold">
            {recommendation.title}
          </h3>

          <p className="mt-2">
             {recommendation.rating}
          </p>

          <p className="mt-2">
            {recommendation.reason}
          </p>

          <p className="mt-2">
            {recommendation.whyItMatchesUser}
          </p>
        </div>
      )}
    </section>
  );
};

export default MovieRecommendation;