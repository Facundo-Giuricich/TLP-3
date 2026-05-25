import { useContext, useState } from "react";

import "./App.css";

import Formulario from "./components/Formulario";
import ListaPeliculas from "./components/ListaPeliculas";

import { MoviesContext } from "./context/MoviesContext";

function App() {
  const {
    peliculas,
    eliminarPelicula,
    editarPelicula,
    agregarPelicula,
  } = useContext(MoviesContext);

  const [busqueda, setBusqueda] =
    useState("");

  const peliculasFiltradas =
    peliculas.filter((p) =>
      p.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );

  return (
    <div className="container">
      <h1>TP React</h1>

      <input
        type="text"
        placeholder="Buscar pelicula..."
        className="buscador"
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
      />

      <Formulario
        agregarPelicula={
          agregarPelicula
        }
      />

      <ListaPeliculas
        peliculas={peliculasFiltradas}
        eliminarPelicula={
          eliminarPelicula
        }
        editarPelicula={
          editarPelicula
        }
      />
    </div>
  );
}

export default App;