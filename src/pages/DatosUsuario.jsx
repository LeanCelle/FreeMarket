import React, { useContext, useState } from 'react';
import { GeneralContext } from '../Context/Provider';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css';

const DatosUsuario = () => {

    const { formData, setFormData, isValidEmail } = useContext(GeneralContext);
    const { mail, confirmarMail } = formData;

    const [emailMismatch, setEmailMismatch] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFechaVencimientoChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            fechaVencimiento: date,
        }));
    };

    const handleCVVChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length <= 3) {
            setFormData((prevData) => ({
                ...prevData,
                cvv: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(mail) || mail !== confirmarMail) {
            setEmailMismatch(true);
        } else {
            setEmailMismatch(false);
        }
    };

    const handleNumeroTarjetaChange = (e) => {
    const value = e.target.value.replace(/\s+/g, '');
    if (/^\d{0,16}$/.test(value)) {
      const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
      setFormData((prevData) => ({
        ...prevData,
        numeroTarjeta: formattedValue,
      }));
    }
  };

  return (
    <div className="formulario">
      <h2>Datos del Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre*</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="apellido">Apellido*</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="calle">Calle*</label>
          <input
            type="text"
            id="calle"
            name="calle"
            value={formData.calle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="numero">Número*</label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="piso">Piso</label>
          <input
            type="text"
            id="piso"
            name="piso"
            value={formData.piso}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="departamento">Departamento</label>
          <input
            type="text"
            id="departamento"
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="codigoPostal">Código Postal*</label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="mail">Correo Electrónico*</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="confirmarMail">Confirmar Correo Electrónico*</label>
          <input
            type="email"
            id="confirmarMail"
            name="confirmarMail"
            value={formData.confirmarMail}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Datos de tarjeta</h2>

        <div className="campo">
            <label htmlFor="nombreTitular">Nombre del Titular*</label>
            <input
            type="text"
            id="nombreTitular"
            name="nombreTitular"
            value={formData.nombreTitular}
            onChange={handleChange}
            required
            />
        </div>
        <div className="campo">
        <label htmlFor="numeroTarjeta">Número de Tarjeta*</label>
        <input
          type="text"
          id="numeroTarjeta"
          name="numeroTarjeta"
          value={formData.numeroTarjeta}
          onChange={handleNumeroTarjetaChange}
          maxLength="19" // Limita el número máximo de caracteres
          required
        />
      </div>
        <div className="campo">
            <label htmlFor="fechaVencimiento">Fecha de Vencimiento*</label>
            <DatePicker
            selected={formData.fechaVencimiento}
            onChange={handleFechaVencimientoChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            required
            />
        </div>
        <div className="campo">
            <label htmlFor="cvv">CVV*</label>
            <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleCVVChange}
            maxLength="3"
            inputMode="numeric"
            required
            />
        </div>

        {isValidEmail(mail) && mail === confirmarMail && formData.nombre !== '' && formData.apellido !== '' && formData.calle !== '' && formData.numero !== '' && formData.codigoPostal !== '' && formData.nombreTitular !== '' && formData.numeroTarjeta !== '' && formData.fechaVencimiento && formData.cvv !== '' ? (
        <Link to="/finalizar-compra" className="boton">
          Ir a finalizar compra
        </Link>
      ) : (
        <button type="submit" className="botonTwo">
          Completa todos los campos
        </button>
      )}
      </form>
    </div>
  );
};

export default DatosUsuario;


