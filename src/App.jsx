import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactDOM, createRoot } from 'react';
import './sass/main.css';
import NavbarContainer from './components/Containers/navbarcontainer';
import Carrito from './components/Cart/cart';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import Inicio from './pages/Inicio';
import Footer from './components/Footer/footer';
import Categories from './pages/Categories';
import GeneralProvider from './Context/Provider';
import InicioSesion from './pages/InicioSesion';
import Terms from './pages/Terms';
import DatosUsuario from './pages/DatosUsuario';
import FinalizarCompra from './pages/FinalizarCompra';
import React, { useEffect } from 'react';
import { products } from './mock/data';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import SignUp from './pages/SignUp';

function App() {
  /*
  useEffect(()=> {
    const colectionProductos = collection(db, "products")
    products.map((item)=> addDoc(colectionProductos, item))
  }, [])
  */

  return (
    <>
    <GeneralProvider>
    <div id="layout">
      <BrowserRouter>
      <NavbarContainer/>
    <div className="bodyContainer">
    <Carrito/>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/category/:id" element={<Categories/>} />
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
        <Route path="/iniciosesion" element={<InicioSesion/>} />
        <Route path="/registrate" element={<SignUp/>} />
        <Route path="/terminos-y-condiciones" element={<Terms/>} />
        <Route path="/datos-usuario" element={<DatosUsuario/>} />
        <Route path="/finalizar-compra" element={<FinalizarCompra/>} />
        
      </Routes>
      <Footer/>
    </div>
      </BrowserRouter>
    </div>
    </GeneralProvider>
    </>
  )
}

export default App