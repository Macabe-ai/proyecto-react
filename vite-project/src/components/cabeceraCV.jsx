export default function CabeceraCV() {
  return (
    <header className="cv-header">
      <img
        src="./public/img/perfil.jpg"
        alt="Foto de perfil"
        className="profile-pic"
      />

      <h1 className="cv-name">Miguel Ángel Castilla Bedoya - -</h1>
      <h2 className="cv-title">Analista y Desarrollador de Software</h2>

      <div className="cv-contact">
        <p><strong>Teléfono:</strong> 324 3122312</p>
        <p><strong>Correo:</strong> muzzta.castilla0624@gmail.com</p>
        <p><strong>Ciudad:</strong> Medellín, Colombia</p>
      </div>
    </header>
  );
}
