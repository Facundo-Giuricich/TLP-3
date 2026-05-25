const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let peliculas = [
  {
    id: 1,
    titulo: "Harry Potter y la Piedra Filosofal",
    genero: "Fantasia",
    imagen:
      "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
  {
    id: 2,
    titulo: "Interestelar",
    genero: "Ciencia Ficcion",
    imagen:
      "https://m.media-amazon.com/images/I/91kFYg4fX3L.jpg",
  },
  {
    id: 3,
    titulo: "The Batman",
    genero: "Accion",
    imagen:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 4,
    titulo: "El Conjuro",
    genero: "Terror",
    imagen:
      "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  },
];

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.get("/peliculas/:id", (req, res) => {
  const pelicula = peliculas.find(
    (p) => p.id == req.params.id
  );

  if (!pelicula) {
    return res.status(404).json({
      mensaje: "Pelicula no encontrada",
    });
  }

  res.json(pelicula);
});

app.post("/peliculas", (req, res) => {
  const { titulo, genero, imagen } = req.body;

  if (!titulo || !genero || !imagen) {
    return res.status(400).json({
      mensaje: "Todos los campos son obligatorios",
    });
  }

  const nuevaPelicula = {
    id: peliculas.length + 1,
    titulo,
    genero,
    imagen,
  };

  peliculas.push(nuevaPelicula);

  res.status(201).json(nuevaPelicula);
});

app.put("/peliculas/:id", (req, res) => {
  const pelicula = peliculas.find(
    (p) => p.id == req.params.id
  );

  if (!pelicula) {
    return res.status(404).json({
      mensaje: "Pelicula no encontrada",
    });
  }

  pelicula.titulo = req.body.titulo;
  pelicula.genero = req.body.genero;
  pelicula.imagen = req.body.imagen;

  res.json(pelicula);
});

app.delete("/peliculas/:id", (req, res) => {
  peliculas = peliculas.filter(
    (p) => p.id != req.params.id
  );

  res.json({
    mensaje: "Pelicula eliminada",
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});