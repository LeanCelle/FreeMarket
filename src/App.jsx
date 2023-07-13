import { useState } from 'react'
import './sass/main.css';
import NavbarContainer from './componentes/Containers/navbarcontainer';
import Carrito from './componentes/Carrito/carrito';
import Search from './componentes/Search/search';
import ItemListContainer from './componentes/ItemListContainer/itemlistcontainer';

function App() {

  return (
    <>
    <div id='layout'>
    <NavbarContainer></NavbarContainer>
    <div className="bodyContainer">
    <Carrito/>
    <Search/>
    <ItemListContainer
        text="Bienvenido a Mis Productos!"
        bgColor="grey"
        color="white"
        fontSize="1.5rem"
        fontFamily="Helvetica"
        />
    </div>
    </div>
    </>
  )
}

export default App
