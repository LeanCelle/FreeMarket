import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';

function Inicio() {
  const [inicioProducts, setInicioProducts] = useState([]);
  const [ofertaProducts, setOfertaProducts] = useState([]);
  const formaDePagoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredProductsInicio = productsData.filter(
        (product) => product.section === 'Inicio'
      );
      const filteredProductsOferta = productsData.filter(
        (product) => product.section === 'Oferta'
      );

      setInicioProducts(filteredProductsInicio);
      setOfertaProducts(filteredProductsOferta);
    };

    fetchData();
  }, []);

  const handleScroll = () => {
    if (formaDePagoRef.current) {
      formaDePagoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="frontInicio">
        <div className="h1Inicio">
        <h1>FreeMarket</h1>
        <img src="https://i.postimg.cc/tRkmMg84/12344375454-removebg-preview.png" alt="freemarket" />
        </div>

        <div className="enLinea">
        <h4>Tu destino para encontrar las mejores ofertas en línea.</h4>
        <h5>Explora una amplia variedad de productos, desde electrónica hasta moda y mucho más!</h5>
        </div>
        
        <div className="scrollArrow" onClick={handleScroll}>
          <span className="arrowIcon"></span>
        </div>
      </div>

      <div className='formaDePago' ref={formaDePagoRef}>
        <div className="credito">
          <img className='tarjeta' src="https://i.postimg.cc/c4qx4gXC/tarjeta-de-credito.png" alt="" />
          <h5 className="tarjeta">Tarjeta de crédito</h5>
        </div>
        <div className="debito">
          <img className='tarjeta' src="https://i.postimg.cc/1ty1kwHV/debito.png" alt="" />
          <h5 className="tarjeta">Tarjeta de débito</h5>
        </div>
        <div className="cuotas">
          <img className='tarjeta' src="./src/assets/cuotas.svg" alt="" />
          <h5 className="tarjeta">Cuotas sin tarjeta</h5>
        </div>
        <div className="efectivo">
          <img className='tarjeta' src="https://i.postimg.cc/02sXcPVr/efectivo.png" alt="" />
          <h5 className="tarjeta">Efectivo</h5>
        </div>
      </div>

      <hr className='hrInicio'/>

      <h3 className="productosDestacados">Destacados</h3>
      <div className='product-cards-container'>
        {inicioProducts.map((product) => (
          <div className='productosInicio' key={product.id}>
            <Link to={`/Producto/${product.id}`}><img className='imgProductosInicio' src={product.img} alt={product.name} /></Link>
            <h5 className='precioProductosInicio'>$ {product.price}</h5>
            <h5 className='h5ProductosInicio'>{product.name}</h5>
          </div>
        ))}
      </div>

      <h3 className="productosDestacados">Ofertas</h3>
      <div className='product-cards-container'>
        {ofertaProducts.map((product) => (
          <div className='productosInicio' key={product.id}>
            <Link to={`/Producto/${product.id}`}><img className='imgProductosInicio' src={product.img} alt={product.name} /></Link>
            <h5 className='precioProductosInicio'>$ {product.price}</h5>
            <h5 className='h5ProductosInicio'>{product.name}</h5>
          </div>
        ))}
      </div>


      <div className='appWeb'>
        <div className="proximamente">
          <p className="proximamente">¡Próximamente en Play Store y Apple Store!</p>
          <p className="store">¡No te lo pierdas! 🚀</p>
          <div className="store">
            <img className='store' src="https://i.postimg.cc/WbxwTPjB/download.jpg" alt="" />
          </div>
        </div>
        <div className="computadora">
        <img className='computadora' src="https://i.postimg.cc/25fCh3FC/Dise-o-sin-t-tulo-2.png" alt="" />
        </div>
      </div>

    </>
  );
}

export default Inicio;