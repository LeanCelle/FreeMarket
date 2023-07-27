import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast styles

export const CartContext = createContext();

export default function CartProvider({ defaultValues = [], children }) {
  const [products, setProducts] = useState([]);

  function addItemToCart(item) {
    const uniqueItemId = item.id + Date.now();
    const newItem = { ...item, id: uniqueItemId };
    setProducts([...products, newItem]);

    // Show the toast message when the item is added to the cart
    toast.success(`Producto agregado al carrito`);
  }

  const removeFromCart = (productId) => {
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
      <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
/>
    </CartContext.Provider>
  );
}

  

