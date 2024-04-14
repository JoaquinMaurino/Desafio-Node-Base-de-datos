import { Schema, model } from "mongoose";
import moment from "moment";

const LibroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Autor",
      },
    ],
    required: true,
  },
  editorial: {
    type: Schema.Types.ObjectId,
    ref: "Editorial",
    required: true,
  },
  categoria_literaria: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  fecha_lanzamiento: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Validar que la fecha es válida y normalizarla a formato ISO 8601
        return moment(value, ["DD/MM/YYYY", "DD/MM/YY"], true).isValid();
      },
      message:
        "La fecha de lanzamiento debe tener el formato DD/MM/AAAA o DD/MM/AA",
    },
  },
  descripcion: {
    type: String,
    required: true,
  },
});

export const libroModel = model("Libro", LibroSchema);
