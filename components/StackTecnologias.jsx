import React from "react";

export default function StackTecnologias({ tecnologias }) {
  return (
    <section className="cv-section">
      <h3>Stack Tecnologías</h3>
      {(!tecnologias || tecnologias.length === 0) ? (
        <p>No hay tecnologías listadas.</p>
      ) : (
        <ul>
          {tecnologias.map((t, idx) => <li key={idx}>{t}</li>)}
        </ul>
      )}
    </section>
  );
}