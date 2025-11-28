export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Bachillerato",
      institucion: "SENA Pedregal",
      extra: "Media Técnica en Sistemas",
      periodo: "2022-2024"
    }
  ];

  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> - {edu.extra} - {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}