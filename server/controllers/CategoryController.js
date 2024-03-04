import { Category } from "../models/CategoryModel.js";

export const GetCategory = async (req, res) => {
  const data = await Category.find({});
  res.send(data);
};

export const GetByIdCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).send("Product Delete");
  } catch (error) {
    res.status(404).send("Product Not Delete");
  }
};

export const PostCategory = async (req, res) => {
  try {
    const { category } = req.body;
    const data = new Category({
        category
    })
    await data.save();
    res.status(200).send("Create Product");
  } catch (error) {
    res.status(404).send("Not Create Product");
  }
};

export const UpdateCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error);
  }
};
