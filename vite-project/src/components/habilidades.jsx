// src/components/Habilidades.jsx
import React from "react";

export default function Habilidades({ habilidades }) {
  if (!habilidades || habilidades.length === 0) {
    return <p>Resiliencia, trabajo en equipo, responsable,detonador.</p>;
    
  }

  return (
    <section className="cv-section">
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}