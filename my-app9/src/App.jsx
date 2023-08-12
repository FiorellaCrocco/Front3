import { useState } from 'react'
import Form from "./Components/Form"

let autoId = 0;

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values) => {
    setUsers([...users, { id: autoId++, data: values }]);
  };

  return (
    <div>
      <h2>Formulario:</h2>
      <Form onSubmit={handleSubmit} />
      <h2>Valores ingresados:</h2>
      <ul>
        {users.map((user) => (
          <li className='card' key={user.id}>
            <p>Nombre: {user.data.nombre}</p>
            <p>Número favorito: {user.data.numero}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
