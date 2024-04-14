import { Router } from "express";
import {
  addAuthor,
  getAuthors,
  getAuthor,
  updateAuthorById,
  deleteAuthorById,
} from "../controllers/autor.controller.js";

const routerAutor = Router();

routerAutor.get("/", getAuthors);
routerAutor.get("/:authorID", getAuthor);
routerAutor.post("/", addAuthor);
routerAutor.put("/:authorID", updateAuthorById);
routerAutor.delete("/:authorID", deleteAuthorById);

export default routerAutor;
