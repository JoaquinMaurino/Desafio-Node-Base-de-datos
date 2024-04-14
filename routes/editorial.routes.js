import { Router } from "express";
import {
  getEditorials,
  addEditorial,
  getEditorial,
  updatedEditorialById,
  deleteEditorialById,
} from "../controllers/editorial.controller.js";

const routerEditorial = Router();

routerEditorial.get("/", getEditorials);
routerEditorial.get("/:editorialID", getEditorial);
routerEditorial.post("/", addEditorial);
routerEditorial.put("/:editorialID", updatedEditorialById);
routerEditorial.delete("/:editorialID", deleteEditorialById);

export default routerEditorial;
