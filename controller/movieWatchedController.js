import {
  toggleWatched,
  getWatchedMovies,
} from "../services/movieWatchedService.js";

export const toggleMovieWatched = async (req, res) => {
  try {
    const userId = req.id;
    const { id, type } = req.body;

    const result = await toggleWatched(userId, Number(id), type);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserWatchedMoviesController = async (req, res) => {
  try {
    const userId = req.id;

    const watchedMovies = await getWatchedMovies(userId);

    return res.status(200).json({
      success: true,
      watchedMovies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};