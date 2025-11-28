export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo: "Bachillerato",
      institucion: "SENA Pedregal",
      extra: "Media Técnica en Sistemas",
      periodo: "2022-2024"
    },
    {
      id: 2,
      titulo: "Tecnología en Análisis y Desarrollo de Software",
      institucion: "SENA",
      extra: "Formación Tecnológica",
      periodo: "2024 - En curso"
    },
    {
      id: 3,
      titulo: "Taller de Fundamentos de Programación",
      institucion: "SENA",
      extra: "Introducción a lógica y algoritmos",
      periodo: "2023"
    },
    {
      id: 4,
      titulo: "Taller de Desarrollo Web Básico",
      institucion: "SENA Virtual",
      extra: "HTML, CSS y primeros pasos con JavaScript",
      periodo: "2023"
    }
  ];

  return (
    <section className="cv-section">
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong> — {edu.extra} — {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}