import React from 'react';

const Terms = () => {

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

  return (
    <div className="terms-container">
      <h2 className="terms-heading">Términos y Condiciones</h2>
      <p className="terms-intro">¡Bienvenido a FreeMarket! Estos términos y condiciones establecen las reglas y regulaciones para el uso de nuestro sitio web.</p>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">1. Aceptación de los Términos</h3>
        <p>Al acceder o utilizar nuestro sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no uses nuestro sitio web.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">2. Licencia de Uso</h3>
        <p>Se concede permiso para utilizar temporalmente nuestro sitio web para visualización personal y no comercial. Esto significa que puedes navegar por nuestros contenidos, ver productos y realizar compras.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">3. Política de Privacidad</h3>
        <p>El uso de nuestro sitio web también está regido por nuestra Política de Privacidad. Por favor, revisa nuestra Política de Privacidad para entender cómo recopilamos, utilizamos y protegemos tu información personal.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">4. Responsabilidad</h3>
        <p>No nos hacemos responsables por pérdidas, daños o inconvenientes causados por el uso de nuestro sitio web. Tú eres responsable de tu propia interacción y uso de la plataforma.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">5. Uso Apropiado</h3>
        <p>Está prohibido utilizar nuestro sitio web para difamar, acosar, publicar contenido ofensivo o ilegal, o infringir los derechos de otros. Nos reservamos el derecho de suspender cuentas que violen esta política.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">6. Propiedad Intelectual</h3>
        <p>Los contenidos y materiales en este sitio web, incluyendo textos, imágenes y logotipos, son propiedad de FreeMarket y están protegidos por las leyes de derechos de autor. No está permitido el uso no autorizado de estos materiales.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">7. Enlaces a Terceros</h3>
        <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No respaldamos ni somos responsables por el contenido o las políticas de privacidad de estos sitios.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">8. Modificaciones</h3>
        <p>Nos reservamos el derecho de modificar o reemplazar estos términos y condiciones en cualquier momento. Los cambios serán efectivos una vez publicados en esta página.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">9. Ley Aplicable</h3>
        <p>Estos términos y condiciones se rigen por las leyes del país en el que estamos registrados, y cualquier disputa legal se resolverá en los tribunales de dicha jurisdicción.</p>
      </div>
      
      <div className="terms-section">
        <h3 className="terms-section-heading">10. Contacto</h3>
        <p>Si tienes alguna pregunta sobre estos términos y condiciones, contáctanos en <a href="mailto:contacto@freemarket.com">contacto@freemarket.com</a>.</p>
      </div>
      
      <p className="terms-updated">Última actualización: {currentDay}/{currentMonth}/{currentYear}</p>
    </div>
  );
}

export default Terms;



