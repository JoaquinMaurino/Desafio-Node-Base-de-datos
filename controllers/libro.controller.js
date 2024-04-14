import {
    findBooks, createBook, findBook, updateBook, deleteBook
} from '../services/libro.services.js'
import {findAuthor} from "../services/autor.services.js"
import {findEditorial} from "../services/editorial.services.js"

export const addBook = async(req, res) => {
    try {
        //Verificar si existen autor y editorial
        const authorExists = await findAuthor(req.body.autor)
        const editorialExists = await findEditorial(req.body.editorial)
        if(!authorExists || !editorialExists){
            return res.status(400).json({message: "Autor or editorial not found"})
        }
        const book = await createBook(req.body)
        res.status(200).json({message: "book created successfully",book: book})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getBooks = async (req, res) => {
    try {
        let {categoria} = req.query;
        let query = {};
        //Verificar si se proporciono el parametro categoria
        if(categoria){
            query.categoria_literaria = categoria
        }
        //Consultar libros con el filtro de categoria literaria
        const books = await findBooks(query)
        res.status(200).send(books)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getBook = async (req, res) => {
    try {
        const id = req.params.bookID
        const book = await findBook(id)
        const bookPopulate = await book.populate([{path:'autor'},{path:'editorial'}])
        res.status(200).send(book ? bookPopulate : {message: "Book not found"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const updateBookById = async (req, res) => {
    try {
        const id = req.params.bookID
        const new_data = req.body
        const updatedBook = await updateBook(id, new_data)
        updatedBook.save()
        res.status(200).json({message: "Book updated successfully", book: updatedBook})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const deleteBookById = async (req, res) => {
    try {
        const id = req.params.bookID
        await deleteBook(id)
        res.status(200).json({message: "Book deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}