/* eslint-disable react/prop-types */
import { useState } from 'react'

function Calculadora({monto, onEqual}){
    const [contador, setContador] = useState(0)

    function sumar(){
      setContador(contador + monto)
    }

    function restar(){
        setContador(contador - monto)
    }

    function reset(){
        setContador(0)
    }

    function resultado(){
        console.log('El valor actual del calculadora es ' + contador)
        onEqual(contador)
    }

    console.log(contador);

    return (
        <>
            <h2>Calculadora: {contador}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={resultado}>resultado</button>
        </>
    )
}

export default Calculadora;