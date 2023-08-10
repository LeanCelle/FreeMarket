import React, { useState, useEffect } from "react";

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
    }
  };

  return (
    <div className="button" onClick={handleButtonClick}>
      <button>
        <span className="button">
          {login ? "CERRAR SESIÓN" : "INICIAR SESIÓN"}
        </span>
      </button>
    </div>
  );
}

export default Button;









