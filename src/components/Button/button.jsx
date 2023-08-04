import React, { useContext, useState, useEffect } from "react";

function Button() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isUsernameStored = localStorage.getItem('username') !== null;
    setLogin(isUsernameStored);

  }, []);


  const handleButtonClick = () => {
    if (login) {
      localStorage.removeItem('username');
      setLogin(false);

    } else {
      return
    }
  };

  return (
    <button className="inicioSesion" onClick={handleButtonClick}>
      <span className="inicioSesion">
        {login ? "Cerrar Sesión" : "Iniciar Sesión"}
      </span>
    </button>
  );
}

export default Button;








