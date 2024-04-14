import { Schema, model } from "mongoose";

const EditorialSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  cuit: {
    type: String, // Cambiar a tipo String para poder aplicar expresiones regulares
    required: true,
    unique: true,
    match: [/^\d{2}-\d{8}-\d$/, "El CUIT debe tener el formato 00-12345678-9"]
  },
});

export const editorialModel = model("Editorial", EditorialSchema);
