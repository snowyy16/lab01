import { useState } from 'react'
import "./BT3.css"

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(null);
  
    const handleCalculate = () => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      if (isNaN(n1) || isNaN(n2)) {
        setResult("Invalid input");
        return;
      }
      switch (operation) {
        case "+":
          setResult(n1 + n2);
          break;
        case "-":
          setResult(n1 - n2);
          break;
        case "*":
          setResult(n1 * n2);
          break;
        case "/":
          setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
          break;
        default:
          setResult("Invalid operation");
      }
    };
  
    return (
      <div className="container">
        <h2>Calculator</h2>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2"
        />
  
        <div className="operations">
          {["+", "-", "*", "/"].map((op) => (
            <label key={op}>
              <input
                type="radio"
                value={op}
                checked={operation === op}
                onChange={() => setOperation(op)}
              />
              {op}
            </label>
          ))}
        </div>
  
        <button onClick={handleCalculate}>Calculate</button>
        <h3>Result: {result}</h3>
      </div>
    );
  }
  
  export default App;