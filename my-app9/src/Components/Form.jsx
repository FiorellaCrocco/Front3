import { useState } from "react";

function Form(props) {

    const [numero, setNumero] = useState("")
    const [numeroForm, setNumeroForm] = useState("")
    const [nombre, setNombre] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setNumeroForm(numero)
        setNombre(nombre)  
        
        props.onSubmit({ nombre, numero })

    } 


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Ingrese su nombre:</h3>
                    <input type="text" onChange={e => setNombre(e.target.value)}></input>
                </label>
                <label>
                    <h3>Ingrese su numero favorito:</h3>
                    <input type="number" onChange={e => setNumero(e.target.value)}></input>
                </label>
                <br/>
                <button type="submit">Enviar</button>
            </form>
            <p>Tu numero favorito es: {numeroForm}</p>
            {numeroForm < 0 ? <p>El numero debe ser mayor a cero</p> : undefined}
            {nombre.length < 1 ? <p>El nombre no debe estar vacio</p> : undefined}  
        </>
    )
}

export default Form;