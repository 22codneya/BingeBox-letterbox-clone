import express from "express";

import { toggleMovieLike} from "../controller/movieLikeController.js";
import protect from "../middleware/authMiddleware.js";
import {addMovieView,addMovieRating, getMovieStats} from "../controller/movieStatController.js";
import { addReview, deleteReview, getReviews, summarizeReviews } from "../controller/reviewController.js";

const router = express.Router();

router.post("/:type/:id/view", addMovieView);
router.post("/:type/:id/rate", addMovieRating);
router.post("/toggle-like", protect, toggleMovieLike);
router.get("/:type/:id/stats", protect, getMovieStats);
router.post("/:type/:id/review", protect, addReview);
router.get("/:type/:id/reviews", getReviews);
router.delete("/review/:reviewId", protect, deleteReview);
router.get("/:type/:id/review-summary", summarizeReviews);


export default router;
