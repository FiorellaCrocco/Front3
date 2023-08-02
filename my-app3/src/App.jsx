import Header from './Components/Header'
import movies from "D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/fakeApi/movies.json"

function App() {
  function validarEdad(edad){
    console.log(`Debes tener ${edad} años`);
  }
  return (
    <div>
      <Header />
      <h1>{movies[0].nombre}</h1>
      <p>{movies[0].genero}</p>
      <button onClick={() => validarEdad(movies[0].edad_minima)}>Ver pelicula</button>
    </div>
  )
}

export default App
