
import {
  findWatchlistMovie,
  addToWatchlist,
  removeFromWatchlist,
  getUserWatchlist,
} from "../repositories/movieWatchlistRepo.js";

export const toggleWatchlistService = async (
  userId,
  movieId,
  type
) => {
  const exists = await findWatchlistMovie(
    userId,
    movieId,
    type
  );

  if (exists) {
    await removeFromWatchlist(userId, movieId, type);

    return {
      saved: false,
    };
  }

  await addToWatchlist(userId, movieId, type);

  return {
    saved: true,
  };
};

export const getWatchlistService = async (userId) => {
  return await getUserWatchlist(userId);
};