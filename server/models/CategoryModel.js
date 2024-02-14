import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  category: { type: String },
});

export const Category = mongoose.model("Category", CategorySchema);
