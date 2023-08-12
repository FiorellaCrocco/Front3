function ProductCard({product, onAddToCart}){

    function handleClick() {
        onAddToCart(product.id);
      }

    return (
        <div key={product.id} className="card">
            <h2>ID: {product.nombre}</h2>
            <p>Precio:{product.precio}</p>
            <p>Descripcion:{product.descripcion}</p>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
    )
}

export default ProductCard