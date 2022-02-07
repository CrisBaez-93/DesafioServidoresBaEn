const express = require("express");
const Contenedor = require("./contenedor.js");

const app = express();
const port = process.env.PORT || 8080;
const contenedor = new Contenedor();

app.get("/", (req, res) => {
  res.send({ mensaje: "Desafio Cristian Baez" });
});

app.get("/productos", async (req, res) => {
  res.send(await contenedor.getAll());
});

app.get("/productoRandom", async (req, res) => {
  res.send(await contenedor.getRandom());
});

app.listen(port, () => {
  console.log(`Servidor creado en el puerto ${port}`);
});
