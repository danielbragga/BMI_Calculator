import React, { useState } from "react";
import "./app.css";

function IMC() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (!height || !weight) {
      alert("Preencha os campos!");
    } else if (bmi < 18.5) {
      return "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Saudável";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Acima do peso";
    } else {
      return "Obeso";
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Calculadora BMI</h1>

        <label>
          <input
            placeholder="Insira sua altura (cm)"
            id="Height"
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder="Insira seu peso (kg)"
            id="Weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <button type="button" onClick={calculateBMI}>
          {" "}
          Calcular BMI{" "}
        </button>

        <div className="bmi-value">
          <h4>BMI: {bmiResult} </h4>
          <div id="bmi-output"></div>
        </div>
        <div className="status">
          <h4>Condição: {status} </h4>
          <div id="bmi-status"></div>
        </div>
      </div>
    </>
  );
}

export default IMC;
