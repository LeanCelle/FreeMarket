import { useState } from 'react';
import Navbar from '../Navbar';
import Button from '../button/Button';

function NavbarContainer() {

  const [bgColor, setBgColor] = useState("black");

  function dark() {
    if (bgColor === "black") {
      return "white";
    } else {
      return "black";
    }
  }
  
  

  return (

    <>
      <div id="divnavbar">
        <Navbar/>
        <Button 
        onClick={() => setBgColor(dark())}
        bgcolor={bgColor}
        color={dark()}
        text="Cambio color"
        padding="2rem"
        />
        <Button
        bgcolor="black"
        color="white"
        text="Iniciar Sesión"
        fontSize="2rem"
        fontFamily="Helvetica"
        margin="0rem"
        width="100%"
        padding="2rem"
        border="none"
/>

      </div>
    </>
  );
}

export default NavbarContainer;