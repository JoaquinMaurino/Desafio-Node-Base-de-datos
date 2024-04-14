import { libroModel } from "../models/libro.model.js";

export const findBooks = async (query)=>{
    try {
        return await libroModel.find(query);
    } catch (error) {
        throw new Error(error)
    }
};

export const createBook = async (book)=>{
    try {
        const newBook = await libroModel(book)
        await newBook.save()
        return newBook
    } catch (error) {
        throw new Error(error)
    }
};

export const findBook = async(id) =>{
    try {
      const book = await libroModel.findById(id)
      return book  
    } catch (error) {
        throw new Error(error)
    }
}

export const updateBook = async (id, data) => {
    try {
        const updatedBook = await libroModel.findByIdAndUpdate(id,data)
        return updatedBook
    } catch (error) {
        throw new Error(error)
        
    }
}

export const deleteBook = async (id)=>{
    try {
        return await libroModel.findByIdAndDelete(id)
    } catch (error) {
        throw new Error(error)
    }
};