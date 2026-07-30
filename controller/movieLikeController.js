import { toggleLike } from "../services/movieLikeService.js";
import { getFavorites } from "../services/movieLikeService.js";

export const getFavoriteMovies = async (req, res) => {
  try {
    const movies = await getFavorites(req.id);

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

export const toggleMovieLike = async (req, res) => {
  try {
    const userId = req.id; 
    console.log("request body from controller ", req.body);
    const { id, type } = req.body;

    if (!id || !type) {
      return res.status(400).json({
        success: false,
        message: "movieId and type are required",
      });
    }

    const result = await toggleLike(userId, id, type);

    return res.status(200).json({
      success: true,
      liked: result.liked,
      likes: result.likes,
    });
  } catch (err) {
    console.error("Toggle Like Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};