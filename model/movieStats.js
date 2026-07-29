import mongoose from "mongoose";

const movieStatsSchema = new mongoose.Schema({

  movieId:{
    type:String,
    required:true
  },

  type:{
    type:String,
    enum:["movie","tv"],
    required:true
  },

  views:{
    type:Number,
    default:0
  },

  likes:{
    type:Number,
    default:0
  },

  totalRatings:{
    type:Number,
    default:0
  },

  ratingSum:{
    type:Number,
    default:0
  },

  averageRating:{
    type:Number,
    default:0
  }

});


export default mongoose.model(
  "MovieStats",
  movieStatsSchema
);