import { useState } from "react";

function Formulario({ agregarPelicula }) {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [imagen, setImagen] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!titulo || !genero || !imagen) {
      alert("Completa todos los campos");
      return;
    }

    agregarPelicula({
      titulo,
      genero,
      imagen,
    });

    setTitulo("");
    setGenero("");
    setImagen("");
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario">
      <input
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Genero"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />

      <input
        type="text"
        placeholder="URL imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}

export default Formulario;