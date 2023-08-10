import React, { useContext } from 'react';
import { GeneralContext } from '../Context/Provider';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/firebase';

const FinalizarCompra = () => {
  const { formData, products, removeFromCart, nombre, apellido, calle, numero, codigoPostal, mail, departamento, piso} = useContext(GeneralContext);

  // Precio
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.cantidad,
    0
  );

  // Ultimos 4 numeros de la tarjeta
  const last4Digits = formData.numeroTarjeta.slice(-4);

  const handleFinalizarCompra = async () => {
    const MySwal = withReactContent(Swal);

    const date = new Date();

    const order = {
      name: nombre,
      lastname: apellido,
      street: calle,
      number: numero,
      floor: piso,
      depNumber: departamento,
      zipCode: codigoPostal,
      item: products,
      email: mail,
      total: totalPrice,
      date,
    };

    try {
      const ventas = collection(db, 'orders');
      await addDoc(ventas, order);

      setTimeout(() => {
        MySwal.fire({
          title: <strong>Compra finalizada!</strong>,
          html: <i>En breve le enviaremos su comprobante a {formData.mail}</i>,
          icon: 'success',
        });
      }, 2000);

      setTimeout (() => {
        products.forEach((product) => {
          removeFromCart(product.id, product.cantidad);
        });
      }, 6000);

      setTimeout (() => {
        window.location.href = '/';
      }, 6000);

    } catch (error) {
      MySwal.fire({
        title: 'Error al finalizar la compra',
        text: 'Hubo un problema al procesar la compra. Por favor, inténtelo nuevamente.',
        icon: 'error',
      });
    }
  };

  return (
    <>
        <div className="finalizar-compra-container">
      <h2 className="finalizar-compra-heading">Resumen de la Compra</h2>
      <div className="resumen-datos">
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Nombre:</span>
          <span className="dato-valor">{formData.nombre}</span>
          </div>
        </div>
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Apellido:</span>
          <span className="dato-valor">{formData.apellido}</span>
          </div>
        </div>
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Calle:</span>
          <span className="dato-valor">{formData.calle}</span>
          </div>
        </div>
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Número:</span>
          <span className="dato-valor">{formData.numero}</span>
          </div>
        </div>
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Código Postal:</span>
          <span className="dato-valor">{formData.codigoPostal}</span>
          </div>
        </div>
        <div className="info-dato">
        <div className="div-datos">
            <span className="dato-label">Número de Tarjeta:</span>
            <span className="dato-valor">**** **** **** {last4Digits}</span>
          </div>
        </div>
        <div className="info-dato">
          <div className="div-datos">
          <span className="dato-label">Nombre del Titular:</span>
          <span className="dato-valor">{formData.nombreTitular}</span>
          </div>
        </div>
      </div>

      <div className="productos-en-carrito">
        <h3>Mis productos</h3>
        <ul className='ulFinalizarCompra'>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} x {product.cantidad} - ${product.price * product.cantidad}
            </li>
          ))}
        </ul>
        <p className='pPagar'>Total a pagar: ${totalPrice}</p>
      </div>
      <button className="boton-finalizar" onClick={handleFinalizarCompra}>
        Finalizar Compra
      </button>
    </div>
    </>
    
  );
};

export default FinalizarCompra;

