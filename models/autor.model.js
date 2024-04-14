import { Schema, model } from "mongoose";

const AutorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  dni: {
    type: String, // Cambiar a tipo String para poder aplicar expresiones regulares
    required: true,
    match: [/^\d{8}$/, "El DNI debe tener 8 números sin guiones ni espacios"]
  },
  nacionalidad: {
    type: String,
    required: true,
  },
});

export const autorModel = model("Autor", AutorSchema);
