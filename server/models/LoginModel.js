import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [2, "username must be minimum 3 character"],
      maxLength: [10, "username must be maximum 20 character"],
    },
    password: { type: String },
    role: { type: String, default: "user" },
    email: { type: String },
    wishlist: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "MovieCart" },
      },
    ],
    review: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "MovieCart" },
        rating: { type: Number },
      },
    ],
    stripe:{type:String}
    
  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", UserSchema);
