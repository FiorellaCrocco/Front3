import { useState } from "react";
import Pedido from "./Components/Pedido";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Pedidos:</h2>
      <Pedido />
    </>
  );
}

export default App;
