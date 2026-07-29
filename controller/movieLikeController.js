import { toggleLike } from "../services/movieLikeService.js";

export const toggleMovieLike = async (req, res) => {
  try {
    const userId = req.user.userId; // protect middleware se
    console.log("request body from controller ", req.body);
    const { id, type } = req.body;

    if (!id || !type) {
      return res.status(400).json({
        success: false,
        message: "movieId and type are required",
      });
    }

    const result = await toggleLike(userId, movieId, type);

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