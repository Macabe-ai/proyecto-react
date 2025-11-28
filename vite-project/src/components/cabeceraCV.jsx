export default function CabeceraCV({ nombre, profesion }) {
  return (
    <header className="cv-header">
      <h1>{nombre}</h1>
      <h2>{profesion}</h2>
    </header>
  );
}
