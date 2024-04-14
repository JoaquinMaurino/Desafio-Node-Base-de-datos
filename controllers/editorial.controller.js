import {
  findEditorials,
  createEditorial,
  findEditorial,
  updateEditorial,
  deleteEditorial,
} from "../services/editorial.services.js";

//Crea una nueva editorial tomando el objeto que enviamos por el body
export const addEditorial = async (req, res) => {
  try {
    const editorial = await createEditorial(req.body);
    res.status(200).send(editorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Busca y retorna todas las editoriales
export const getEditorials = async (req, res) => {
  try {
    const editorials = await findEditorials();
    res.status(200).send(editorials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Busca y retorna una editorial buscando por su ID
export const getEditorial = async (req, res) => {
  try {
    const id = req.params.editorialID;
    const editorial = await findEditorial(id);
    res.status(200).send(editorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Busca una editorial por su ID y actualiza los campos que pasemos por body
export const updatedEditorialById = async (req, res) => {
  try {
    const id = req.params.editorialID;
    const new_data = req.body;
    const editorial = await updateEditorial(id, new_data);
    res.status(200).send(editorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Busca y elimina una editorial por su id
export const deleteEditorialById = async (req, res) => {
  try {
    const id = req.params.editorialID;
    const editorial = await deleteEditorial(id);
    res.status(200).send(editorial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
