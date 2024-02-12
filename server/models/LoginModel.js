import mongoose , {Schema}from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [3, "username must be minimum 3 character"],
      maxLength: [20, "username must be maximum 20 character"],
      required: true,
    },
    password: { type: String, required: true },
    role: { type: String, default:"User"},
  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", UserSchema);