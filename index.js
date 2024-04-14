import express from "express";
import mongoose from "mongoose";
import routerLibro from "./routes/libro.routes.js";
import routerAutor from "./routes/autor.routes.js";
import routerEditorial from "./routes/editorial.routes.js";

//Defino un puerto
const PORT = 3000;
//Ejecuto express
const app = express();

//Middlewares:
//Permite el soporte de json en las request
app.use(express.json());

//DB Connection:
mongoose
  .connect(
    "mongodb+srv://joaquin9918:Joaquin9918@libreria-node.icm1evd.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

//Port setting
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

//Routes
app.use("/api/books", routerLibro);
app.use("/api/authors", routerAutor);
app.use("/api/editorials", routerEditorial);
