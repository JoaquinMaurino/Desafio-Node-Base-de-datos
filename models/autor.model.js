import { Schema, model } from "mongoose";


//Definimos el esquema de mongoose para Autor, el dni debe cumplir con el formato especificado, todos los atributos son requeridos.
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
    type: String, // tipo de dato => String para poder aplicar expresiones regulares y validar su formato
    required: true,
    unique: true,
    match: [/^\d{8}$/, "El DNI debe tener 8 números sin guiones ni espacios"]
  },
  nacionalidad: {
    type: String,
    required: true,
  },
});

export const autorModel = model("Autor", AutorSchema);
