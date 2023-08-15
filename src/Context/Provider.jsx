import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GeneralContext = createContext();

export default function GeneralProvider({ defaultValues = [], children }) {

  // Agregar al carrito

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

  // Iniciar sesión

  const handleSubmit = (email, password) => {
    if (isValidEmail(email) && isValidPassword(password)) {
      window.location.href = '/';
      
    } else {
      setError(true);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Datos del usuario

  const [formData, setFormData] = useState({ nombre: '', apellido: '', calle: '', numero: '', piso: '', departamento: '', codigoPostal: '', mail: '', confirmarMail: '', numeroTarjeta: '', fechaVencimiento: new Date(), cvv: '', nombreTitular: '' });

  return (
    <GeneralContext.Provider
      value={{
        name: 'GeneralContext',
        addItemToCart,
        removeFromCart,
        quantity: products.reduce((total, product) => total + product.cantidad, 0),
        products,
        handleSubmit,
        isValidEmail,
        isValidPassword,
        setEmail,
        setPassword,
        email,
        password,
        error,
        formData,
        setFormData,
        nombre: formData.nombre,
        apellido: formData.apellido,
        calle: formData.calle,
        numero: formData.numero,
        piso: formData.piso,
        departamento: formData.departamento,
        codigoPostal: formData.codigoPostal,
        mail: formData.mail,
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
    </GeneralContext.Provider>
  );
}






  

