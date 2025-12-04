import React, { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    const valor = input.trim();
    if (!valor) return; // no permitir vacío
    agregarTecnologia(valor);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <label>
        Nueva tecnología:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej: TypeScript"
          style={{ marginLeft: "0.5rem" }}
        />
      </label>
      <button type="submit" style={{ marginLeft: "0.5rem" }}>Agregar</button>
    </form>
  );
}