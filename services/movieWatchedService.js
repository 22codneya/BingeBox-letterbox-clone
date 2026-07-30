import {
  findWatched,
  createWatched,
  deleteWatched,
  getUserWatchedMovies,
} from "../repositories/movieWatchedRepo.js";

export const toggleWatched = async (userId, movieId, type) => {
  const existingWatched = await findWatched(userId, movieId, type);

  if (existingWatched) {
    await deleteWatched(userId, movieId, type);

    return {
      watched: false,
      message: "Movie removed from watched.",
    };
  }

  await createWatched(userId, movieId, type);

  return {
    watched: true,
    message: "Movie marked as watched.",
  };
};

export const getWatchedMovies = async (userId) => {
  return await getUserWatchedMovies(userId);
};