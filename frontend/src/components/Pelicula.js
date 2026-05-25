import { useState } from "react";

function Pelicula({
  pelicula,
  eliminarPelicula,
  editarPelicula,
}) {
  const [editando, setEditando] = useState(false);

  const [titulo, setTitulo] = useState(
    pelicula.titulo
  );

  const [genero, setGenero] = useState(
    pelicula.genero
  );

  const [imagen, setImagen] = useState(
    pelicula.imagen
  );

  const guardarCambios = () => {
    editarPelicula(pelicula.id, {
      titulo,
      genero,
      imagen,
    });

    setEditando(false);
  };

  return (
    <div className="card">
      <img
        src={imagen}
        alt={titulo}
      />

      {editando ? (
        <>
          <input
            value={titulo}
            onChange={(e) =>
              setTitulo(e.target.value)
            }
          />

          <input
            value={genero}
            onChange={(e) =>
              setGenero(e.target.value)
            }
          />

          <input
            value={imagen}
            onChange={(e) =>
              setImagen(e.target.value)
            }
          />

          <button onClick={guardarCambios}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <h2>{titulo}</h2>

          <p>{genero}</p>

          <button
            onClick={() =>
              setEditando(true)
            }
          >
            Editar
          </button>
        </>
      )}

      <button
        onClick={() =>
          eliminarPelicula(pelicula.id)
        }
      >
        Eliminar
      </button>
    </div>
  );
}

export default Pelicula;