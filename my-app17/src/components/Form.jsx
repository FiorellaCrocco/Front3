import { useState, useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'

function Form (){

    const [task, setTask] = useState('')
    const { addTask } = useContext(ListContext)

    function handlerSubmit(){
        addTask(task)
        setTask('');
    }

    return(
        <div>
            <p>Ingrese su tarea:</p>
            <input placeholder="Tarea.." type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick={handlerSubmit}>Add task</button>
        </div>
    )
}

export default Form;