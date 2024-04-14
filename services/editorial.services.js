import { editorialModel } from "../models/editorial.model.js";

export const findEditorials = async () => {
  try {
    return await editorialModel.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const createEditorial = async (book) => {
  try {
    const newEditorial = await editorialModel(book);
    await newEditorial.save();
    return newEditorial;
  } catch (error) {
    throw new Error(error);
  }
};

export const findEditorial = async (id) => {
  try {
    const editorial = await editorialModel.findById(id);
    return editorial;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateEditorial = async (id, data) => {
  try {
    const updatedEditorial = await editorialModel.findByIdAndUpdate(id, data);
    return updatedEditorial;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteEditorial = async (id) => {
  try {
    return await editorialModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};
