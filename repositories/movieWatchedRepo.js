import MovieWatched from "../model/movieWatched.js";

export const findWatched = (userId, movieId, type) => {
  return MovieWatched.findOne({
    userId,
    movieId,
    type,
  });
};

export const createWatched = (userId, movieId, type) => {
  return MovieWatched.create({
    userId,
    movieId,
    type,
  });
};

export const deleteWatched = (userId, movieId, type) => {
  return MovieWatched.deleteOne({
    userId,
    movieId,
    type,
  });
};

export const getUserWatchedMovies = (userId) => {
  return MovieWatched.find({ userId }).sort({
    watchedAt: -1,
  });
};