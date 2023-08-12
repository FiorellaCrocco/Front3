import { useState } from 'react'
import Calculadora from "./Components/Calculadora"
import './App.css'

function App() {
  const [sum, setSum] = useState(0)

  function sumarTodas(valor){
    setSum(sum + valor)
  }

  return (
    <>
      <Calculadora monto={1} onEqual={sumarTodas}></Calculadora>
      <Calculadora monto={5} onEqual={sumarTodas}></Calculadora>
      <Calculadora monto={13} onEqual={sumarTodas}></Calculadora>
      <h2>Suma total: {sum}</h2>
    </>
  )
}

export default App
