import express from "express";
import { toggleMovieLike} from "../controller/movieLikeController.js";

import protect from "../middleware/authMiddleware.js";
import {addMovieView,addMovieRating} from "../controller/movieStatController.js";

const router = express.Router();

router.post("/:type/:id/view", addMovieView);
router.post("/:type/:id/rate", addMovieRating);
router.post("/toggle-like", protect, toggleMovieLike);

export default router;
