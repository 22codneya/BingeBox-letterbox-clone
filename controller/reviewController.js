import { addReviewService, deleteReviewService, getMovieReviewsService, summarizeReviewsService } from "../services/reviewService.js";

export const addReview = async (req, res) => {
  try {
    const { id, type } = req.params;
    const { review } = req.body;

    const newReview = await addReviewService({
      movieId: Number(id),
      type,
      userId: req.id,
      review,
    });

    res.status(201).json({
      success: true,
      review: newReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { id, type } = req.params;

    const reviews = await getMovieReviewsService(
      Number(id),
      type
    );

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const userId = req.id;

    const result = await deleteReviewService(reviewId, userId);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const summarizeReviews = async (req, res) => {
  try {
    const { id, type } = req.params;

    const result = await summarizeReviewsService(Number(id), type);

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