export default function Perfil() {
  const resumen = 
    "Aprendiz de Análisis y Desarrollo de Software con conocimientos en desarrollo web. Me caracterizo por aprender rápido, trabajar en equipo y mantener una actitud proactiva mientras fortalezco mis habilidades técnicas.";

  return (
    <section className="cv-section">
      <h3>Perfil Profesional</h3>
      <p>{resumen}</p>
    </section>
  );
}