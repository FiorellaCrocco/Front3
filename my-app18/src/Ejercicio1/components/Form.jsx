import { useState } from 'react'

function Form (){

    const [yearOfBirth, setYearOfBirth] = useState(localStorage.getItem('year') || '')

    function handleYearOfBirthChange(event){
        setYearOfBirth(event.target.value)
        localStorage.setItem('year', event.target.value)
    }

    return(
        <div>
            <p>Ingrese su año de nacimiento:</p>
            <input placeholder="Ingrese su año de nacimiento" type="number" value={yearOfBirth} onChange={handleYearOfBirthChange}/>
            <hr/>
        </div>
    )
}

export default Form;