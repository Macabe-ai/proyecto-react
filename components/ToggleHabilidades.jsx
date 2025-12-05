export default function ToggleHabilidades({ visible, setVisible }) {
  return (
    <button 
      onClick={() => setVisible(!visible)} 
      style={{
        padding: "0.6rem 1rem",
        margin: "1rem 0",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        background: "#4b79a1",
        color: "white",
        fontWeight: "bold"
      }}
    >
      {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
    </button>
  );
}