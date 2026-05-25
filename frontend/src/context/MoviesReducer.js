const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "OBTENER_PELICULAS":
      return {
        peliculas: action.payload,
      };

    case "AGREGAR_PELICULA":
      return {
        peliculas: [
          ...state.peliculas,
          action.payload,
        ],
      };

    case "ELIMINAR_PELICULA":
      return {
        peliculas: state.peliculas.filter(
          (p) => p.id !== action.payload
        ),
      };

    case "EDITAR_PELICULA":
      return {
        peliculas: state.peliculas.map((p) =>
          p.id === action.payload.id
            ? action.payload
            : p
        ),
      };

    default:
      return state;
  }
};

export default MoviesReducer;