import mongoose, { Schema } from "mongoose";

const MovieCartSchema = new Schema({
  cartposterimage: String,
  name: String,
  writter: String,
  director: String,
  moviegif: String,
  popularcartimage: String,
  imdbpoint: String,
  // moviepoint: Number,
  hourtime: Number,
  daytime: String,
  trailer: String,
  detailbigimage: String,
  filmvideo: String,
  playlistImage: String,
  movietype: String,  
  // series:String

  // ---------------
  // comment:String,
  // category:String,
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  ],
  moviepoint: [
    {
      rating: { type: Number,  minLength: [0, "username must be minimum 0 character"],
      maxLength: [10, "username must be maximum 10 character"],
     },
      rater: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
    },
  ],
});

export const MovieCart = mongoose.model("MovieCart", MovieCartSchema);
