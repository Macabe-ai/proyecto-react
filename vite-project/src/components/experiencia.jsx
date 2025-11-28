export default function Experiencia({ experiencias }) {
  return (
    <section className="cv-section">
      <h3>Experiencia</h3>
      <ul>
        {experiencias.map(({ id, cargo, empresa, periodo, descripcion }) => (
          <li key={id}>
            <strong>{cargo}</strong> — {empresa} ({periodo})
            <p>{descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}