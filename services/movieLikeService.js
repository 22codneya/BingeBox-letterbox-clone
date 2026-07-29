import {
  findLike,
  createLike,
  deleteLike,
} from "../repositories/movieLikeRepo.js";

import {
  incrementLike,
  decrementLike,
} from "../repositories/movieStatRepo.js";

export const toggleLike = async (id, movieId, type) => {
  const alreadyLiked = await findLike(userId, movieId, type);

  if (alreadyLiked) {
    await deleteLike(userId, movieId, type);

    const stats = await decrementLike(movieId, type);

    return {
      liked: false,
      likes: stats.likes,
    };
  }

  await createLike(userId, movieId, type);

  const stats = await incrementLike(movieId, type);

  return {
    liked: true,
    likes: stats.likes,
  };
};