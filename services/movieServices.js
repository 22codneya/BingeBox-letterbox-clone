import {
  updateMovieViews,
  updateMovieRating,
} from "../repositories/movieStatRepo.js";

export const addViewService = async ({ movieId, type }) => {
  const movieStats = await updateMovieViews(movieId, type);

  return {
    views: movieStats.views,
  };
};

export const addRatingService = async ({ movieId, type, rating }) => {
  const movieStats = await updateMovieRating(movieId, type, rating);

  return {
    averageRating: movieStats.averageRating,
    totalRatings: movieStats.totalRatings,
  };
};
