import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className='footer'>
      <div className='div-footer'>
        <p className='p-footer'>© {currentYear} FreeMarket. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
