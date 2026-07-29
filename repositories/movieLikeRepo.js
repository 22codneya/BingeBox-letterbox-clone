import MovieLike from "../model/movieLike.js";

export const findLike = (userId, movieId, type) => {
  return MovieLike.findOne({ userId, movieId, type });
};

export const createLike = (userId, movieId, type) => {
  return MovieLike.create({
    userId,
    movieId,
    type,
  });
};

export const deleteLike = (userId, movieId, type) => {
  return MovieLike.findOneAndDelete({
    userId,
    movieId,
    type,
  });
};