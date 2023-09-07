import { useState } from 'react'
import data from 'D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/fakeApi/books.json'
import BookList from "./components/BooksList";

function App() {

  const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('bookFavs') || '[]'))

  const addToFavs = (book) => {
    let newFavs
    if (favs.some((fav) => fav.id === book.id)) {
      newFavs = favs.filter((fav) => fav.id !== book.id)
    } else {
      newFavs = [...favs, book]
    }
    setFavs(newFavs)
    localStorage.setItem('bookFavs', JSON.stringify(newFavs))
  }

  return (
    <div>
      <h2>Ejercicio 2</h2>
      <h3>Fav books</h3>
      {favs.length > 0 ? <BookList books={favs} /> : undefined}
      <br />
      <h3>All books</h3>
      <BookList books={data} onClick={addToFavs} />
    </div>
  );
}

export default App;
