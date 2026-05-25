import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Formulario from "./components/Formulario";
import ListaPeliculas from "./components/ListaPeliculas";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const obtenerPeliculas = async () => {
    try {
      setCargando(true);

      const respuesta = await axios.get(
        "http://localhost:3001/peliculas"
      );

      setPeliculas(respuesta.data);

      setError("");
    } catch (err) {
      setError("Error al obtener peliculas");
    }

    setCargando(false);
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const agregarPelicula = async (pelicula) => {
    await axios.post(
      "http://localhost:3001/peliculas",
      pelicula
    );

    obtenerPeliculas();
  };

  const eliminarPelicula = async (id) => {
    await axios.delete(
      `http://localhost:3001/peliculas/${id}`
    );

    obtenerPeliculas();
  };

  const editarPelicula = async (id, pelicula) => {
    await axios.put(
      `http://localhost:3001/peliculas/${id}`,
      pelicula
    );

    obtenerPeliculas();
  };

  const peliculasFiltradas = peliculas.filter((p) =>
    p.titulo
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>RuneFlix</h1>

      <input
        type="text"
        placeholder="Buscar pelicula..."
        className="buscador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <Formulario agregarPelicula={agregarPelicula} />

      {cargando && <p>Cargando...</p>}

      {error && <p>{error}</p>}

      <ListaPeliculas
        peliculas={peliculasFiltradas}
        eliminarPelicula={eliminarPelicula}
        editarPelicula={editarPelicula}
      />
    </div>
  );
}

export default App;