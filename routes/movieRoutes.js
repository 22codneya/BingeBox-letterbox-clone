import express from "express";
import {
  addMovieView,
  addMovieRating,
} from "../controller/movieStatController.js";

const router = express.Router();

router.post("/:type/:id/view", addMovieView);

router.post("/:type/:id/rate", addMovieRating);

export default router;