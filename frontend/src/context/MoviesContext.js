import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

import axios from "axios";

import MoviesReducer from "./MoviesReducer";

export const MoviesContext =
  createContext();

function MoviesProvider({ children }) {
  const initialState = {
    peliculas: [],
  };

  const [state, dispatch] = useReducer(
    MoviesReducer,
    initialState
  );

  const obtenerPeliculas = async () => {
    const res = await axios.get(
      "http://localhost:3001/peliculas"
    );

    dispatch({
      type: "OBTENER_PELICULAS",
      payload: res.data,
    });
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const agregarPelicula = useCallback(
    async (pelicula) => {
      const res = await axios.post(
        "http://localhost:3001/peliculas",
        pelicula
      );

      dispatch({
        type: "AGREGAR_PELICULA",
        payload: res.data,
      });
    },
    []
  );

  const eliminarPelicula = useCallback(
    async (id) => {
      await axios.delete(
        `http://localhost:3001/peliculas/${id}`
      );

      dispatch({
        type: "ELIMINAR_PELICULA",
        payload: id,
      });
    },
    []
  );

  const editarPelicula = useCallback(
    async (id, pelicula) => {
      const res = await axios.put(
        `http://localhost:3001/peliculas/${id}`,
        pelicula
      );

      dispatch({
        type: "EDITAR_PELICULA",
        payload: res.data,
      });
    },
    []
  );

  return (
    <MoviesContext.Provider
      value={{
        peliculas: state.peliculas,
        agregarPelicula,
        eliminarPelicula,
        editarPelicula,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesProvider;