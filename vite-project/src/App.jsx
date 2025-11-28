import CabeceraCV from "./components/cabeceraCV.jsx";
import Perfil from "./components/perfil.jsx";
import Educacion from "./components/educacion.jsx";
import Experiencia from "./components/experiencia.jsx";
import "./App.css";

function App() {
  return (
    <div className="cv-container">
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
    </div>
  );
}

export default App;
