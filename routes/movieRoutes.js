import express from "express";

import {
  toggleMovieLike,
  getFavoriteMovies,
} from "../controller/movieLikeController.js";

import protect from "../middleware/authMiddleware.js";
import {
  addMovieView,
  addMovieRating,
  getMovieStats,
} from "../controller/movieStatController.js";
import {
  addReview,
  deleteReview,
  getReviews,
  summarizeReviews,
} from "../controller/reviewController.js";
import { getMovieRecommendation } from "../controller/recommendationController.js";
import {
  toggleWatchlist,
  getWatchlistMovies,
} from "../controller/movieWatchlistController.js";
import {
  getUserWatchedMoviesController,
  toggleMovieWatched,
} from "../controller/movieWatchedController.js";

const router = express.Router();

router.post("/:type/:id/view", addMovieView);
router.post("/:type/:id/rate", addMovieRating);
router.post("/toggle-like", protect, toggleMovieLike);
router.get("/:type/:id/stats", protect, getMovieStats);
router.get("/favorites", protect, getFavoriteMovies);
router.post("/toggle-watchlist", protect, toggleWatchlist);
router.get("/watchlist", protect, getWatchlistMovies);
router.post("/:type/:id/review", protect, addReview);
router.get("/:type/:id/reviews", getReviews);
router.delete("/review/:reviewId", protect, deleteReview);
router.get("/:type/:id/review-summary", summarizeReviews);
router.post("/toggle-watched", protect, toggleMovieWatched);
router.get("/watched", protect, getUserWatchedMoviesController);
router.post("/recommendation", protect, getMovieRecommendation);

export default router;
