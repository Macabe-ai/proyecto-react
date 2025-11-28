export default function Experiencia() {
  const experiencia = [
    { id: 1, puesto: "Media Técnica", empresa: "Sistemas", periodo: "2022-2024" },
    { id: 2, puesto: "Tecnología en Análisis y Desarrollo de Software", empresa: "SENA", periodo: "2020-2022" }
  ];

  // En caso de que la lista esté vacía
  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia</h3>
        <p>No se ha registrado experiencia por el momento.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}