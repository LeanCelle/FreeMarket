import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ defaultValues = [], children }) {
    const [products, setProducts] = useState([]);
  
    function addItemToCart(item) {
      const uniqueItemId = item.id + Date.now(); // Agregar un sufijo único al id
      const newItem = { ...item, id: uniqueItemId }; // Crear un nuevo objeto con el id único
      setProducts([...products, newItem]);
    }
  
    const removeFromCart = (productId) => {
      // Lógica para eliminar un producto del carrito por su ID
      setProducts(products.filter((item) => item.id !== productId));
    };
  
    return (
      <CartContext.Provider
        value={{
          name: 'CartContext',
          addItemToCart,
          quantity: products.length,
          products,
          removeFromCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  }
  

