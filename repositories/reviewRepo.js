import Review from "../model/reviewModel.js";

export const createReview = async ({ movieId, type, userId, review }) => {
  const newReview = await Review.create({
    movieId,
    type,
    userId,
    review,
  });

  return await newReview.populate(
    "userId",
    "userName profileImage"
  );
};

export const getMovieReviews = async (movieId, type) => {
  return await Review.find({ movieId, type })
    .populate("userId", "userName profileImage")
    .sort({ createdAt: -1 });
};

export const getMovieReviewsforAI = async (movieId, type) => {
  return await Review.find({ movieId, type });
};

export const findReviewById = async (reviewId) => {
  return await Review.findById(reviewId);
};

export const deleteReviewById = async (reviewId) => {
  return await Review.findByIdAndDelete(reviewId);
};