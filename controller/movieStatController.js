import { addViewService, addRatingService, getMovieStatsWithUser } from "../services/movieServices.js";

export const addMovieView = async (req, res) => {
  try {
    const { id, type } = req.params;

    const result = await addViewService({
      movieId: id,
      type,
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    console.log("Add view error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const addMovieRating = async (req, res) => {
  try {
    const { id, type } = req.params;
    const { rating } = req.body;

    const result = await addRatingService({
      movieId: id,
      type,
      rating,
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    console.log("Add rating error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getMovieStats = async (req, res) => {
  try {
    const { id, type } = req.params;
    const userId = req.id;

    const data = await getMovieStatsWithUser(Number(id), type, userId);

    res.status(200).json({
      success: true,
      ...data,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
