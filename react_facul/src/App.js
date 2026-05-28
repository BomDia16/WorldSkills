import { useState } from 'react';
import './css/Calculadora.css'

function App() {

  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  // Adiciona números
  const handleNumber = (number) => {
    if (currentValue === "0") {
      setCurrentValue(number);
    } else {
      setCurrentValue(currentValue + number);
    }
  };

  // Adiciona ponto decimal
  const handleDecimal = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  // Limpa tudo
  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
  };

  // Define operação
  const handleOperation = (operator) => {
    setPreviousValue(currentValue);
    setCurrentValue("0");
    setOperation(operator);
  };

  // Calcula resultado
  const handleEqual = () => {
    if (!previousValue || !operation) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    let result = 0;

    switch (operation) {
      case "+":
        result = prev + current;
        break;

      case "-":
        result = prev - current;
        break;

      case "*":
        result = prev * current;
        break;

      case "/":
        result = prev / current;
        break;

      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">{currentValue}</div>

      <div className="buttons">
        <button className="gray ac" onClick={ () => handleClear() }>AC</button>
        <button className="orange" onClick={ () => handleOperation("/") }>/</button>

        <button onClick={ () => handleNumber("7") }>7</button>
        <button onClick={ () => handleNumber("8") }>8</button>
        <button onClick={ () => handleNumber("9") }>9</button>
        <button className="orange" onClick={ () => handleOperation("*") }>*</button>

        <button onClick={ () => handleNumber("4") }>4</button>
        <button onClick={ () => handleNumber("5") }>5</button>
        <button onClick={ () => handleNumber("6") }>6</button>
        <button className="orange" onClick={ () => handleOperation("-") }>-</button>

        <button onClick={ () => handleNumber("1") }>1</button>
        <button onClick={ () => handleNumber("2") }>2</button>
        <button onClick={ () => handleNumber("3") }>3</button>
        <button className="orange" onClick={ () => handleOperation("+") }>+</button>

        <button className="zero" onClick={ () => handleNumber(0) }>0</button>
        <button onClick={ () => handleDecimal() }>.</button>
        <button className="orange" onClick={ () => handleEqual() }>=</button>
      </div>
    </div>
  );
}

export default App;
