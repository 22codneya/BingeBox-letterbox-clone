import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthStore from "../store/useauthStore.js";
const API = import.meta.env.VITE_API_URL;

const MovieDetails = () => {
  const { id, type } = useParams();
  const { token, user } = useAuthStore();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [movie, setMovie] = useState(null);

  const [inWatchlist, setInWatchlist] = useState(false);

  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loadingSummary, setLoadingSummary] = useState(false);


  const handleLike = async () => {
    try {
      const res = await fetch(`${API}/movie/toggle-lik`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: Number(id),
          type,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setIsLiked(data.liked);
      setLikes(data.likes);
    } catch (err) {
      console.log(err);
    }
  };

  //watchlist
  const handleWatchlist = async () => {
  try {
    const response = await fetch(
      `${API}/api/movie/toggle-watchlist`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: Number(id),
          type,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setInWatchlist(data.saved);
  } catch (err) {
    console.log(err);
  }
};
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

  // fetching movie stats
  useEffect(() => {
    if (!token) return;

    const loadStats = async () => {
      try {
        const response = await fetch(
          `${API}/movie/${type}/${id}/stats`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setLikes(data.likes || 0);
        setViews(data.views || 0);
        setAverageRating(data.averageRating || 0);
        setIsLiked(data.userLiked || false);
        setUserRating(data.userRating || 0);
      } catch (err) {
        console.log("stats error", err);
      }
    };

    loadStats();
  }, [id, type, token]);
  // adding view in our database
  useEffect(() => {
    const addView = async () => {
      try {
        const response = await fetch(
          `${API}/movie/${type}/${id}/view`,
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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${API}/movie/${type}/${id}/reviews`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setReviews(data.reviews);
      } catch (err) {
        console.log(err);
      }
    };

    fetchReviews();
  }, [id, type]);

  const handleReview = async () => {
    if (!review.trim()) return;

    try {
      const response = await fetch(
        `${API}/api/movie/${type}/${id}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            review,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setReviews((prev) => [data.review, ...prev]);
      setReview("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(
        `${API}/movie/review/${reviewId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setReviews((prev) => prev.filter((review) => review._id !== reviewId));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSummarizeReviews = async () => {
    try {
      setLoadingSummary(true);

      const response = await fetch(
        `${API}/movie/${type}/${id}/review-summary`,
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      setSummary(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingSummary(false);
    }
  };

  const handleRating = async (rating) => {
    setUserRating(rating);

    try {
      const response = await fetch(
        `${API}/movie/${type}/${id}/rate`,
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
      {/* ================= MOVIE BACKDROP SECTION ================= */}

      <div
        className="h-175 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container mx-auto px-6 py-12 text-white">
          {/* ================= Movie Section ================= */}

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-64 rounded-xl shadow-lg"
            />

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">
                {movie.title || movie.name}
              </h1>

              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <span>⭐ TMDB {movie.vote_average?.toFixed(1)}</span>

                <span>
                  ⭐ User {averageRating ? averageRating.toFixed(1) : "0.0"}
                </span>

                <span>👁 {views}</span>

                <span>❤️ {likes}</span>

                <span>{movie.release_date || movie.first_air_date}</span>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {movie.overview}
              </p>

              {/* Genres */}

              <div className="mt-6 flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span key={genre.id} className="badge badge-primary">
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Rating */}

              <div className="mt-8 flex items-center gap-4 flex-wrap">
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

                <span>{userRating}/5</span>
              </div>

              {/* Buttons */}

              <div className="mt-6 flex gap-4">
                <button className="btn btn-circle" onClick={handleLike}>
                  {isLiked ? (
                    <span className="text-red-500 text-xl">❤️</span>
                  ) : (
                    <span className="text-xl">🤍</span>
                  )}
                </button>

<button
  className="btn btn-primary"
  onClick={handleWatchlist}
>
  {inWatchlist ? "✓ In Watchlist" : "+ Add to Watchlist"}
</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= REVIEWS SECTION ================= */}

      <div className="container mx-auto px-6 py-10 text-white">
        {/* Heading + AI Button */}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Reviews</h2>

          <button
            className="btn btn-secondary"
            onClick={handleSummarizeReviews}
            disabled={loadingSummary}
          >
            {loadingSummary ? "Analyzing..." : " AI Summary"}
          </button>
        </div>

        {/* AI SUMMARY CARD */}

        {summary && (
          <div className="bg-base-200 rounded-xl p-5 mb-8">
            <h3 className="text-xl font-bold mb-4"> AI Review Summary</h3>

            {/* Summary */}
            <p className="mb-5 text-gray-200">{summary.summary}</p>

            {/* Sentiment */}
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold">Sentiment:</span>

                <span className="badge badge-success">
                  {summary.sentiment?.overall}
                </span>

                <span className="badge badge-info">
                  {summary.sentiment?.score}/100
                </span>
              </div>

              <p className="text-gray-300">{summary.sentiment?.explanation}</p>
            </div>

            {/* Common Likes */}

            {summary.commonLikes?.length > 0 && (
              <div className="mb-5">
                <h4 className="font-semibold mb-2"> What viewers liked</h4>

                <div className="flex flex-wrap gap-2">
                  {summary.commonLikes.map((item) => (
                    <span
                      key={item}
                      className="badge badge-success badge-outline"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Common Dislikes */}

            {summary.commonDislikes?.length > 0 && (
              <div className="mb-5">
                <h4 className="font-semibold mb-2"> Common complaints</h4>

                <div className="flex flex-wrap gap-2">
                  {summary.commonDislikes.map((item) => (
                    <span
                      key={item}
                      className="badge badge-error badge-outline"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Keywords */}

            <div>
              <h4 className="font-semibold mb-2"> Most mentioned keywords</h4>

              <div className="flex flex-wrap gap-2">
                {summary.keywords?.map((word) => (
                  <span key={word} className="badge badge-outline">
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Audience Opinion */}

            {summary.audienceOpinion && (
              <div className="mt-5">
                <h4 className="font-semibold"> Audience Opinion</h4>

                <p className="text-gray-300 mt-1">{summary.audienceOpinion}</p>
              </div>
            )}
          </div>
        )}

        {/* ADD REVIEW */}

        <div className="flex gap-3 mb-10">
          <input
            type="text"
            className="input input-bordered flex-1 text-white"
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <button className="btn btn-primary" onClick={handleReview}>
            Post
          </button>
        </div>
        {reviews.length === 0 ? (
          <p className="text-gray-400">No reviews yet.</p>
        ) : (
          reviews.map((item) => (
            <div key={item._id} className="bg-base-200 rounded-xl p-5 mb-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <img
                    src={item.userId?.profileImage || "/defaultProfile.jpg"}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.userId?.userName || "Anonymous"}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {item.userId?._id === user?._id && (
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDeleteReview(item._id)}
                  >
                    🗑 Delete
                  </button>
                )}
              </div>

              <p className="text-gray-200">{item.review}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default MovieDetails;
