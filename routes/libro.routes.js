import { Router } from "express";
import {
  addBook,
  getBooks,
  getBook,
  updateBookById,
  deleteBookById,
} from "../controllers/libro.controller.js";

const routerLibro = Router();

/* La ruta general de libros soporta el filtrado por categoria mediante el formato de url:
http://localhost:3000/api/books?categoria={categoria} */
routerLibro.get("/", getBooks);
routerLibro.get("/:bookID", getBook);
routerLibro.post("/", addBook);
routerLibro.put("/:bookID", updateBookById);
routerLibro.delete("/:bookID", deleteBookById);

export default routerLibro;
