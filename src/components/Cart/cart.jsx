import { LiaShoppingCartSolid } from 'react-icons/lia';
import { useState } from 'react';
import { carrito } from '../../../mock/data';

function Carrito() {
  
  const [cartItems, setCartItems] = useState(carrito);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <nav className="navbar bg-body-tertiary navCarrito">
      <div className="container-fluid div-carrito">
        <button className="navbar-toggler button-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <LiaShoppingCartSolid className='carrito' />
          <span className="contadorCarrito">{cartItems.length}</span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Carrito</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {cartItems.map(({ id, name, price, cantidad }) => (
              <div key={id}>
                <h3>{name}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {cantidad}</p>
                <button className="btn btn-danger" onClick={() => removeFromCart(id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Carrito;




