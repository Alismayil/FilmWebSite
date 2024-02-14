import mongoose , {Schema}from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: [2, "username must be minimum 3 character"],
      maxLength: [10, "username must be maximum 20 character"],
      required: true,
    },
    password: { type: String, required: true },
    role: { type: String, default:"user"},
    email: { type: String, required: true },

  },
  { timestamps: true }
);

export const Users = mongoose.model("Users", UserSchema);