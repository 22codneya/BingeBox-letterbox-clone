import { generateMovieRecommendation } from "../services/recommendationService.js";

export const getMovieRecommendation = async (req, res) => {
  try {
    const userId = req.id;

    const { genre, random } = req.body;

    const recommendation = await generateMovieRecommendation({
      userId,
      genre,
      random,
    });

    res.status(200).json({
      success: true,
      recommendation,
    });
  } catch (error) {
    console.log("Recommendation Controller Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
