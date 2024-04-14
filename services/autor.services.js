import { autorModel } from "../models/autor.model.js";

export const findAuthors = async () => {
  try {
    return await autorModel.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const createAuthor = async (author) => {
  try {
    const newAuthor = await autorModel(author);
    await newAuthor.save();
    return newAuthor;
  } catch (error) {
    throw new Error(error);
  }
};

export const findAuthor = async (id) => {
  try {
    const author = await autorModel.findById(id);
    return author;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAuthor = async (id, data) => {
  try {
    const updatedAuthor = await autorModel.findByIdAndUpdate(id, data);
    return updatedAuthor;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAuthor = async (id) => {
  try {
    return await autorModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
