import Navbar from '../Navbar';
import Button from '../Button/button';

function NavbarContainer() {

  return (

    <>
      <div id="divnavbar">
        <Navbar/>
        <Button
        bgcolor="rgba(99, 96, 255, 0.793)"
        color="white"
        text="Iniciar Sesión"
        fontSize="1.5rem"
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