import mongoose from "mongoose";

const movieWatchedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    movieId: {
      type: Number,
      required: true,
    },

    type: {
      type: String,
      enum: ["movie", "tv"],
      required: true,
    },

    watchedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

movieWatchedSchema.index(
  {
    userId: 1,
    movieId: 1,
    type: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model("MovieWatched", movieWatchedSchema);