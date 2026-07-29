import movieStats from "../model/movieStats.js";

export const getMovieStats = async (movieId, type) => {
  return await movieStats.findOne({
    movieId,
    type,
  });
};

export const updateMovieViews = async (movieId, type) => {
  return await movieStats.findOneAndUpdate(
    {
      movieId,
      type,
    },
    {
      $inc: {
        views: 1,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
};

export const updateMovieRating = async (movieId, type, rating) => {
  const stats = await movieStats.findOneAndUpdate(
    {
      movieId,
      type,
    },
    {
      $inc: {
        totalRatings: 1,
        ratingSum: rating,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );

  stats.averageRating = stats.ratingSum / stats.totalRatings;

  await stats.save();

  return stats;
};

export const incrementLike = (movieId, type) => {
  return movieStats.findOneAndUpdate(
    {
      movieId,
      type,
    },
    {
      $inc: {
        likes: 1,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
};

export const decrementLike = (movieId, type) => {
  return movieStats.findOneAndUpdate(
    {
      movieId,
      type,
    },
    {
      $inc: {
        likes: -1,
      },
    },
    {
      new: true,
    }
  );
};