import CabeceraCV from "./components/cabeceraCV.jsx";
import Educacion from "./components/educacion.jsx";
import Experiencia from "./components/experiencia.jsx";
import Perfil from "./components/perfil.jsx";

export default function App() {
  const datosUsuario = {
    nombre: "Miguel Ángel Castilla Bedoya",
    profesion: "Tecnólogo en Análisis y Desarrollo de Software"
  };

  const experiencias = [
    {
      id: 1,
      cargo: "Practicante de Desarrollo",
      empresa: "SENA",
      periodo: "2024",
      descripcion: "Apoyo en desarrollo básico de interfaces y pruebas de software."
    },
    {
      id: 2,
      cargo: "Proyecto Académico",
      empresa: "SENA",
      periodo: "2023",
      descripcion: "Desarrollo de aplicaciones web sencillas usando HTML, CSS y JavaScript."
    }
  ];

  return (
    <main>
      <CabeceraCV 
        nombre={datosUsuario.nombre}
        profesion={datosUsuario.profesion}
      />

      <Perfil />

      <Educacion />

      <Experiencia experiencias={experiencias} />
    </main>
  );
}