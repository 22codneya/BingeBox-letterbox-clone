import mongoose from "mongoose";

const movieLikeSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

movieLikeSchema.index(
  {
    userId: 1,
    movieId: 1,
    type: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model("MovieLike", movieLikeSchema);