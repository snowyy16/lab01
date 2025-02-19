import { useState } from 'react'
import './BT2.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(0)

  function handleChangeA(e) {
    setA(e.target.value);
  }

  function handleChangeB(e) {
    setB(e.target.value);
  }

  function handleClick(e) {
    setResult(parseInt(a) + parseInt(b))
  }

  return (
    <div className="container">
      <input type="text" placeholder='Enter A' onChange={handleChangeA} />
      <br />
      <input type="text" placeholder='Enter B' onChange={handleChangeB} />
      <br />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span>{result}</span>
    </div>
  )
}

export default App
