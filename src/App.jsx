import { useState } from 'react'
import Navbar from './componentes/Navbar'
import Search from './componentes/Search/search';
import Carrito from './componentes/Carrito/carrito';
import Productos from './componentes/ItemListContainer/listcontainer';
import './sass/main.css';


function App() {

  return (
    <>
    <section className='sectionAll'>
      <div className='navbar'>
      <Navbar/>
      </div>
      <div className='body'>
        <Carrito/>
        <Search/>
        <Productos/>
      </div>
      <div className='other'>
        <p></p>
      </div>
    </section>
    </>
  )
}

export default App
