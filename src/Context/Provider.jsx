import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export default function CartProvider({ defaultValues = [], children }) {
  const [products, setProducts] = useState([]);

  function addItemToCart(item) {
    const existingProductIndex = products.findIndex((product) => product.id === item.id);

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].cantidad += item.cantidad;
      setProducts(updatedProducts);
    } else {
      setProducts([...products, item]);
    }

    toast.success(`Producto agregado al carrito`);
  }

  function removeFromCart(productId, quantity) {
    const existingProductIndex = products.findIndex((product) => product.id === productId);

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].cantidad -= quantity;
      
      if (updatedProducts[existingProductIndex].cantidad <= 0) {
        updatedProducts.splice(existingProductIndex, 1);
      }

      setProducts(updatedProducts);
    }
  }

  return (
    <CartContext.Provider
      value={{
        name: 'CartContext',
        addItemToCart,
        removeFromCart,
        quantity: products.reduce((total, product) => total + product.cantidad, 0),
        products,
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




  

