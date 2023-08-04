import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/main.css';
import NavbarContainer from './components/Containers/navbarcontainer';
import Carrito from './components/Cart/cart';
import Search from './components/Search/search';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import Inicio from './pages/Inicio';
import Footer from './components/Footer/footer';
import Categories from './pages/Categories';
import CartProvider from './Context/Provider';
import InicioSesion from './pages/InicioSesion';
import Terms from './pages/Terms';

function App() {

  return (
    <>
    <CartProvider>
    <div id="layout">
      <BrowserRouter>
      <NavbarContainer/>
    <div className="bodyContainer">
    <Carrito/>
      <Search/>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/category/:id" element={<Categories/>} />
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
        <Route path="/iniciosesion" element={<InicioSesion/>} />
        <Route path="/terminos-y-condiciones" element={<Terms/>} />
        
      </Routes>
      <Footer/>
    </div>
      </BrowserRouter>
    </div>
    </CartProvider>
    </>
  )
}

export default App