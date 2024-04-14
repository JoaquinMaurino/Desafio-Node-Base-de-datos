import {
    findAuthors, createAuthor, findAuthor, updateAuthor, deleteAuthor
} from "../services/autor.services.js"

//Crea y añade nuevo autor a la DB collection
export const addAuthor = async(req, res) => {
    try {
        const author = await createAuthor(req.body)
        res.status(200).send(author)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Busca y retorna todos los autores de la collection
export const getAuthors = async (req, res) => {
    try {
        const authors = await findAuthors()
        res.status(200).send(authors)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Busca y retorna un autor buscando por su ID
export const getAuthor = async (req, res) => {
    try {
        const id = req.params.authorID
        const author = await findAuthor(id)
        res.status(200).send(author)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Busca un autor por su ID y actualiza los campos que pasemos por body
export const updateAuthorById = async (req, res) => {
    try {
        const id = req.params.authorID;
        const new_data = req.body;
        const author = await updateAuthor(id, new_data)
        res.status(200).send(author)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Busca y elimina un autor por su id
export const deleteAuthorById = async (req, res) => {
    try {
        const id = req.params.authorID
        const author = await deleteAuthor(id)
        res.status(200).send(author)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

