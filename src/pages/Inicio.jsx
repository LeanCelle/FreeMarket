import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { getProducts } from '../mock/data';
import { Link } from 'react-router-dom';

function Inicio() {
  const [inicioProducts, setInicioProducts] = useState([]);
  const [ofertaProducts, setOfertaProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      const filteredProductsInicio = res.filter((product) => product.section === "Inicio");
      const filteredProductsOferta = res.filter((product) => product.section === "Oferta");

      setInicioProducts(filteredProductsInicio);
      setOfertaProducts(filteredProductsOferta);
    });
  }, []);

  return (
    <>
      <Carousel>
        <Carousel.Item interval={4000}>
          <Link to='/category/Tecnologia'><img className='banner' src="https://i.postimg.cc/4xbgLG89/est-a-un-clic-1.png" alt="" /></Link>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <Link to='/category/Deportes y Fitness'><img className='banner' src="https://i.postimg.cc/ydmK5Sys/est-a-un-clic-3.png" alt="" /></Link>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <Link to='/category/Inmuebles'><img className='banner' src="https://i.postimg.cc/nLgQ3qSr/est-a-un-clic.png" alt="" /></Link>
        </Carousel.Item>
      </Carousel>

      <div className='formaDePago'>
        <div className="credito">
          <img className='tarjeta' src="https://i.postimg.cc/c4qx4gXC/tarjeta-de-credito.png" alt="" />
          <h5 className="tarjeta">Tarjeta de crédito</h5>
        </div>
        <div className="debito">
          <img className='tarjeta' src="https://i.postimg.cc/1ty1kwHV/debito.png" alt="" />
          <h5 className="tarjeta">Tarjeta de débito</h5>
        </div>
        <div className="cuotas">
          <img className='tarjeta' src="./public/cuotas.svg" alt="" />
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



// <img className='banner' src="https://i.postimg.cc/kM8KD9MM/samsung-banner.webp" alt="" />

// <img className='banner' src="https://i.postimg.cc/SsZ9bNmk/aumenta-banner.webp" alt="" />

// <img className='banner' src="https://i.postimg.cc/fL6dBWZL/inmuebles-banner.webp" alt="" />
