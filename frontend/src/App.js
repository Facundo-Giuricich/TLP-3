import {
  useContext,
  useState,
  useMemo,
} from "react";

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

  const peliculasFiltradas = useMemo(() => {
    return peliculas.filter((p) =>
      p.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
  }, [peliculas, busqueda]);

  return (
    <div className="container">
      <h1>RuneFlix</h1>

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