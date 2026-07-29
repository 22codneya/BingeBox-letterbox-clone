import { findLike } from "../repositories/movieLikeRepo.js";
import {updateMovieViews, updateMovieRating, getMovieStats,} from "../repositories/movieStatRepo.js";

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
export const getMovieStatsWithUser = async (movieId, type, userId) => {
  const stats = await getMovieStats(movieId, type);

  const liked = await findLike (userId, movieId, type);

  return {
    views: stats?.views || 0,
    likes: stats?.likes || 0,
    averageRating: stats?.averageRating || 0,
    totalRatings: stats?.totalRatings || 0,
    userLiked: !!liked,
  };
};