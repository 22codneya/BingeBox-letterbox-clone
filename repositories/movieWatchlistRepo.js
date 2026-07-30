import MovieWatchlist from "../model/movieWatchlist.js";

export const findWatchlistMovie = (userId, movieId, type) => {
  return MovieWatchlist.findOne({ userId, movieId, type });
};

export const addToWatchlist = (userId, movieId, type) => {
  return MovieWatchlist.create({
    userId,
    movieId,
    type,
  });
};

export const removeFromWatchlist = (userId, movieId, type) => {
  return MovieWatchlist.findOneAndDelete({
    userId,
    movieId,
    type,
  });
};

export const getUserWatchlist = (userId) => {
  return MovieWatchlist.find({ userId });
};