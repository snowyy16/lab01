import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  function handleChange(e){
    setName(e.target.value);
  }
  function handleClick(e){
    setText(name)
    console.log(name)
  }

  return (
    <>
      <input type="text" placeholder='Enter name here' onChange={handleChange}/>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>{text}</span>
    </>
  )
}

export default App
