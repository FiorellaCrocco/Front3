import products from "D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/fakeApi/products.json"
import accounts from "D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/fakeApi/accounts.json"
import users from "D:/Datos/Escritorio/DH/Front3/EXTRA/F3-classes-vite/src/fakeApi/users.json"
import ProductCard from "./Components/ProductCard";

function App() {


  function handleAddToCart(id) {
    console.log(`Agregado al carrito el producto con id ${id}`)
  }

  return (
    <div>
      <div className='flex height-limited'>
        
        {products.map((p) => (
          <ProductCard
          key={p.id}
          product={p}
          onAddToCart={handleAddToCart}
        />
        ))}
      </div>
      <div className='flex height-limited'>
        {accounts.map((a) => (
          <div className='card' key={a.account}>
            <a
            target='_blank'
            rel='noreferrer'
            href={`https://twitter.com/${a.account}`}
            >{a.userName}</a>
          </div>
        ))}
      </div>
      <div className='flex height-limited'>
        {users.map((u) => (
          <div className='card' key={u.email}>
            <h2>{u.apodo}</h2>
            <ul>
              {u.mascotas.map((pet) => (
                <li key={pet.nombre}>
                  {pet.nombre} ({pet.edad}) : {pet.color}
                </li>  
              ))}              
            </ul>
           </div>
        ))}
      </div>
    </div>
  );
}

export default App;
