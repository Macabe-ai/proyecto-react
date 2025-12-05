import { useState } from "react";

import CabeceraCV from "./components/CabeceraCV.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Perfil from "./components/Perfil.jsx";

import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
import Habilidades from "./components/habilidades.jsx";

const tecnologiasIniciales = ["HTML", "CSS", "JavaScript", "React"];
const habilidadesIniciales = ["Trabajo en equipo", "Comunicación", "Aprendizaje rápido"];

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
      descripcion: "Apoyo en desarrollo básico de interfaces y pruebas."
    }
  ];

  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const agregarTecnologia = (nuevaTec) => {
    if (!nuevaTec.trim()) return;
    if (tecnologias.includes(nuevaTec)) return;
    setTecnologias((prev) => [...prev, nuevaTec]);
  };

  return (
    <main className="cv-container">
      <CabeceraCV nombre={datosUsuario.nombre} profesion={datosUsuario.profesion} />

      <Perfil />
      <Educacion />
      <Experiencia experiencias={experiencias} />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
      <StackTecnologias tecnologias={tecnologias} />

      <ToggleHabilidades visible={mostrarHabilidades} setVisible={setMostrarHabilidades} />

      {mostrarHabilidades && <Habilidades habilidades={habilidadesIniciales} />}
    </main>
  );
}