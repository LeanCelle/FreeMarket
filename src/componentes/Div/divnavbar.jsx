import Navbar from '../Navbar';
import Button from '../button/Button';

function DivNavbar() {

  return (
    <>
      <div id="divnavbar">
        <Navbar />
        <Button
          bgcolor= "black"
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

export default DivNavbar;