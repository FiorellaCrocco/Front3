import { useState } from "react";
  let id = 0; 
function Pedido() {
  const [plato, setPlato] = useState("");
  const [pedidos, setPedidos] = useState([]);



  const handlerSubmit = (e) => {
    e.preventDefault();
    setPedidos([...pedidos, { id: id++, data: plato }]);
    setPlato("");
  };

  const handlerDelete = (platoId) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== platoId));
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label>
          <h3>Plato: </h3>
          <input
            value={plato}
            onChange={(e) => setPlato(e.target.value)}
          ></input>
          <button type="submit">Agregar al pedido</button>
        </label>
      </form>
      <div>
        <ul>
            {pedidos.map((p) => (
                <li key={p.id}>
                    {p.data}
                    <button onClick={() => handlerDelete(p.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Pedido;
