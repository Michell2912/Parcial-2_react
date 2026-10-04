import { useState } from "react";
import "./index.css";

function App() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularAgua() {

    if (peso <= 0 || altura <= 0 || edad <= 0) {
      setResultado("Ingresa todos los datos correctamente.");
      return;
    }

    let mlPorKg;

    if (edad < 18) {
      mlPorKg = 40;
    } else {
      mlPorKg = 35;
    }

    const agua = peso * mlPorKg;
    const litros = agua / 1000;

    setResultado(
      ` Debes tomar aproximadamente ${litros.toFixed(2)} litros de agua al día (${agua.toFixed(0)} ml).`
    );
  }

  return (
    <div className="contenedor">

      <h1>Calculadora de Agua</h1>

      <label>Peso (kg):</label>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Ejemplo: 70"
      />

      <label>Altura (cm):</label>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ejemplo: 170"
      />

      <label>Edad:</label>
      <input
        type="number"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder="Ejemplo: 20"
      />

      <button onClick={calcularAgua}>
        Calcular agua
      </button>

      {resultado && (
        <div className="resultado">
          {resultado}
        </div>
      )}

    </div>
  );
}

export default App;
