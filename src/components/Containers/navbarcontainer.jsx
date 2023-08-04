import React from 'react';
import Navbar from '../Navbar';
import Button from '../Button/button';
import { Link } from 'react-router-dom';

function NavbarContainer() {

  return (
    <>
      <div id="divnavbar">
        <Navbar />
        <Link className='linkButton' to='/iniciosesion'>
          <Button
            bgcolor="rgba(99, 96, 255, 0.793)"
            color="white"
            text='Iniciar Sesión'
            fontSize="1.5rem"
            fontFamily="Helvetica"
            margin="0rem"
            width="100%"
            padding="2rem"
            border="none"
          />
        </Link>
      </div>
    </>
  );
}

export default NavbarContainer;

