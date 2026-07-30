import {
  toggleWatchlistService,
  getWatchlistService,
} from "../services/movieWatchlistService.js";

export const toggleWatchlist = async (req, res) => {
  try {
    const userId = req.id;
    const { id, type } = req.body;

    const result = await toggleWatchlistService(userId, id, type);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getWatchlistMovies = async (req, res) => {
  try {
    const movies = await getWatchlistService(req.id);

    res.status(200).json({
      success: true,
      movies,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};