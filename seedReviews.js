import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from "mongoose";
import dotenv from "dotenv";
import Review from "./model/reviewModel.js";
import User from "./model/user.js";

dotenv.config();

const seedReviews = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected ✅");

    const users = await User.find().limit(5);

    if (users.length === 0) {
      console.log("No users found ❌ Create users first");
      process.exit();
    }

    const reviews = [
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "Absolutely loved this movie. The nostalgia, action and emotions were perfectly balanced.",
        userId: users[0]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "One of the best Spider-Man movies ever made. The theater experience was unforgettable.",
        userId: users[1]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "Amazing action sequences and great performances from the entire cast.",
        userId: users[2]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "The way they handled all the Spider-Man characters was incredible. Pure fan service done right.",
        userId: users[3]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "Tom Holland gave an amazing performance. The emotional scenes were really powerful.",
        userId: users[4]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "A perfect combination of nostalgia and a fresh Spider-Man story. Loved every minute.",
        userId: users[0]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 3,
        review:
          "Good movie overall but some parts felt predictable. Still enjoyable for Marvel fans.",
        userId: users[1]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "The villains were amazing and the story had many emotional moments.",
        userId: users[2]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "This movie brought back childhood memories. A must watch for every Spider-Man fan.",
        userId: users[3]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "Great visuals, amazing fights and a very satisfying conclusion.",
        userId: users[4]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "The best Marvel experience in years. Everyone delivered their roles perfectly.",
        userId: users[0]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "Loved the chemistry between characters. The movie was entertaining from start to finish.",
        userId: users[1]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 5,
        review:
          "An emotional masterpiece with amazing callbacks and unforgettable scenes.",
        userId: users[2]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 3,
        review:
          "Not perfect but definitely a fun superhero movie with some great moments.",
        userId: users[3]._id,
      },
      {
        movieId: 634649,
        type: "movie",
        rating: 4,
        review:
          "Loved the action and character development. Worth watching multiple times.",
        userId: users[4]._id,
      },
    ];

   

    await Review.insertMany(reviews);

    console.log("Spider-Man reviews inserted successfully ✅");

    process.exit();
  } catch (error) {
    console.log("Seed error ❌", error.message);
    process.exit(1);
  }
};

seedReviews();
