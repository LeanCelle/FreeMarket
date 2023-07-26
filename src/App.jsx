import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sass/main.css';
import NavbarContainer from './components/Containers/navbarcontainer';
import Carrito from './components/Cart/cart';
import Search from './components/Search/search';
import Vehiculos from './pages/Vehiculos';
import Inmuebles from './pages/Inmuebles';
import Supermercado from './pages/Supermercado';
import Tecnologia from './pages/Tecnologia';
import DeportesyFitness from './pages/DeportesyFitness';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import Inicio from './pages/Inicio';
import Footer from './components/Footer/footer';

function App() {

  return (
    <>
    <div id="layout">
      <BrowserRouter>
      <NavbarContainer/>
    <div className="bodyContainer">
    <Carrito/>
      <Search/>
      <Routes>

        <Route path="/" element={<Inicio/>} />
        <Route path="/vehiculos" element={<Vehiculos/>} />
        <Route path="/inmuebles" element={<Inmuebles/>} />
        <Route path="/supermercado" element={<Supermercado/>} />
        <Route path="/tecnologia" element={<Tecnologia/>} />
        <Route path="/deportesyfitness" element={<DeportesyFitness/>} />
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />
        
      </Routes>
      <Footer/>
    </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App