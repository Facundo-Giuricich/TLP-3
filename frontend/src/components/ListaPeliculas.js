import Pelicula from "./Pelicula";

function ListaPeliculas({
  peliculas,
  eliminarPelicula,
  editarPelicula,
}) {
  return (
    <div className="lista">
      {peliculas.map((pelicula) => (
        <Pelicula
          key={pelicula.id}
          pelicula={pelicula}
          eliminarPelicula={eliminarPelicula}
          editarPelicula={editarPelicula}
        />
      ))}
    </div>
  );
}

export default ListaPeliculas;