import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className='footer'>
      <div className='div-footer'>
        <p className='p-footer'>© {currentYear} FreeMarket. Todos los derechos reservados.</p>
        <p className='leandroCelle'>Desarrollado por <a href="https://www.linkedin.com/in/leandrocelle/" target="_blank" rel="noopener noreferrer">Leandro Celle</a></p>
      </div>
    </footer>
  );
};

export default Footer;
